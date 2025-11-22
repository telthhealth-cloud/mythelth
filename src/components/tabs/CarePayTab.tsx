import { HeroSection } from "../HeroSection";
import { Button } from "../ui/button";
import { CreditCard, Shield, Zap, Users } from "lucide-react";
import heroCarePay from "@/assets/hero-carepay.jpg";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const CarePayTab = () => {
  return (
    <div className="space-y-20">
      <HeroSection
        title="Healthcare That Fits Your Life"
        subtitle="Flexible subscription plans and unified payment solutions powered by Care Pay™"
        image={heroCarePay}
        primaryCta="Explore Plans"
        secondaryCta="Calculate Savings"
      />

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Care Plan</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare coverage tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Essential</CardTitle>
              <div className="text-3xl font-bold text-primary mt-2">
                $49<span className="text-base text-muted-foreground">/month</span>
              </div>
              <CardDescription>Perfect for individuals and families</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Annual health screening</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Virtual doctor consultations</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Basic IoMT device</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">24/7 AI health assistant</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary shadow-lg relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <div className="text-3xl font-bold text-primary mt-2">
                $99<span className="text-base text-muted-foreground">/month</span>
              </div>
              <CardDescription>Comprehensive care for your whole family</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Everything in Essential</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Quarterly home visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Advanced IoMT devices</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Personal Care Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Priority specialist referrals</span>
                </li>
              </ul>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="text-2xl">Elite</CardTitle>
              <div className="text-3xl font-bold text-primary mt-2">
                $199<span className="text-base text-muted-foreground">/month</span>
              </div>
              <CardDescription>Complete personalized health management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Everything in Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Monthly home visits</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">P3DSC™ personalized care</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">Genetic screening included</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-sm">24/7 concierge service</span>
                </li>
              </ul>
              <Button className="w-full" variant="outline">Get Started</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Care Pay™?</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-lg border text-center">
              <CreditCard className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Unified Payment</h3>
              <p className="text-sm text-muted-foreground">One subscription for all your healthcare needs</p>
            </div>
            <div className="bg-background p-6 rounded-lg border text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Secure & HIPAA</h3>
              <p className="text-sm text-muted-foreground">Bank-level encryption and data protection</p>
            </div>
            <div className="bg-background p-6 rounded-lg border text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Instant Access</h3>
              <p className="text-sm text-muted-foreground">No waiting periods or claim approvals</p>
            </div>
            <div className="bg-background p-6 rounded-lg border text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Family Plans</h3>
              <p className="text-sm text-muted-foreground">Cover your entire family with savings</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise & Government Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Custom healthcare solutions for organizations of any size. Integrate Care Pay™ with your existing benefits and insurance programs.
          </p>
          <Button size="lg">Contact Enterprise Sales</Button>
        </div>
      </section>
    </div>
  );
};
