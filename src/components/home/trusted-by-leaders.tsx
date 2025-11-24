import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

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
    {
      image: "/ma.png",
      description:
        "MA Lighting is a leading provider of professional lighting control solutions, renowned for its grandMA consoles and innovative stage lighting technology.",
    },
    {
      image: "/crestron.png",
      description:
        "Crestron is a global leader in automation and control solutions, delivering advanced technologies for smart homes, offices, and AV integration.",
    },
    {
      image: "/infiled.png",
      description:
        "INFILED specializes in high-quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations.",
    },
    {
      image: "/infiled.png",
      description:
        "INFILED specializes in high-quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations.",
    },
  ];

  return (
    <section className="sm:px-32 px-10 sm:pt-[6.6rem] pt-[3.1rem]">
      {/* Heading */}
      <motion.div
        className="text-center space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-center sm:text-[3.8rem] font-semibold text-[2.8rem]">
          Trusted by Industry Leaders
        </h2>
        <p className="text-center mx-auto sm:text-[2rem] text-[1.6rem] max-w-[47.1rem]">
          We partner with the world's most respected audiovisual brands
        </p>
      </motion.div>

      {/* Carousel */}
      <MaxContainer className="sm:mt-32 mt-[4.1rem]">
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
                <motion.div
                  className="flex flex-col justify-between px-[2.4rem] pt-[3.2rem] sm:pb-[6.8rem] pb-[4.1rem] bg-[#F5F5F5] w-full rounded-[.54rem] min-h-[28rem]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 1}
                >
                  <img
                    src={item.image}
                    alt="logo"
                    className="sm:w-50 w-24 mx-auto object-contain"
                  />
                  <p className="sm:text-[1.8rem] text-[1.6rem] sm:mt-8 mt-6 text-center">
                    {item.description}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </MaxContainer>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-[1.6rem] sm:mt-[4.1rem] gap-[1.6rem]">
        <Button
          variant="outline"
          className="rounded-full sm:size-[5.8rem] size-[4.1rem] border-black disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollPrev}
          disabled={!canScrollPrev}
        >
          <ArrowLeft className="sm:size-[2.1rem] size-[1.6rem]" />
        </Button>
        <Button
          variant="outline"
          className="rounded-full sm:size-[5.8rem] size-[4.1rem] border-black disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={scrollNext}
          disabled={!canScrollNext}
        >
          <ArrowRight className="sm:size-[2.1rem] size-[1.6rem]" />
        </Button>
      </div>
    </section>
  );
};

export default TrustedByLeaders;
