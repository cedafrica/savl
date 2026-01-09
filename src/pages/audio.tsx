"use client";

import { useState } from "react";
import MaxContainer from "../components/common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Volume2,
  Waves,
  EyeOff,
  Activity,
  
  Plus,
  Minus,
  Workflow,
  MessageCircle,
} from "lucide-react";

/* ---------------- MOTION ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* ---------------- ACCORDION ITEM ---------------- */

const AccordionItem = ({
  icon: Icon,
  title,
  summary,
  details,
}: {
  icon: any;
  title: string;
  summary: string;
  details: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl bg-white shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 p-8 text-left"
      >
        <Icon className="w-10 h-10 text-[#00569e] mt-1" />

        <div className="flex-1">
          <h4 className="text-[1.6rem] font-semibold text-slate-900">
            {title}
          </h4>
          <p className="mt-2 text-[1.45rem] text-slate-600">
            {summary}
          </p>
        </div>

        {open ? (
          <Minus className="w-6 h-6 text-[#00569e] mt-2" />
        ) : (
          <Plus className="w-6 h-6 text-[#00569e] mt-2" />
        )}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 pb-8"
        >
          <p className="text-[1.45rem] text-slate-600 leading-relaxed">
            {details}
          </p>
        </motion.div>
      )}
    </div>
  );
};

/* ---------------- COMPONENT ---------------- */

const AudioService = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/audkarray.png)" }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center">
          <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-[900px] space-y-6 text-white"
            >
              <p className="uppercase tracking-[0.3em] text-white/70 text-[1.2rem]">
                Audio Solutions
              </p>

              <h1 className="text-[3.4rem] sm:text-[6rem] font-semibold leading-[1.05]">
                Powerful sound, precisely controlled.
              </h1>

              <p className="text-[1.6rem] sm:text-[1.9rem] text-white/85 leading-relaxed max-w-[760px]">
                Spectra AVL designs professional audio systems that deliver
                clarity, impact, and control — without compromising
                architecture, aesthetics, or intelligibility.
              </p>
            </motion.div>
          </MaxContainer>
        </div>
      </section>

      {/* ================= WHY CHOOSE SPECTRA ================= */}
      <section className="py-28">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[820px] mb-20"
          >
            <h2 className="text-[2.8rem] sm:text-[3.6rem] font-semibold text-slate-900">
              Why Spectra AVL audio systems sound better — and work smarter
            </h2>

            <p className="mt-6 text-[1.6rem] text-slate-600 leading-relaxed">
              Great audio is not about volume. It’s about control,
              intelligibility, and consistency — engineered specifically
              for your space.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            <AccordionItem
              icon={Volume2}
              title="Compact design, big sound"
              summary="High output from minimal physical footprint."
              details="Using advanced loudspeaker design and line-source technology, we deliver powerful, room-filling sound from compact systems — reducing visual clutter while maintaining exceptional SPL and clarity."
            />

            <AccordionItem
              icon={EyeOff}
              title="Discreet sound, minimal visual impact"
              summary="Audio that blends into architecture."
              details="Our systems are designed to disappear visually — integrated into walls, columns, and architectural elements — while delivering consistent coverage across the listening area."
            />

            <AccordionItem
              icon={Waves}
              title="Advanced electronic beam steering"
              summary="Sound directed exactly where it’s needed."
              details="Beam steering allows us to precisely control vertical and horizontal sound dispersion, dramatically improving speech intelligibility in acoustically challenging environments."
            />

            <AccordionItem
              icon={Activity}
              title="Lightweight systems, high SPL"
              summary="Safer rigging, easier installation, exceptional output."
              details="Lightweight composite enclosures and high-efficiency drivers allow for safer installations while still delivering the impact required for large venues and demanding applications."
            />
          </div>
        </MaxContainer>
      </section>

      {/* ================= ANCHOR BRANDS ================= */}
      <section className="bg-[#f7f9fc] py-28">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[900px] mb-16"
          >
            <h2 className="text-[2.6rem] font-semibold text-slate-900">
              Trusted audio technology partners
            </h2>
            <p className="mt-4 text-[1.55rem] text-slate-600 leading-relaxed">
              We work with globally respected audio manufacturers whose
              technologies align with our engineering standards.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-12 items-center">
            <img src="/karray.svg" alt="K-array" className="w-[220px] opacity-90" />
            <img src="/kgear.svg" alt="KGEAR" className="w-[220px] opacity-90" />
            <img src="/jbl.svg" alt="JBL Professional" className="w-[220px] opacity-90" />
          </div>
        </MaxContainer>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-28">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-[2.8rem] sm:text-[3.4rem] font-semibold text-slate-900">
                Our consultative approach to audio design
              </h2>

              <p className="text-[1.6rem] text-slate-600 leading-relaxed">
                Every Spectra AVL audio project follows a disciplined,
                engineering-led process to ensure clarity, consistency,
                and long-term reliability.
              </p>

              <ul className="space-y-4 text-[1.5rem] text-slate-600">
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Acoustic analysis & intelligibility modelling
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  System design & coverage simulation
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Precision installation & DSP tuning
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Training, optimisation & lifecycle support
                </li>
              </ul>
            </motion.div>

            <motion.img
              src="/kam.jpg"
              alt="Professional Audio System Installation"
              className="w-full h-[38rem] object-cover rounded-3xl"
              initial={{ scale: 1.06 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </MaxContainer>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-[#0f172a] py-28">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-[900px] text-white space-y-6"
          >
            <h2 className="text-[2.8rem] sm:text-[3.6rem] font-semibold">
              Speak with a consultant about your audio requirements
            </h2>

            <p className="text-[1.6rem] text-white/80 leading-relaxed">
              Let our consultants help you design an audio system that delivers
              clarity, impact, and control — tailored precisely to your space.
            </p>

            <a
              href="/contact"
              className="
                inline-flex items-center gap-3
                mt-6 px-8 py-4
                rounded-full
                bg-white text-[#0f172a]
                text-[1.5rem] font-medium
                hover:bg-[#00569e] hover:text-white
                transition-all duration-300
              "
            >
              <MessageCircle className="w-5 h-5" />
              Speak with a Consultant
            </a>
          </motion.div>
        </MaxContainer>
      </section>
    </section>
  );
};

export default AudioService;
