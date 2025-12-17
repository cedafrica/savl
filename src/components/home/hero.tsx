import { useState } from "react";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { MoveRight, ArrowRight, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      bg: "aud.webp",
    },
    {
      caption: "HOTELS & RESORTS",
      title: "Luxury Experiences, Seamlessly Delivered.",
      description: "Elegant AVL that enhances every guest moment.",
      ctaText: "Explore Hotels & Resorts",
      ctaLink: "/application/hotels-resorts",
      bg: "/resorts.png",
    },
    {
      caption: "AUDITORIUMS & CONCERT HALLS",
      title: "Pure Performance for Every Seat.",
      description: "Precision sound and lighting for perfect acoustics.",
      ctaText: "Explore",
      ctaLink: "/application/auditoriums-concert-halls",
      bg: "/aud.png",
    },
    {
      caption: "CONCERTS & LIVE EVENTS",
      title: "Power the Moment. Move the Crowd.",
      description: "Concert-grade AVL for unforgettable experiences.",
      ctaText: "Explore",
      ctaLink: "/application/concerts-live-events",
      bg: "/at.png",
    },
  ];

  const nextSlide = () =>
    setCurrentSlide((p) => (p === slides.length - 1 ? 0 : p + 1));
  const prevSlide = () =>
    setCurrentSlide((p) => (p === 0 ? slides.length - 1 : p - 1));

  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">

      {/* BACKGROUND IMAGE WITH KEN BURNS EFFECT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.bg})` }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 14, ease: "easeInOut" }}
          />

          {/* DARK LUXURY OVERLAY */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-b
              from-black/40
              via-black/60
              to-black/85
            "
          />
        </motion.div>
      </AnimatePresence>

      {/* CONTENT */}
      <MaxContainer className="relative z-20 w-full pt-32 pb-20 px-10 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-[65rem]"
          >
            {slide.caption && (
              <motion.p
                className="text-white/60 tracking-[0.25em] text-[1.2rem] sm:text-[1.6rem] mb-6 uppercase"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {slide.caption}
              </motion.p>
            )}

            <motion.h1
              className="text-white text-[3.4rem] sm:text-[5rem] font-bold leading-[110%] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {slide.title}
            </motion.h1>

            <motion.p
              className="text-white/70 text-[1.4rem] sm:text-[2rem] leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slide.description}
            </motion.p>

            <motion.a
              href={slide.ctaLink}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
            >
              <Button
                className="
                  px-14 py-7 rounded-full
                  text-[1.45rem] sm:text-[1.7rem]
                  font-semibold
                  border border-white/50
                  bg-white/10 text-white
                  backdrop-blur-md
                  hover:bg-white hover:text-black
                  hover:shadow-[0_10px_45px_rgba(255,255,255,0.25)]
                  transition-all duration-500
                  flex items-center gap-3
                "
              >
                {slide.ctaText}
                <MoveRight className="size-[1.9rem]" />
              </Button>
            </motion.a>

            <motion.img
              src="/cedia.png"
              alt="CEDIA"
              className="w-[13rem] sm:w-[20rem] mt-10 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.9, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
            />
          </motion.div>
        </AnimatePresence>

        {/* NAV BUTTONS */}
        <div className="flex gap-5 mt-12">
          <button
            onClick={prevSlide}
            className="
              w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 
              flex items-center justify-center 
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            <ArrowLeft className="text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="
              w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/30 
              flex items-center justify-center 
              hover:bg-white hover:text-black
              transition-all duration-300
            "
          >
            <ArrowRight className="text-white" />
          </button>
        </div>
      </MaxContainer>
    </section>
  );
};

export default Hero;
