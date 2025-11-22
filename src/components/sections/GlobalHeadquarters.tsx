import { MapPin } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export const GlobalHeadquarters = () => {
  const locations = [
    {
      region: "United States",
      type: "Global Headquarters",
      address: "Corporate Office, USA",
      description: "Strategic command center driving global healthcare innovation",
    },
    {
      region: "United Kingdom",
      type: "R&D & AI Innovation Hubs",
      address: "Research Facilities, UK",
      description: "Advanced research in quantum AI and precision medicine",
    },
    {
      region: "India",
      type: "Operations & Manufacturing",
      address: "IIT Madras Research Park, Chennai",
      description: "Large-scale operations, smart hub manufacturing, and technology development",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollX, setScrollX] = useState(0);

  // track scroll for cinematic effect
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => setScrollX(el.scrollLeft);
    el.addEventListener("scroll", handleScroll);

    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="section-spacing bg-light-gray">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-headline mb-6">Global Headquarters</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Strategically positioned across three continents to deliver world-class healthcare solutions
          </p>
        </div>

        {/* MOBILE CINEMATIC SCROLL (visible only on small screens) */}
        <div className="md:hidden relative flex gap-6 overflow-x-auto snap-x snap-mandatory px-4 pb-8 scrollbar-hide"
          style={{
            perspective: "1400px",
            scrollBehavior: "smooth",
          }}
          ref={scrollRef}
        >
          {locations.map((location, index) => {
            // --- Cinematic transform only for mobile ---
            const cardWidth = 280;
            const center = scrollX + window.innerWidth / 2;
            const cardCenter = index * (cardWidth + 24) + cardWidth / 2;

            const distance = Math.abs(center - cardCenter);
            const scale = Math.max(0.85, 1 - distance / 900);
            const rotateY = (center - cardCenter) / 35; // curved angle

            return (
              <div
                key={location.region}
                style={{
                  transform: `
            scale(${scale})
            rotateY(${rotateY}deg)
          `,
                  transition: "transform 0.25s ease-out",
                  transformStyle: "preserve-3d",
                }}
                className="snap-center shrink-0 w-[280px]"
              >
                <div className="glass-card p-8 rounded-2xl hover-lift shadow-xl">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-card-title mb-1">{location.region}</h3>
                      <p className="text-sm font-semibold text-primary">{location.type}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
                  <p className="text-body-standard">{location.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* DESKTOP 3-COLUMN NORMAL VIEW */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 mb-12">
          {locations.map((location) => (
            <div
              key={location.region}
              className="glass-card p-8 rounded-lg hover-lift"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-card-title mb-1">{location.region}</h3>
                  <p className="text-sm font-semibold text-primary">{location.type}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">{location.address}</p>
              <p className="text-body-standard">{location.description}</p>
            </div>
          ))}
        </div>


        {/* Additional Facilities */}
        <div className="glass-card p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">Additional Facilities</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "IIT Madras Research Park - Chennai",
              "SIPCOT Industrial Park - Oragadam",
              "Technology Center - Bangalore",
            ].map((facility) => (
              <div key={facility} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <p className="text-body-standard">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
