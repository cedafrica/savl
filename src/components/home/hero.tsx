import { useState } from "react";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

const slides = [
  {
    caption: "SPACES WE TRANSFORM",
    title: "Welcome to Spectra AVL",
    description: "World-class audio, video, and lighting that elevate every environment.",
    maxWidth: "max-w-300",
    ctaText: "Explore Our Services",
    ctaLink: "/services"
  },
  {
    caption: "HOUSES OF WORSHIP",
    title: "Where Every Word Feels Divine.",
    description: "Immersive AVL that deepens worship.",
    maxWidth: "max-w-300",
    ctaText: "Explore Houses of Worship",
    ctaLink: "/application/house-of-worship"
  },
  {
    caption: "CAFÉS & RESTAURANTS",
    title: "Design the Mood. Elevate Every Moment.",
    description: "Atmosphere that keeps guests connected.",
    maxWidth: "max-w-300",
    ctaText: "Explore Cafes & Restaurants",
    ctaLink: "/application/cafes-restaurants"
  },
  {
    caption: "NIGHTCLUBS & LOUNGES",
    title: "Energy You Can Feel.",
    description: "High-impact AVL that brings the night to life.",
    maxWidth: "max-w-300",
    ctaText: "Explore Nihtclubs & Lounges",
    ctaLink: "/application/night-clubs-lounges"
  },
  {
    caption: "LARGE CONGREGATIONS",
    title: "Clarity That Unites Thousands.",
    description: "Powerful AVL that carries every message.",
    maxWidth: "max-w-300",
    ctaText: "Explore Large Congregations",
    ctaLink: "/application/large-congregations"
  },
  {
    caption: "HOTELS & RESORTS",
    title: "Luxury Experiences, Seamlessly Delivered.",
    description: "Elegant AVL that enhances every guest moment.",
    maxWidth: "max-w-300",
    ctaText: "Explore Hotels & Resorts",
    ctaLink: "/application/hotels-resorts"
  },
  {
    caption: "AUDITORIUMS & CONCERT HALLS",
    title: "Pure Performance for Every Seat.",
    description: "Precision sound and lighting for perfect acoustics.",
    maxWidth: "max-w-300",
    ctaText: "Explore",
    ctaLink: "/application/auditoriums-concert-halls"
  },
  {
    caption: "CONCERTS & LIVE EVENTS",
    title: "Power the Moment. Move the Crowd.",
    description: "Concert-grade AVL for unforgettable experiences.",
    maxWidth: "max-w-300",
    ctaText: "Explore",
    ctaLink: "/application/concerts-live-events"
  }
];



    const scrollPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  const scrollNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsAnimating(false), 500);
    }, 300);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative bg-[#000000] min-h-screen flex items-center sm:items-end overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="./bgv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-10 sm:px-32 py-12 sm:py-32 flex flex-col justify-center">
        <MaxContainer className="flex flex-col">
          <div
            className={`${currentSlideData.maxWidth} w-full transition-opacity duration-300 ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
          >
            {currentSlideData.caption && (
              <p className="text-white/60 tracking-[0.2em] text-[1.2rem] sm:text-[1.6rem] mb-6 uppercase">
                {currentSlideData.caption}
              </p>
            )}

            <h1 className="text-white text-[3.2rem] sm:text-[4.2rem] leading-[120%] font-bold mb-6">
              {currentSlideData.title}
            </h1>

            <p className="text-white/60 sm:w-[90%] text-[1.4rem] sm:text-[2rem] mb-6">
              {currentSlideData.description}
            </p>

            <a href={currentSlideData.ctaLink}>
  <Button
    className="
  sm:text-[1.6rem] text-[1.4rem]
  px-12 py-9 sm:px-16 sm:py-9
  rounded-[3rem]
  border border-white
  bg-transparent
  text-white
  font-semibold
  shadow-lg
  transition-all duration-500 ease-in-out
  hover:bg-white hover:text-black hover:scale-105
  flex items-center gap-3
"

  >
    {currentSlideData.ctaText}
    <MoveRight className="size-[1.9rem]" />
  </Button>
</a>

            <img
              src="/cedia.png"
              alt="CEDIA"
              className="sm:mt-12 mt-8 sm:w-[22.6rem] w-[15.1rem] h-auto"
            />
          </div>

          <div className="flex w-fit ml-auto mt-8 sm:mt-12 gap-[1.6rem]">
            <Button
              variant="outline"
              className="rounded-full cursor-pointer bg-transparent border-white hover:[&_svg]:text-black hover:bg-white size-[3.8rem] sm:size-[5.8rem]"
              onClick={scrollPrev}
            >
              <ArrowLeft className="sm:size-[1.4rem] size-[1.4rem] text-white" />
            </Button>

            <Button
              variant="outline"
              className="rounded-full cursor-pointer hover:[&_svg]:text-black hover:bg-white bg-transparent border-white size-[3.8rem] sm:size-[5.8rem]"
              onClick={scrollNext}
            >
              <ArrowRight className="sm:size-[1.4rem] size-[1.4rem] text-white" />
            </Button>
          </div>
        </MaxContainer>
      </div>
    </section>
  );
};

export default Hero;