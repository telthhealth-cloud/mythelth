import { HeroSection } from "../HeroSection";
import { FeatureCard } from "../FeatureCard";
import { Button } from "../ui/button";
import { Home, Activity, Stethoscope, Calendar } from "lucide-react";
import heroCareHome from "@/assets/hero-carehome.jpg";

export const CareHomeTab = () => {
  return (
    <div className="space-y-20">
      <HeroSection
        title="Advanced Healthcare, Your Space"
        subtitle="Remote diagnostics, IoMT monitoring, and virtual care delivered to your doorstep"
        image={heroCareHome}
        video="/videos/home-care-treatment.mp4"
        primaryCta="Request Care@Home Services"
        secondaryCta="Learn More"
      />

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Care@Home Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to comprehensive healthcare at home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
              1
            </div>
            <h3 className="text-xl font-bold">Book Care Manager Visit</h3>
            <p className="text-muted-foreground">
              Schedule through app, web, or phone. Care Manager comes to your home with portable diagnostic equipment.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
              2
            </div>
            <h3 className="text-xl font-bold">Comprehensive Assessment</h3>
            <p className="text-muted-foreground">
              90+ parameter health screening at home. Real-time data sync to RootCloud™ EHR with immediate AI analysis.
            </p>
          </div>
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto">
              3
            </div>
            <h3 className="text-xl font-bold">Continuous Care</h3>
            <p className="text-muted-foreground">
              Virtual doctor consultations, IoMT device monitoring, medication delivery, and regular follow-ups.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IoMT Device Ecosystem</h2>
            <p className="text-lg text-muted-foreground">
              Advanced monitoring devices that connect you with your healthcare team
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-2">Telth HES Pro Plus</h3>
              <p className="text-muted-foreground text-sm mb-4">51 parameters • 20-min turnaround</p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Complete blood analysis</li>
                <li>• Vital signs monitoring</li>
                <li>• ECG and cardiac markers</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-2">Smart Wearables</h3>
              <p className="text-muted-foreground text-sm mb-4">24/7 monitoring • Real-time sync</p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Heart rate & rhythm</li>
                <li>• Blood oxygen levels</li>
                <li>• Activity tracking</li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-lg border">
              <h3 className="font-bold text-lg mb-2">Home Diagnostic Kit</h3>
              <p className="text-muted-foreground text-sm mb-4">Multi-parameter • Lab-quality</p>
              <ul className="text-sm space-y-2 text-muted-foreground">
                <li>• Blood glucose monitoring</li>
                <li>• Blood pressure tracking</li>
                <li>• Temperature monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <Home className="h-32 w-32 text-primary/30" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Your Personal Care Manager</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your personal healthcare advocate - a trained Care Manager who coordinates with doctors, monitors your health data, and ensures you receive timely, personalized care.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">Regular home visits for assessments</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">Coordinate with your UK/US/India medical team</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">Monitor IoMT device data and arrange specialist consultations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
