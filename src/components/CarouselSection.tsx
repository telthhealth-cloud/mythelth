import { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CarouselSectionProps {
  children: ReactNode[];
}

export const CarouselSection = ({ children }: CarouselSectionProps) => {
  return (
    <div className="md:hidden px-12">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {children.map((child, index) => (
            <CarouselItem key={index} className="pl-4 basis-[85%]">
              <div className="perspective-1000">
                {child}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};
