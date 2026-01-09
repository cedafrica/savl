"use client";

import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const Content = () => {
  const contents = [
    {
      header: "Vision",
      paragraph:
        "To be Africa’s most trusted audiovisual integration partner, setting the benchmark for technical excellence, innovation, and reliability across stadiums, corporate environments, hospitality, and worship spaces.",
    },
    {
      header: "Mission",
      paragraph:
        "To design and deliver world-class audiovisual ecosystems that transform spaces, deepen connection, and enable our clients to communicate, inspire, and perform at scale.",
    },
  ];

  return (
    <section className="relative bg-[#EFEFEF] overflow-hidden">
      {/* ================= FIXED CURVED BACKGROUND ================= */}
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute left-[-40%] top-[5%] w-[1200px] h-[1200px] rounded-full border border-[#00569e]/20 rotate-[18deg]" />
        <div className="absolute left-[-30%] top-[15%] w-[900px] h-[900px] rounded-full border border-[#00569e]/10 rotate-[18deg]" />
      </div>

      {/* ================= VISION & MISSION ================= */}
      <div className="relative z-10 py-16 sm:py-24">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          {/* SECTION HEADER */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="mb-10 sm:mb-14"
          >
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#00569e]" />
              <p className="text-[1.3rem] sm:text-[1.4rem] tracking-[0.25em] uppercase text-slate-500">
                Our Foundation
              </p>
            </div>

            <h2 className="mt-4 max-w-[42rem] text-[2.4rem] sm:text-[3.2rem] font-semibold text-slate-900">
              A clear vision and mission guiding every integration.
            </h2>
          </motion.div>

          {/* CARDS */}
          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
            {contents.map((content, index) => (
              <motion.div
                key={content.header}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.12 }}
                className="relative overflow-hidden rounded-2xl bg-white/85 border border-slate-200/70 shadow-[0_18px_60px_rgba(15,23,42,0.08)] px-6 py-8 sm:px-8 sm:py-10 flex flex-col gap-4"
              >
                <span className="absolute inset-x-0 top-0 h-[3px] bg-[#00569e]" />

                <p className="text-[1.3rem] sm:text-[1.4rem] uppercase tracking-[0.18em] text-[#00569e]">
                  {index === 0 ? "01" : "02"} • {content.header}
                </p>

                <h3 className="text-[2rem] sm:text-[2.4rem] font-semibold text-slate-900">
                  {content.header}
                </h3>

                <p className="text-[1.5rem] sm:text-[1.7rem] leading-relaxed text-slate-600">
                  {content.paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </MaxContainer>
      </div>

      {/* ================= FIXED BACKGROUND HERO ================= */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="relative w-full h-[100vh] bg-[url(/uiu.webp)] bg-cover bg-center bg-no-repeat bg-fixed"
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10">
          <MaxContainer className="py-20 sm:py-28 px-6 sm:px-12 lg:px-24 xl:px-32">
            <div className="max-w-[860px] text-left text-white">
              <p className="text-[1.3rem] sm:text-[1.4rem] tracking-[0.25em] uppercase">
                Elevating Audiovisual Excellence
              </p>

              <h2 className="mt-4 text-[2.6rem] sm:text-[4rem] font-semibold leading-tight">
                Redefining performance-driven AVL for modern African spaces.
              </h2>

              <p className="mt-6 text-[1.5rem] sm:text-[1.8rem] leading-relaxed text-white/85">
                At Spectra AVL, we are reshaping the audio, video, and lighting
                landscape in Nigeria through precision engineering and global
                collaboration.
              </p>

              <p className="mt-4 text-[1.5rem] sm:text-[1.8rem] leading-relaxed text-white/80">
                With over 31+ years, 100+ specialists, and 4,500+ projects,
                our systems are engineered to perform at scale.
              </p>

              <div className="mt-8 h-[2px] w-24 bg-[#00569e]" />
            </div>
          </MaxContainer>
        </div>
      </motion.section>
    </section>
  );
};

export default Content;
