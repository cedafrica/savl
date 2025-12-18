import { useState, useEffect } from "react";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AUTOPLAY_DELAY = 5000;

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      caption: "SPACES WE TRANSFORM",
      title: "Welcome to Spectra AVL",
      description:
        "World-class audio, video, and lighting engineered to transform every environment.",
      ctaText: "Explore Our Services",
      ctaLink: "/services",
      bg: "/led.webp",
    },
    {
      caption: "HOUSES OF WORSHIP",
      title: "Where Every Word Feels Divine.",
      description: "Immersive AVL that deepens worship.",
      ctaText: "Explore Houses of Worship",
      ctaLink: "/application/house-of-worship",
      bg: "/chu.webp",
    },
    {
      caption: "CAFÉS & RESTAURANTS",
      title: "Design the Mood. Elevate Every Moment.",
      description: "Atmosphere that keeps guests connected.",
      ctaText: "Explore Cafes & Restaurants",
      ctaLink: "/application/cafes-restaurants",
      bg: "/kilala3.webp",
    },
    {
      caption: "NIGHTCLUBS & LOUNGES",
      title: "Energy You Can Feel.",
      description: "High-impact AVL that brings the night to life.",
      ctaText: "Explore Nightclubs & Lounges",
      ctaLink: "/application/night-clubs-lounges",
      bg: "/club.png",
    },
    {
      caption: "LARGE CONGREGATIONS",
      title: "Clarity That Unites Thousands.",
      description: "Powerful AVL that carries every message.",
      ctaText: "Explore Large Congregations",
      ctaLink: "/application/large-congregations",
      bg: "/aud.webp",
    },
    {
      caption: "HOTELS & RESORTS",
      title: "Luxury Experiences, Seamlessly Delivered.",
      description: "Elegant AVL that enhances every guest moment.",
      ctaText: "Explore Hotels & Resorts",
      ctaLink: "/application/hotels-resorts",
      bg: "/resorts.png",
    },
  ];

  // ▶ AUTOPLAY
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % slides.length);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrentSlide((p) => (p + 1) % slides.length);

  const prevSlide = () =>
    setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* BACKGROUND FADE (NO SHARP MOTION) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{ duration: 14, ease: "easeInOut" }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85" />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <MaxContainer className="relative z-20 w-full pt-32 pb-20 px-10 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-[65rem]"
          >
            <p className="text-white/60 tracking-[0.25em] text-[1.1rem] sm:text-[1.6rem] mb-6 uppercase">
              {slide.caption}
            </p>

            <h1 className="text-white text-[3rem] sm:text-[5rem] font-bold leading-[110%] mb-6">
              {slide.title}
            </h1>

            <p className="text-white/70 text-[1.3rem] sm:text-[2rem] leading-relaxed mb-8">
              {slide.description}
            </p>

            <a href={slide.ctaLink}>
              <Button className="px-14 py-7 rounded-full text-[1.45rem] sm:text-[1.7rem] font-semibold border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white hover:text-black transition-all duration-500 flex items-center gap-3">
                {slide.ctaText}
                <MoveRight className="size-[1.9rem]" />
              </Button>
            </a>
          </motion.div>
        </AnimatePresence>

        {/* NAV BUTTONS */}
        <div className="flex gap-5 mt-12">
          <button
            onClick={prevSlide}
            className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center bg-transparent hover:bg-white transition-all duration-300"
          >
            <ArrowLeft className="text-white group-hover:text-black transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="group w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 flex items-center justify-center bg-transparent hover:bg-white transition-all duration-300"
          >
            <ArrowRight className="text-white group-hover:text-black transition-colors" />
          </button>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Hero;
