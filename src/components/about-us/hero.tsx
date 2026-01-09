"use client";

import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      className="
        relative w-full h-screen
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      {/* ================= LUXURY OVERLAY ================= */}
      <div className="absolute inset-0 bg-black/50 sm:bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 h-full flex items-center">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="max-w-[900px] space-y-10">

            {/* EYEBROW / CONTEXT (OPTIONAL BUT PREMIUM) */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="uppercase tracking-[0.3em] text-white/70 text-[1.2rem] sm:text-[1.3rem]"
            >
              Who We Are
            </motion.p>

            {/* TITLE */}
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                font-semibold text-white
                leading-[1.05]
                text-[3.2rem] sm:text-[6.2rem] xl:text-[7rem]
              "
            >
              About Us
            </motion.h1>

            {/* BODY TEXT */}
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="
                text-white/85 font-light
                leading-relaxed
                text-[1.5rem] sm:text-[1.9rem]
                max-w-[52rem]
              "
            >
              Spectra AVL is Nigeria’s premier provider of audio, video, and
              lighting solutions — blending global partnerships with deep
              local expertise to deliver performance-driven systems at scale.
            </motion.p>

            {/* ACCREDITATION / TRUST SIGNAL */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="pt-4"
            >
              <img
                src="/cedia.png"
                alt="CEDIA"
                className="w-[14rem] sm:w-[18rem] opacity-90"
              />
            </motion.div>

          </div>
        </MaxContainer>
      </div>
    </section>
  );
};

export default Hero;
