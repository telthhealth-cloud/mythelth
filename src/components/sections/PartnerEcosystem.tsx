import { Users, Building2, Heart, Building } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

export const PartnerEcosystem = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const partnerTypes = [
    {
      icon: Users,
      title: "Become a Care Manager",
      description: "Lead community health initiatives and coordinate patient care delivery",
      benefits: ["Training provided", "Flexible hours", "Competitive compensation"],
    },
    {
      icon: Building2,
      title: "Franchise Partner",
      description: "Own and operate a Telth Smart Hub in your community",
      benefits: ["Proven business model", "Comprehensive support", "Exclusive territory"],
    },
    {
      icon: Heart,
      title: "Healthcare Provider",
      description: "Integrate Telth's platform into your practice for enhanced care delivery",
      benefits: ["Seamless integration", "Increased revenue", "Better patient outcomes"],
    },
    {
      icon: Building,
      title: "Government & CSR",
      description: "Partner with us to improve public health outcomes at scale",
      benefits: ["Large-scale deployment", "Community impact", "Sustainable solutions"],
    },
  ];

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = container.children[0].clientWidth;
    const scrollLeft = container.scrollLeft;
    const gap = 32;

    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    setActiveIndex(newIndex);
  };

  return (
    <section className="section-spacing bg-background">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-section-headline mb-6">Partner Ecosystem</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Join a global network transforming healthcare delivery. Multiple partnership opportunities to match your goals.
          </p>
        </div>

        {/* PURE SNAP CARDS, NO ARROWS */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto gap-8 snap-x snap-mandatory pb-8 px-4 md:px-12 scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;

            const offset = index - activeIndex;
            const scale = 1 - Math.abs(offset) * 0.1;
            const opacity = 1 - Math.abs(offset) * 0.3;

            return (
              <div
                key={partner.title}
                className="snap-center flex-shrink-0 w-[280px] md:w-[350px]"
              >
                <div
                  className="glass-card p-6 md:p-8 rounded-lg flex flex-col h-full transition-all duration-500 border shadow-xl bg-white"
                  style={{
                    transform: `scale(${scale}) translateY(${Math.abs(offset) * 10}px)`,
                    opacity,
                    borderColor: index === activeIndex ? "rgba(115, 103, 240, 0.4)" : "transparent",
                  }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold mb-3">{partner.title}</h3>

                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>

                  <div className="space-y-2 mb-6">
                    {partner.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <p className="text-xs text-muted-foreground">{benefit}</p>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full">
                    <Link to="/partner">Apply Now</Link>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {partnerTypes.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = scrollRef.current;
                if (!container) return;
                const cardWidth = container.children[0].clientWidth;
                const gap = 32;
                container.scrollTo({
                  left: index * (cardWidth + gap),
                  behavior: "smooth",
                });
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-primary w-8" : "bg-gray-300 w-3"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};
