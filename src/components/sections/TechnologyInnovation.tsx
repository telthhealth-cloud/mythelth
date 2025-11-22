// TechnologyInnovationPinnedStack.tsx
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cpu, Shield, Cloud, Radio, Stethoscope, Microscope } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { icon: Cpu, name: "P3DSC™ Algorithm", description: "Precise Data-Driven Smart Care powered by Quantum AI" },
  { icon: Shield, name: "G-Med ID™", description: "Blockchain-based global health identity system" },
  { icon: Cloud, name: "RootCloud™", description: "Secure, scalable EMR ecosystem with global reach" },
  { icon: Radio, name: "TWBAN", description: "Textile Wireless Body Area Network for continuous monitoring" },
  { icon: Stethoscope, name: "DigiDoc AI", description: "Collaborative AI-powered care coordination platform" },
  { icon: Microscope, name: "Lab-on-Chip", description: "Next-generation diagnostic technology with 90+ parameters" },
];

export const TechnologyInnovation: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stackRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    // Only run effect for mobile widths (you said mobile-only)
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    // ensure refs are fresh
    const cards = cardRefs.current.filter(Boolean);
    if (!sectionRef.current || !stackRef.current || cards.length === 0) return;

    // Reset any existing ScrollTriggers to avoid duplicates in HMR/dev
    ScrollTrigger.getAll().forEach(st => st.kill());

    // initial layout: position cards absolutely and hide them (we enforce in CSS too)
    cards.forEach((c, i) => {
      gsap.set(c, {
        y: 120 + i * 6, // slight incremental offset for depth
        opacity: i === 0 ? 1 : 0,
        scale: 1 - Math.min(i * 0.02, 0.08),
        rotation: i === 0 ? 0 : (i % 2 === 1 ? -3 : 3), // initial rotate so deeper ones look rotated
        transformOrigin: "center bottom",
        zIndex: 2000 - i, // active top card highest z
      });
    });

    // Timeline: each card moves into center, becomes fully visible, and becomes the top card
    const tl = gsap.timeline({
      paused: true,
      defaults: { ease: "power3.out" },
      // ScrollTrigger will control the timeline (scrub = true allows scrubbing)
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        // pin the section full viewport height
        pin: true,
        // end length determines how long the pinned state stays.
        // Use viewportHeight * (number of cards + 1) to make room for each card reveal
        end: () => `+=${window.innerHeight * (technologies.length + 0.8)}`,
        scrub: 0.6, // small smoothing for snappy but natural motion
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // Build timeline steps: reveal cards one-by-one
    const step = 0.9; // relative gap between reveals; tweak for snappier/faster
    cards.forEach((c, i) => {
      const rotation = i === 0 ? 0 : (i % 2 === 1 ? -3 : 3);
      const translateYStart = 160; // from below
      const translateYOffset = i * 8; // deeper cards have slightly different final Y
      const finalScale = 1 - Math.min(i * 0.02, 0.08);

      // We animate each card from below (y positive) -> center (y 0-ish) with fade in and rotation adjust.
      tl.fromTo(
        c,
        { y: translateYStart + (technologies.length - i) * 6, opacity: 0, scale: finalScale - 0.02, rotation: rotation + 6 }, // start (further below, slightly different rotation)
        {
          y: translateYOffset,
          opacity: 1,
          scale: finalScale,
          rotation: rotation,
          duration: 0.7,
          // raise zIndex so current becomes top visually (we animate zIndex as immediate)
          onStart: () => gsap.set(c, { zIndex: 3000 }),
          onReverseComplete: () => {
            // when reversing beyond this card, restore zIndex ordering
            cards.forEach((cc, j) => gsap.set(cc, { zIndex: 2000 - j }));
          },
        },
        i * step
      );

      // add a tiny subtle bounce/settle after card arrives to feel snappy
      tl.to(
        c,
        {
          y: translateYOffset - 6,
          duration: 0.12,
          ease: "power1.out",
        },
        i * step + 0.7
      );
      tl.to(
        c,
        {
          y: translateYOffset,
          duration: 0.12,
          ease: "power1.in",
        },
        i * step + 0.82
      );
    });

    // Cleanup on unmount
    return () => {
      tl.scrollTrigger && tl.scrollTrigger.kill();
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section-spacing bg-charcoal text-white relative overflow-visible">
      <div className="container relative z-10">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-section-headline text-violet-400 mb-4">Technology Innovation</h2>
          <p className="text-body-large text-white/80 max-w-3xl mx-auto">
            Proprietary technologies powering the future of healthcare delivery
          </p>
        </div>

        {/* Desktop grid (unchanged) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div key={tech.name} className="p-8 rounded-lg glass-card hover:bg-white/10 transition-all duration-300 hover-lift">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                    <p className="text-sm text-white/70">{tech.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* MOBILE: pinned full-screen stack */}
        <div className="md:hidden">
          {/* Outer full-screen canvas while pinned */}
          <div ref={stackRef} className="relative w-full min-h-[390px] overflow-hidden">
            {/* decorative reference image (optional) */}
            <img
              src="/mnt/data/da3bab4b-0065-42cb-8982-bdaff6c2f180.png"
              alt="stack reference"
              className="absolute right-4 top-6 w-40 opacity-10 pointer-events-none hidden"
              style={{ transform: "translateZ(-100px)" }}
            />

            {/* stacking area: center container */}
            <div className="absolute inset-0 top-0 left-0 right-0 px-4 pt-4 flex justify-center  px-4">
              <div className="relative w-full max-w-lg">
                {technologies.map((tech, idx) => {
                  const Icon = tech.icon;
                  // set ref for gsap
                  return (
                    <article
                      key={tech.name}
                      ref={(el) => {
                        if (el) cardRefs.current[idx] = el;
                      }}
                      // base visual style
                      className="absolute left-0 right-0 mx-auto w-full bg-white/5 backdrop-blur-md border border-white/6 rounded-2xl shadow-2xl p-6"
                      style={{
                        willChange: "transform, opacity",
                        pointerEvents: "none", // avoid accidental taps interfering with scroll-trigger; we drive by scroll
                      }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                          <p className="text-sm text-white/70">{tech.description}</p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* footer copy under stack */}
        <div className="mt-2 text-center">
          <p className="text-body-large text-lime-500 mb-4">
            Built on cutting-edge quantum AI, blockchain, and IoT technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/60">
          <span className="text-cyan-400">•</span>
            <span>Quantum Computing</span>
            <span className="text-cyan-400">•</span>
            <span>Blockchain</span>
            <span className="text-cyan-400">•</span>
            <span>AI/ML</span>
            <span className="text-cyan-400">•</span>
            <span>IoMT</span>
            <span className="text-cyan-400">•</span>
            <span>Edge Computing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyInnovation;
