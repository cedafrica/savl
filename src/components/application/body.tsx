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

/* ---------------- PREMIUM EASING ---------------- */

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ---------------- MOTION SYSTEM ---------------- */

/* Headline container controls staggering */
const headlineContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22, // Succession / Canva timing
    },
  },
};

/* Each line flies in independently */
const headlineLine: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease,
    },
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
    <section
      className="
        relative
        bg-gradient-to-b
        from-[#f4f5f6]
        via-[#ededee]
        to-[#e2e3e5]
        overflow-hidden
      "
    >
      {/* AMBIENT TEXTURE */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* ================= INTRO STATEMENT ================= */}
      <div className="relative max-w-[110rem] mx-auto px-10 pt-40 pb-52">
        <motion.h1
          variants={headlineContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            text-[4rem] sm:text-[6rem] lg:text-[8.2rem]
            font-semibold
            leading-[1.05]
            tracking-tight
            text-slate-900
            max-w-[90rem]
          "
        >
          <motion.span
            variants={headlineLine}
            className="block"
          >
            We don’t install systems.
          </motion.span>

          <motion.span
            variants={headlineLine}
            className="block text-slate-500"
          >
            We choreograph experiences.
          </motion.span>
        </motion.h1>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.6 }} // lets headline finish first
          className="
            mt-16
            text-[1.8rem] sm:text-[2rem]
            text-slate-600
            max-w-[52rem]
            leading-[1.75]
          "
        >
          Every space has a voice.  
          Our role is to shape how it speaks — with clarity, emotion,
          and intention.
        </motion.p>
      </div>

      {/* ================= DYNAMIC EXPERIENCE SECTIONS ================= */}
      <div className="relative max-w-[120rem] mx-auto px-10 space-y-[28rem] pb-[28rem]">
        {contents.map((section, index) => (
          <div
            key={index}
            className="
              relative
              flex
              flex-col
              lg:flex-row
              gap-24
              items-center
            "
          >
            {/* IMAGE */}
            <motion.div
              variants={imageReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
              className="
                w-full lg:w-[55%]
                h-[420px] sm:h-[520px] lg:h-[680px]
                rounded-[42px]
                overflow-hidden
                shadow-[0_40px_140px_rgba(0,0,0,0.22)]
              "
            >
              <img
                src={section.image}
                alt={section.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <div className="lg:w-[45%] space-y-12">
              <motion.h2
                variants={rise}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  text-[3.2rem] sm:text-[3.8rem] lg:text-[4.6rem]
                  font-medium
                  text-slate-900
                  leading-[1.15]
                  tracking-tight
                "
              >
                {section.title}
              </motion.h2>

              <div className="space-y-8">
                {section.items.map((itm, i) => (
                  <motion.p
                    key={i}
                    variants={fade}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ delay: i * 0.15 }}
                    className="
                      text-[1.6rem] sm:text-[1.75rem]
                      text-slate-600
                      leading-[1.75]
                    "
                  >
                    {itm.bold && (
                      <span className="font-semibold text-slate-900">
                        {itm.bold}:{" "}
                      </span>
                    )}
                    {itm.text}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM CTA ================= */}
      <div className="relative max-w-[110rem] mx-auto px-10 pb-48">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            flex
            flex-col
            lg:flex-row
            items-start
            lg:items-center
            justify-between
            gap-16
            border-t
            border-slate-300/60
            pt-24
          "
        >
          <h3
            className="
              text-[3rem] sm:text-[3.6rem] lg:text-[4.2rem]
              font-medium
              text-slate-900
              max-w-[52rem]
              leading-[1.2]
            "
          >
            Ready to design an experience
            that truly belongs to your space?
          </h3>

          <Link
            to="/contact"
            className="
              inline-flex
              items-center
              gap-5
              text-[1.6rem]
              font-medium
              text-slate-900
              border-b border-slate-900/40
              pb-2
              hover:border-slate-900
              transition-all
            "
          >
            Begin the conversation
            <span className="text-[1.8rem]">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Body;
