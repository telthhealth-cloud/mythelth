import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Globe, Heart, Zap, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">About Telth</h1>
              <p className="text-lg text-muted-foreground">
                Building a global quantum-AI health network that makes precision medicine accessible to everyone, everywhere
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Telth is not just a healthcare technology company - we're building a global quantum-AI health network that makes precision medicine accessible to everyone, everywhere. We bridge worlds: quantum AI with human care, tradition with innovation, global scale with local presence, enterprise solutions with personal wellness.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 border rounded-lg bg-card">
                <Globe className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Global Presence</h3>
                <p className="text-muted-foreground">
                  Operating across USA, UK, and India with plans for worldwide expansion
                </p>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Human-Centered</h3>
                <p className="text-muted-foreground">
                  Technology enhanced by human touch through our Care Manager network
                </p>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <Zap className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Innovation Leader</h3>
                <p className="text-muted-foreground">
                  Pioneering quantum AI algorithms and blockchain health identity systems
                </p>
              </div>

              <div className="p-6 border rounded-lg bg-card">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Focus</h3>
                <p className="text-muted-foreground">
                  Making world-class preventive care accessible in every neighborhood
                </p>
              </div>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Excellence:</span> We deliver world-class healthcare through cutting-edge technology
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Accessibility:</span> Healthcare should be available to everyone, regardless of location
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Innovation:</span> Constantly pushing boundaries in healthcare technology
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <span className="font-semibold">Integrity:</span> Operating with transparency and the highest ethical standards
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <Button size="lg">Join Our Mission</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
