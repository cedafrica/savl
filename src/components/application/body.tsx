import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- TYPES ---------------- */

interface ExperienceItem {
  title: string;
  description: string;
  image: string;
}

interface ExperienceProps {
  items: ExperienceItem[];
}

/* ---------------- PREMIUM MOTION ---------------- */

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.6, ease },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease },
  },
};

const floatImage: Variants = {
  hidden: { opacity: 0, y: 80, scale: 1.02 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 2, ease },
  },
};

/* ---------------- COMPONENT ---------------- */

const Experience: React.FC<ExperienceProps> = ({ items }) => {
  return (
    <section
      className="
        relative
        min-h-screen
        bg-gradient-to-b
        from-[#f5f6f7]
        via-[#ededee]
        to-[#e4e5e7]
        overflow-hidden
      "
    >
      {/* AMBIENT DEPTH */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* INTRO STATEMENT */}
      <div className="relative max-w-[110rem] mx-auto px-10 pt-40 pb-60">
        <motion.h1
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            text-[4.2rem] sm:text-[6rem] lg:text-[8.5rem]
            font-semibold
            leading-[1.05]
            tracking-tight
            text-slate-900
            max-w-[90rem]
          "
        >
          We don’t install systems.
          <br />
          <span className="text-slate-500">
            We choreograph experiences.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3 }}
          className="
            mt-16
            text-[1.8rem] sm:text-[2rem]
            text-slate-600
            max-w-[48rem]
            leading-[1.7]
          "
        >
          Every space has a voice.  
          Our work ensures it is heard — with clarity, emotion, and intent.
        </motion.p>
      </div>

      {/* FLOATING GALLERY */}
      <div className="relative space-y-[28rem] pb-[30rem]">
        {items.map((item, index) => (
          <div
            key={index}
            className="
              relative
              max-w-[120rem]
              mx-auto
              px-10
              flex
              flex-col
              lg:flex-row
              gap-28
              items-center
            "
          >
            {/* IMAGE */}
            <motion.div
              variants={floatImage}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                w-full lg:w-[55%]
                h-[420px] sm:h-[520px] lg:h-[680px]
                rounded-[40px]
                overflow-hidden
                shadow-[0_40px_140px_rgba(0,0,0,0.22)]
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:w-[45%] space-y-10"
            >
              <h2
                className="
                  text-[3.2rem] sm:text-[3.8rem] lg:text-[4.6rem]
                  font-medium
                  text-slate-900
                  leading-[1.15]
                "
              >
                {item.title}
              </h2>

              <p
                className="
                  text-[1.6rem] sm:text-[1.8rem]
                  text-slate-600
                  leading-[1.75]
                  max-w-[36rem]
                "
              >
                {item.description}
              </p>

              <Link
                to="/contact"
                className="
                  inline-flex
                  items-center
                  gap-4
                  text-[1.5rem]
                  font-medium
                  text-slate-900
                  border-b border-slate-900/40
                  pb-1
                  hover:border-slate-900
                  transition-all
                "
              >
                Begin a conversation
                <span className="text-[1.7rem]">→</span>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
