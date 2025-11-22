import { HeroSection } from "../HeroSection";
import { FeatureCard } from "../FeatureCard";
import { StatCard } from "../StatCard";
import { Button } from "../ui/button";
import { Building2, Users, Heart, TrendingUp } from "lucide-react";
import heroCommunity from "@/assets/hero-community.jpg";

export const CommunityTab = () => {
  return (
    <div className="space-y-20">
      <HeroSection
        title="Redefining Care. Redefining Connection."
        subtitle="Quantum-AI powered healthcare ecosystem connecting communities worldwide through precision care and human touch"
        image={heroCommunity}
        video="/videos/hospital-corridor.mp4"
        primaryCta="Explore Community Solutions"
        secondaryCta="Become a Partner"
      />

      <section className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">What is Community Care?</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Telth Community Care brings advanced preventive healthcare and AI-driven diagnostics directly to local communities through smart health hubs and wellness programs integrated with national health systems.
            </p>
            <Button className="bg-white" size="lg">Learn More</Button>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 aspect-video flex items-center justify-center">
            <Building2 className="h-32 w-32 text-primary/100" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions designed for communities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={Building2}
            title="Smart Health Hubs"
            description="State-of-the-art facilities equipped with AI diagnostics and telemedicine capabilities in your neighborhood"
            tiltOnHover={true} // Add this prop
          />
          <FeatureCard
            icon={Users}
            title="Community Programs"
            description="Preventive health screenings, wellness workshops, and health education initiatives"
            tiltOnHover={true} // Add this prop
          />
          <FeatureCard
            icon={Heart}
            title="Integrated Care"
            description="Seamless connection with national health systems including Medicare, Medicaid, and NHS"
            tiltOnHover={true} // Add this prop
          />
          <FeatureCard
            icon={TrendingUp}
            title="Proven Results"
            description="65% cost reduction and 75% shorter care cycles through AI-powered efficiency"
            tiltOnHover={true} // Add this prop
          />
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Healthcare Initiatives</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-background p-6 rounded-lg border hover:rotate-1 hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2">Medicare/Medicaid</h3>
              <p className="text-sm text-muted-foreground">Collaboration with USA healthcare systems</p>
            </div>
            <div className="bg-background p-6 rounded-lg border hover:rotate-1 hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2">National Health Mission</h3>
              <p className="text-sm text-muted-foreground">Support programs in India</p>
            </div>
            <div className="bg-background p-6 rounded-lg border hover:rotate-1 hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2">CSR-Funded Health</h3>
              <p className="text-sm text-muted-foreground">Community health programs</p>
            </div>
            <div className="bg-background p-6 rounded-lg border hover:rotate-1 hover:scale-105 transition-all duration-300">
              <h3 className="font-semibold mb-2">Smart City Healthcare</h3>
              <p className="text-sm text-muted-foreground">Infrastructure development</p>
            </div>
          </div>

          <div className="w-full flex justify-center mt-6 sm:mt-8 px-4">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-center"
            >
              Discuss Partnership Opportunities
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
};