import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Stethoscope, Users, Globe } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useState } from "react";

const partnerInquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().min(10, "Phone number must be at least 10 characters").max(20),
  company: z.string().min(2, "Company name is required").max(100),
  partnerType: z.string().min(1, "Please select a partnership type"),
  location: z.string().min(2, "Location is required").max(100),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

type PartnerInquiryForm = z.infer<typeof partnerInquirySchema>;

const Partner = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm<PartnerInquiryForm>({
    resolver: zodResolver(partnerInquirySchema),
  });

  const onSubmit = async (data: PartnerInquiryForm) => {
    setIsSubmitting(true);
    try {
      const { data: result, error } = await supabase.functions.invoke('submit-partner-inquiry', {
        body: data,
      });

      if (error) throw error;

      toast.success("Thank you for your interest! We'll be in touch soon.");
      reset();
    } catch (error: any) {
      console.error("Error submitting inquiry:", error);
      toast.error(error.message || "Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Partner With Us</h1>
              <p className="text-lg text-muted-foreground">
                Join the Telth ecosystem and transform healthcare delivery together
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Care Manager</CardTitle>
                <CardDescription>Become a trained healthcare advocate in your community</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Building2 className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Franchise</CardTitle>
                <CardDescription>Open a Telth Smart Hub in your area</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Stethoscope className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Healthcare Provider</CardTitle>
                <CardDescription>Integrate Telth technology into your practice</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Government</CardTitle>
                <CardDescription>Scalable public health infrastructure solutions</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Partner Inquiry Form</CardTitle>
                <CardDescription>
                  Tell us about your interest in partnering with Telth
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input 
                        id="fullName" 
                        placeholder="John Doe"
                        {...register("fullName")}
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive">{errors.fullName.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 000-0000"
                        {...register("phone")}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input 
                        id="company" 
                        placeholder="Company Name"
                        {...register("company")}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="partnerType">Partnership Type</Label>
                    <Select onValueChange={(value) => setValue("partnerType", value)}>
                      <SelectTrigger id="partnerType">
                        <SelectValue placeholder="Select partnership type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="care-manager">Care Manager</SelectItem>
                        <SelectItem value="franchise">Franchise</SelectItem>
                        <SelectItem value="provider">Healthcare Provider</SelectItem>
                        <SelectItem value="government">Government</SelectItem>
                        <SelectItem value="technology">Technology Partner</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.partnerType && (
                      <p className="text-sm text-destructive">{errors.partnerType.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location/Region</Label>
                    <Input 
                      id="location" 
                      placeholder="City, State/Country"
                      {...register("location")}
                    />
                    {errors.location && (
                      <p className="text-sm text-destructive">{errors.location.message}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your partnership interest..."
                      rows={6}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Why Partner With Telth?</h2>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">10x</div>
                  <p className="text-muted-foreground">Revenue growth potential for partners</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">65%</div>
                  <p className="text-muted-foreground">Cost efficiency improvement</p>
                </div>
                <div className="bg-background p-6 rounded-lg">
                  <div className="text-4xl font-bold text-primary mb-2">Global</div>
                  <p className="text-muted-foreground">Reach across USA, UK, and India</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Partner;
