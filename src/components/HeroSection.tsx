import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import ECGPulseWave from "./ui/ecgwave";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
  video?: string;
  primaryCta: string; 
  secondaryCta?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export const HeroSection = ({
  title,
  subtitle,
  image,
  video,
  primaryCta,
  secondaryCta,
  onPrimaryClick,
  onSecondaryClick,
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden h-[600px] md:h-[600px] flex items-center">
      {/* ECG Pulse Lines Background */}
      <div className="absolute inset-0 flex items-center justify-around opacity-20 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="w-1 h-full bg-white animate-ecg-pulse"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>

      {video ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-[#EDDD53]/70 to-gold/70" />

      <div className="container relative z-10">
        <div className="max-w-[900px] mx-auto text-center space-y-6 animate-fade-in-up">
          <div className="relative inline-block">
            <div className="ecg-line-overlay -mt-3" />
            <div className="absolute inset-0 z-0 -mt-2">
              <ECGPulseWave />
            </div>         
               <h1 className="text-hero text-foreground font-bold drop-shadow-lg animate-ecg-draw relative">
              {title}
            </h1>
          </div>
          <p className="text-body-large text-foreground/90 max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="text-button hover-lift shadow-lg"
              onClick={onPrimaryClick}
            >
              {primaryCta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                className="text-button glass-strong border-2 border-foreground/40 text-foreground hover:bg-foreground hover:text-background hover-lift"
                onClick={onSecondaryClick}
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
