"use client";

import { useState } from "react";
import MaxContainer from "../components/common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Lightbulb,
  Sliders,
  Sparkles,
  Zap,
  Workflow,
  Plus,
  Minus,
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

const LightingService = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/malight.webp)" }}
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
                Lighting Solutions
              </p>

              <h1 className="text-[3.4rem] sm:text-[6rem] font-semibold leading-[1.05]">
                Lighting that shapes emotion, focus, and experience.
              </h1>

              <p className="text-[1.6rem] sm:text-[1.9rem] text-white/85 leading-relaxed max-w-[760px]">
                Spectra AVL designs intelligent lighting systems that go beyond
                illumination — creating atmosphere, guiding attention, and
                transforming spaces through precision control.
              </p>
            </motion.div>
          </MaxContainer>
        </div>
      </section>

      {/* ================= WHY SPECTRA LIGHTING ================= */}
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
              Why Spectra AVL lighting systems stand apart
            </h2>

            <p className="mt-6 text-[1.6rem] text-slate-600 leading-relaxed">
              Lighting systems fail when they are treated as fixtures instead
              of experiences. Our approach ensures flexibility, precision,
              and long-term creative control.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            <AccordionItem
              icon={Lightbulb}
              title="Experience-driven lighting design"
              summary="Lighting designed around human perception and use."
              details="We design lighting scenes that enhance emotion, guide focus, and reinforce the purpose of the space — whether it’s worship, performance, hospitality, or corporate environments."
            />

            <AccordionItem
              icon={Sliders}
              title="Intelligent scene control & automation"
              summary="One-touch control for complex lighting environments."
              details="Our lighting systems allow operators to instantly recall scenes, automate transitions, and integrate with AV and building systems — ensuring consistency and ease of use."
            />

            <AccordionItem
              icon={Sparkles}
              title="Precision colour & intensity control"
              summary="Exact colour rendering and smooth dimming."
              details="Using professional-grade lighting engines and control platforms, we achieve consistent colour accuracy, flicker-free dimming, and seamless transitions across fixtures."
            />

            <AccordionItem
              icon={Zap}
              title="Energy-efficient, future-ready systems"
              summary="Lower operating costs without compromising performance."
              details="We specify efficient lighting technologies and control strategies that reduce power consumption, heat output, and maintenance requirements — extending system lifespan."
            />
          </div>
        </MaxContainer>
      </section>

      {/* ================= ANCHOR BRAND ================= */}
      <section className="bg-[#f7f9fc] py-28">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="/lightma.svg"
              alt="MA Lighting"
              className="w-[260px] opacity-90"
            />

            <div className="space-y-6">
              <h2 className="text-[2.6rem] font-semibold text-slate-900">
                Powered by MA Lighting — our anchor lighting platform
              </h2>

              <p className="text-[1.55rem] text-slate-600 leading-relaxed">
                MA Lighting is globally recognised as the gold standard in
                professional lighting control, trusted on the world’s biggest
                stages, broadcast studios, and architectural installations.
              </p>

              <p className="text-[1.55rem] text-slate-600 leading-relaxed">
                By anchoring our lighting solutions on MA Lighting platforms,
                Spectra AVL delivers unmatched control, reliability, and
                creative freedom — built to scale and evolve over time.
              </p>
            </div>
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
                Our consultative approach to lighting projects
              </h2>

              <p className="text-[1.6rem] text-slate-600 leading-relaxed">
                We approach lighting as a system — not a collection of fixtures.
                Every project is guided by intent, usability, and longevity.
              </p>

              <ul className="space-y-4 text-[1.5rem] text-slate-600">
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Experience mapping & lighting intent definition
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Fixture selection, zoning & control architecture
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Programming, scene creation & commissioning
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Operator training & long-term support
                </li>
              </ul>
            </motion.div>

            <motion.img
              src="/mal.webp"
              alt="Professional Lighting System"
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
              Speak with a consultant about your lighting vision
            </h2>

            <p className="text-[1.6rem] text-white/80 leading-relaxed">
              Let our consultants help you design a lighting system that enhances
              emotion, improves usability, and elevates the entire experience.
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

export default LightingService;
