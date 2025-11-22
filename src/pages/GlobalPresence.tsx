import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, MapPin } from "lucide-react";

const GlobalPresence = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Global Presence</h1>
              <p className="text-lg text-muted-foreground">
                Operating across continents to bring advanced healthcare to every community
              </p>
            </div>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>United States</CardTitle>
                <CardDescription>Headquarters & Operations Center</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Medicare/Medicaid partnerships</li>
                  <li>• Johns Hopkins collaboration</li>
                  <li>• Harvard research partnership</li>
                  <li>• 200+ Smart Hubs planned</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>United Kingdom</CardTitle>
                <CardDescription>European Operations Hub</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• NHS integration programs</li>
                  <li>• HSBC UK financial solutions</li>
                  <li>• Research & innovation center</li>
                  <li>• 150+ Smart Hubs planned</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>India</CardTitle>
                <CardDescription>Innovation & Development Center</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• National health mission support</li>
                  <li>• IIT Madras research partnership</li>
                  <li>• Ayurveda integration programs</li>
                  <li>• 650+ Smart Hubs planned</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Regional Offices & Facilities</h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    North America
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-1">Primary Locations</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• New York, NY - Global HQ</li>
                        <li>• San Francisco, CA - Innovation Lab</li>
                        <li>• Boston, MA - Research Center</li>
                        <li>• Chicago, IL - Operations Hub</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Expansion Markets</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Los Angeles, CA</li>
                        <li>• Houston, TX</li>
                        <li>• Miami, FL</li>
                        <li>• Seattle, WA</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Europe
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-1">Primary Locations</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• London - European HQ</li>
                        <li>• Manchester - Operations Center</li>
                        <li>• Birmingham - Smart Hub Network</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Expansion Markets</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Edinburgh, Scotland</li>
                        <li>• Cardiff, Wales</li>
                        <li>• Dublin, Ireland (planned)</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Asia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="font-semibold mb-1">Primary Locations</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Bangalore - R&D Center</li>
                        <li>• Chennai - Manufacturing Hub</li>
                        <li>• Delhi - Operations Center</li>
                        <li>• Mumbai - Business Development</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Expansion Markets</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Hyderabad</li>
                        <li>• Pune</li>
                        <li>• Kolkata</li>
                        <li>• Ahmedabad</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground py-16">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">1000+ Smart Hubs Planned</h2>
              <p className="text-lg opacity-90">
                Over the next 2 years, we're rolling out our global network of Smart Health Hubs to bring advanced healthcare to every community
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-sm opacity-90">USA</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">150+</div>
                  <div className="text-sm opacity-90">UK</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">650+</div>
                  <div className="text-sm opacity-90">India</div>
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

export default GlobalPresence;
