import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const TrustedByLeaders = () => {
  const carouselApiRef = useRef<CarouselApi>(undefined);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = () => carouselApiRef.current?.scrollPrev();
  const scrollNext = () => carouselApiRef.current?.scrollNext();

  const updateButtonStates = () => {
    const api = carouselApiRef.current;
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  };

  useEffect(() => {
    const api = carouselApiRef.current;
    if (!api) return;

    updateButtonStates();
    api.on("select", updateButtonStates);

    const autoplay = setInterval(() => {
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    }, 3000);

    return () => {
      clearInterval(autoplay);
      api.off("select", updateButtonStates);
    };
  }, []);

  const leaders = [
    { image: "/ma.png", description: "MA Lighting is a leading provider of professional lighting control solutions." },
    { image: "/crestron.png", description: "Crestron is a global leader in automation and control solutions." },
    { image: "/infiled.png", description: "INFILED specializes in high-quality LED display solutions for events and installations." },
    { image: "/infiled.png", description: "INFILED specializes in high-quality LED display solutions for events and installations." },
  ];

  return (
    <section className="sm:px-32 px-6 sm:pt-32 pt-16">
      {/* Heading */}
      <div className="text-center space-y-4">
        <h2 className="sm:text-[3.8rem] text-[2.8rem] font-semibold text-black">
          Trusted by Industry Leaders
        </h2>
        <p className="sm:text-[2rem] text-[1.6rem] max-w-[47.1rem] mx-auto text-center">
          We partner with the world's most respected audiovisual brands
        </p>
      </div>

      {/* Carousel */}
      <MaxContainer className="sm:mt-20 mt-12">
        <Carousel
          className="w-full"
          setApi={(api) => {
            carouselApiRef.current = api;
            if (api) updateButtonStates();
          }}
          opts={{ align: "start", loop: true }}
        >
          <CarouselContent className="w-full">
            {leaders.map((item, index) => (
              <CarouselItem key={index} className="sm:basis-1/3">
                <div className="flex flex-col items-center text-center px-6 sm:px-8 py-8 sm:py-12 bg-[#F5F5F5] rounded-xl min-h-[28rem]">
                  {/* Logo centered */}
                  <div className="flex justify-center items-center w-70 h-32 sm:h-40 mb-6 sm:mb-8">
                    <img
                      src={item.image}
                      alt="logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  {/* Description */}
                  <p className="sm:text-[1.8rem] text-[1.6rem] text-center flex-1">
                    {item.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MaxContainer>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-8 sm:mt-12 gap-4 sm:gap-6">
        <Button
          variant="outline"
          className="rounded-full sm:w-14 sm:h-14 w-12 h-12 border-black disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="sm:w-6 sm:h-6 w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          className="rounded-full sm:w-14 sm:h-14 w-12 h-12 border-black disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowRight className="sm:w-6 sm:h-6 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default TrustedByLeaders;
