import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock } from "lucide-react";

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior AI/ML Engineer",
      location: "Remote / USA",
      type: "Full-time",
      department: "Engineering",
      description: "Lead the development of our quantum-AI healthcare algorithms"
    },
    {
      title: "Healthcare Data Scientist",
      location: "UK / Remote",
      type: "Full-time",
      department: "Research",
      description: "Analyze health data to improve patient outcomes and care delivery"
    },
    {
      title: "Care Manager",
      location: "Multiple Locations",
      type: "Full-time",
      department: "Care Delivery",
      description: "Provide personalized healthcare coordination for patients"
    },
    {
      title: "Product Manager - Healthcare",
      location: "USA / India",
      type: "Full-time",
      department: "Product",
      description: "Drive product strategy for our IoMT device ecosystem"
    },
    {
      title: "Blockchain Engineer",
      location: "Remote",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain our G-Med ID blockchain infrastructure"
    },
    {
      title: "Clinical Integration Specialist",
      location: "UK",
      type: "Full-time",
      department: "Operations",
      description: "Partner with healthcare providers to integrate Telth solutions"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Join Our Mission</h1>
              <p className="text-lg text-muted-foreground">
                Help us transform healthcare delivery globally through innovative technology and human-centered care
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Work at Telth?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-muted-foreground">
                  Work on technology that improves millions of lives worldwide
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Innovation Culture</h3>
                <p className="text-muted-foreground">
                  Push boundaries with quantum AI and blockchain technology
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-card">
                <h3 className="text-xl font-bold mb-2">Growth & Learning</h3>
                <p className="text-muted-foreground">
                  Continuous learning opportunities and career advancement
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {jobOpenings.map((job, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                        <CardDescription className="text-base mb-3">
                          {job.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 items-start md:items-end">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Button>Apply Now</Button>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold">Don't See Your Role?</h2>
              <p className="text-lg text-muted-foreground">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <Button size="lg">Submit General Application</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;
