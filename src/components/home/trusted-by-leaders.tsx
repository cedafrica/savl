import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { useRef, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import type { CarouselApi } from "@/components/ui/carousel"

const TrustedByLeaders = () => {
    const carouselApiRef = useRef<CarouselApi>(undefined);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const scrollPrev = () => {
        carouselApiRef.current?.scrollPrev();
    };

    const scrollNext = () => {
        carouselApiRef.current?.scrollNext();
    };

    // Update button states
    const updateButtonStates = () => {
        const api = carouselApiRef.current;
        if (!api) return;

        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    };

    // Auto-play functionality with proper loop
    useEffect(() => {
        const api = carouselApiRef.current;
        if (!api) return;

        // Initial button state
        updateButtonStates();

        // Listen for scroll events to update button states
        api.on("select", updateButtonStates);

        const autoplay = setInterval(() => {
            if (api.canScrollNext()) {
                api.scrollNext();
            } else {
                // Loop back to start
                api.scrollTo(0);
            }
        }, 3000); // Auto-scroll every 3 seconds

        return () => {
            clearInterval(autoplay);
            api.off("select", updateButtonStates);
        };
    }, []);

    const leaders = [
        {
            image: "/ma.png",
            description: "MA Lighting is a leading provider of professional lighting control solutions, renowned for its grandMA consoles and innovative stage lighting technology."
        },
        {
            image: "/crestron.png",
            description: "Crestron is a global leader in automation and control solutions, delivering advanced technologies for smart homes, offices, and AV integration."
        },
        {
            image: "/infiled.png",
            description: "INFILED specializes in high-quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations."
        },
        {
            image: "/infiled.png",
            description: "INFILED specializes in high-quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations."
        },
        {
            image: "/infiled.png",
            description: "INFILED specializes in high-quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations."
        },
    ]
    
    return (
        <section className="sm:px-32 px-10 sm:pt-[6.6rem] pt-[3.1rem]">
            <h2 className="text-center sm:text-[3.8rem] font-semibold text-[2.8rem]">Trusted by Industry Leaders</h2>
            <p className="text-center mx-auto sm:text-[2rem] text-[1.6rem] max-w-[47.1rem]">We partner with the world's most respected audiovisual brands</p>

            <MaxContainer
                className="sm:mt-32 mt-[4.1rem]"
            >
                <Carousel 
                    className="w-full" 
                    setApi={(api) => {
                        carouselApiRef.current = api;
                        if (api) {
                            updateButtonStates();
                        }
                    }}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent 
                        className="w-full"
                
                    >
                        {
                            leaders.map((item, index) => {
                                return (
                                    <CarouselItem 
    key={index}
    className="sm:basis-1/3"
>
    <div
        className="flex flex-col justify-between px-[2.4rem] pt-[3.2rem] sm:pb-[6.8rem] pb-[4.1rem] bg-[#F5F5F5] w-full rounded-[.54rem] min-h-[28rem]" // equal height
    >
        <img
            src={item.image}
            alt="logo"
            className="sm:w-50 w-24 mx-auto object-contain" // smaller logos, centered
        />
        <p className="sm:text-[1.8rem] text-[1.6rem] sm:mt-8 mt-6 text-center">
            {item.description}
        </p>
    </div>
</CarouselItem>

                                )
                            })
                        }
                    </CarouselContent>
                </Carousel>
            </MaxContainer>
            <div className="flex justify-center mt-[1.6rem] sm:mt-[4.1rem] gap-[1.6rem]">
                <Button
                    variant="outline"
                    className="rounded-full border-black sm:size-[5.8rem] size-[4.1rem] disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={scrollPrev}
                    disabled={!canScrollPrev}
                >
                    <ArrowLeft
                        className="sm:size-[2.1rem] size-[1.6rem]"
                    />
                </Button>
                <Button
                    variant="outline"
                    className="rounded-full border-black sm:size-[5.8rem] size-[4.1rem] disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={scrollNext}
                    disabled={!canScrollNext}
                >
                    <ArrowRight
                        className="sm:size-[2.1rem] size-[1.6rem]"
                    />
                </Button>
            </div>
        </section>
    );
}

export default TrustedByLeaders;