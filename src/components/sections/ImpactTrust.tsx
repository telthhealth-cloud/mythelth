import { CarouselSection } from "@/components/CarouselSection";

export const ImpactTrust = () => {
  const stats = [
    { value: "65%", label: "Cost reduction in healthcare delivery" },
    { value: "75%", label: "Shorter care cycles" },
    { value: "90+", label: "Parameters in 20 minutes" },
    { value: "20 years", label: "Health prediction capability" },
    { value: "10x", label: "Revenue increase for providers" },
    { value: "1000+", label: "Smart Hubs planned (2-year rollout)" },
  ];

  const partners = [
    "NHS (UK)",
    "Johns Hopkins Hospital",
    "Harvard Research",
    "HSBC UK",
    "Wibmo/PayU",
    "IIT Madras",
  ];

  return (
    <section className="section-spacing bg-primary text-white">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-14 md:mb-16 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-section-headline mb-4 sm:mb-6">
            Transforming Healthcare Delivery Globally
          </h2>
          <p className="text-sm sm:text-base md:text-body-large text-white/90 max-w-2xl sm:max-w-3xl mx-auto">
            Delivering measurable impact through innovation, precision, and scale
          </p>
        </div>

        {/* Stats Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl lg:max-w-6xl mx-auto mb-14 md:mb-20 perspective-1000">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                text-center 
                p-6 lg:p-8
                rounded-xl 
                glass-card 
                hover-lift 
                hover:scale-[1.04] 
                transition-transform 
                duration-300
              "
              style={{
                transform: `translateZ(${index % 2 === 0 ? "20px" : "0px"})`,
                zIndex: index % 2 === 0 ? 2 : 1,
              }}
            >
              <div className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-2 lg:mb-3">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <CarouselSection>
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 sm:p-8 rounded-xl glass-card"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-white/90">{stat.label}</div>
            </div>
          ))}
        </CarouselSection>

        {/* Partners */}
        <div className="text-center mt-16 md:mt-20">
          <h3 className="text-xl sm:text-2xl md:text-subsection mb-6 sm:mb-8">
            Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
            {partners.map((partner) => (
              <div
                key={partner}
                className="text-base sm:text-lg font-medium text-white/90 hover:text-white transition-colors"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
