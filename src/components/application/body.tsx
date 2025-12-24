import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- TYPES ---------------- */

interface BodyItem {
  bold?: string;
  text?: string;
}

interface BodySection {
  title: string;
  image: string;
  items: BodyItem[];
}

interface BodyProps {
  contents: BodySection[];
}

/* ---------------- EASING ---------------- */

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------- MOTION ---------------- */

const headlineContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22 },
  },
};

const headlineLine: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease },
  },
};

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.6, ease },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.8, ease },
  },
};

/* ---------------- COMPONENT ---------------- */

const Body: React.FC<BodyProps> = ({ contents }) => {
  return (
    <section className="relative bg-gradient-to-b from-[#f4f5f6] via-[#ededee] to-[#e2e3e5] overflow-hidden">

      {/* ================= ORBIT RIPPLE BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 z-0 flex items-center justify-center">
        <div className="absolute w-[1200px] h-[1200px] rounded-full border border-[#00569e]/20 animate-orbitSlow" />
        <div className="absolute w-[900px] h-[900px] rounded-full border-2 border-[#00569e]/25 animate-orbitMedium" />
        <div className="absolute w-[600px] h-[600px] rounded-full border border-[#00569e]/15 animate-orbitFast" />
      </div>

      {/* AMBIENT TEXTURE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* ================= INTRO ================= */}
      <div className="relative z-10 max-w-[110rem] mx-auto px-6 sm:px-10 pt-28 sm:pt-40 pb-32 sm:pb-52">
        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[3.2rem] sm:text-[6rem] lg:text-[8.2rem] font-semibold leading-[1.05] tracking-tight text-slate-900 max-w-[90rem]"
        >
          <motion.span variants={headlineLine} className="block">
            We don’t install systems.
          </motion.span>
          <motion.span
            variants={headlineLine}
            className="block text-[#00569e]"
          >
            We choreograph experiences.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.6 }}
          className="mt-10 sm:mt-16 text-[1.6rem] sm:text-[2rem] text-slate-600 max-w-[52rem] leading-[1.75]"
        >
          Every space has a voice.  
          Our role is to shape how it speaks — with clarity, emotion, and intention.
        </motion.p>
      </div>

      {/* ================= SECTIONS ================= */}
      <div className="relative z-10 max-w-[120rem] mx-auto px-6 sm:px-10 space-y-24 sm:space-y-48 pb-32 sm:pb-48">
        {contents.map((section, index) => {
          const isReversed = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`flex flex-col sm:flex-row items-center gap-10 sm:gap-20 ${
                isReversed ? "sm:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="
                  w-full sm:w-[50%]
                  h-[260px] sm:h-[420px] lg:h-[520px]
                  rounded-[22px] sm:rounded-[26px]
                  overflow-hidden
                  shadow-[0_18px_60px_rgba(0,0,0,0.18)]
                "
              >
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* TEXT */}
              <div className="w-full sm:w-[50%] space-y-6 sm:space-y-10">
                <motion.h2
                  variants={rise}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] font-medium text-slate-900 leading-[1.15]"
                >
                  <span className="relative">
                    {section.title}
                    <span className="absolute -bottom-2 left-0 w-16 h-[3px] bg-[#00569e]" />
                  </span>
                </motion.h2>

                <div className="space-y-5 sm:space-y-7">
                  {section.items.map((itm, i) => (
                    <motion.p
                      key={i}
                      variants={fade}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ delay: i * 0.12 }}
                      className="text-[1.45rem] sm:text-[1.7rem] text-slate-600 leading-[1.7]"
                    >
                      {itm.bold && (
                        <span className="font-semibold text-[#00569e]">
                          {itm.bold}:{" "}
                        </span>
                      )}
                      {itm.text}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= CTA ================= */}
      <div className="relative z-10 max-w-[110rem] mx-auto px-6 sm:px-10 pb-32 sm:pb-48">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-10 border-t border-[#00569e]/30 pt-20"
        >
          <h3 className="text-[2.6rem] sm:text-[3.6rem] font-medium text-slate-900 max-w-[52rem] leading-[1.2]">
            Ready to design an experience that truly belongs to your space?
          </h3>

          <Link
            to="/contact"
            className="
              inline-flex items-center gap-4
              text-[1.6rem] font-medium
              text-[#00569e]
              border-b border-[#00569e]/50
              pb-2
              hover:border-[#00569e]
              transition-all
            "
          >
            Begin the conversation <span className="text-[1.8rem]">→</span>
          </Link>
        </motion.div>
      </div>

      {/* ================= ORBIT ANIMATIONS ================= */}
      <style>{`
        @keyframes orbitSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbitMedium {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }
        @keyframes orbitFast {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .animate-orbitSlow {
          animation: orbitSlow 140s linear infinite;
        }
        .animate-orbitMedium {
          animation: orbitMedium 110s linear infinite;
        }
        .animate-orbitFast {
          animation: orbitFast 90s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Body;
