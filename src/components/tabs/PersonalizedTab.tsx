import { HeroSection } from "../HeroSection";
import { StatCard } from "../StatCard";
import { Button } from "../ui/button";
import { Brain, Dna, Activity, Shield } from "lucide-react";
import heroPersonalized from "@/assets/hero-personalized.jpg";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export const PersonalizedTab = () => {
  return (
    <div className="space-y-20">
      <HeroSection
        title="Your Health, Precisely Yours"
        subtitle="AI-powered precision health insights and lifetime care planning through P3DSC™ technology"
        image={heroPersonalized}
        primaryCta="Start Your Journey"
        secondaryCta="Learn About P3DSC™"
      />

      <section className="container">
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-center">
              P3DSC™ Technology
            </CardTitle>
            <p className="text-center text-lg text-muted-foreground">
              Precise Data-Driven Digital Smart Care
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg text-center max-w-3xl mx-auto">
              Our proprietary Quantum AI Algorithm analyzes your complete health data to predict potential health issues up to 20 years in advance, creating personalized prevention and care strategies.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 pt-6">
              <div className="text-center p-4 bg-background rounded-lg border">
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Predictive Health Modeling</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Dna className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Genetic Screening</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">90+ Parameters</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Personalized Protocols</p>
              </div>
              <div className="text-center p-4 bg-background rounded-lg border">
                <Activity className="h-8 w-8 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium">Continuous Optimization</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="bg-muted py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Impact</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <StatCard value="65%" label="Healthcare cost reduction" />
            <StatCard value="75%" label="Shorter care cycles" />
            <StatCard value="90+" label="Diagnostic parameters" />
            <StatCard value="20 years" label="Health prediction" />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Care Management</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every aspect of your health journey, precisely managed
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-3">Chronic Disease Management</h3>
            <p className="text-muted-foreground">
              AI-powered monitoring and intervention for diabetes, hypertension, cardiac conditions, and more
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-3">Mental Health Support</h3>
            <p className="text-muted-foreground">
              Integrated behavioral health tracking with virtual counseling and stress management programs
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-3">Medication Optimization</h3>
            <p className="text-muted-foreground">
              Smart medication management with interaction checking and adherence monitoring
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-3">Nutritional Planning</h3>
            <p className="text-muted-foreground">
              Personalized diet plans based on your genetic profile, health goals, and lifestyle
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-3">Fitness Integration</h3>
            <p className="text-muted-foreground">
              Custom exercise programs with traditional wellness practices like Yoga and Ayurveda
            </p>
          </div>
          <div className="p-6 border rounded-lg bg-card hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-lg mb-3">Preventive Screenings</h3>
            <p className="text-muted-foreground">
              Scheduled health checks and early detection programs based on your risk profile
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg">Create Your Personalized Plan</Button>
        </div>
      </section>
    </div>
  );
};
