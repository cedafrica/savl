"use client";

import { useState } from "react";
import MaxContainer from "../components/common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Monitor,
  Settings,
  Layers,
  ShieldCheck,
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

const VideoService = () => {
  return (
    <section className="bg-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/led.webp)" }}
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
                Video Solutions
              </p>

              <h1 className="text-[3.4rem] sm:text-[6rem] font-semibold leading-[1.05]">
                Video systems designed to command attention.
              </h1>

              <p className="text-[1.6rem] sm:text-[1.9rem] text-white/85 leading-relaxed max-w-[760px]">
                From fine-pitch LED walls to fully integrated visual ecosystems,
                Spectra AVL delivers professional video solutions engineered
                for clarity, reliability, and long-term performance.
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
              Why Spectra AVL video systems outperform typical installations
            </h2>
            <p className="mt-6 text-[1.6rem] text-slate-600 leading-relaxed">
              Most video systems fail not because of the screen, but because of
              poor design decisions. Our approach eliminates that risk.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10">
            <AccordionItem
              icon={Monitor}
              title="Visual performance designed for real-world conditions"
              summary="Clarity, brightness, and colour accuracy engineered for your space."
              details="We evaluate ambient light levels, viewing angles, content type, and operating hours to ensure your visuals remain impactful — even in challenging environments such as large auditoriums, daylight-filled venues, or broadcast spaces."
            />

            <AccordionItem
              icon={Settings}
              title="Engineering-first, not product-first"
              summary="We design systems, not shopping lists."
              details="Before specifying any display technology, we model system architecture, signal flow, redundancy, and future expansion. This ensures your system works today and continues to perform as your needs evolve."
            />

            <AccordionItem
              icon={Layers}
              title="Seamless integration across AV systems"
              summary="Video that works effortlessly with audio, lighting, and control."
              details="Our video solutions integrate cleanly with sound reinforcement, lighting scenes, automation platforms, and content workflows — delivering a unified, intuitive experience for operators and users."
            />

            <AccordionItem
              icon={ShieldCheck}
              title="Reliability engineered into every layer"
              summary="Built for mission-critical, long-duty operation."
              details="We design redundancy into signal paths, manage thermal performance, and specify professional-grade components to ensure consistent performance over years of operation — not just on day one."
            />
          </div>
        </MaxContainer>
      </section>

      {/* ================= ANCHOR BRAND ================= */}
      <section className="bg-[#f7f9fc] py-28">
        <MaxContainer className="px-6 sm:px-12 lg:px-24 xl:px-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <img
              src="/infiled.svg"
              alt="INFiLED"
              className="w-[260px] opacity-90"
            />

            <div className="space-y-6">
              <h2 className="text-[2.6rem] font-semibold text-slate-900">
                Powered by INFiLED — our anchor video technology partner
              </h2>

              <p className="text-[1.55rem] text-slate-600 leading-relaxed">
                INFiLED is trusted globally for its colour accuracy, reliability,
                and engineering consistency. Their LED technology powers
                broadcast studios, control rooms, touring productions, and
                premium architectural installations worldwide.
              </p>

              <p className="text-[1.55rem] text-slate-600 leading-relaxed">
                At Spectra AVL, INFiLED provides the foundation — while our
                engineering expertise ensures each system is perfectly matched
                to its environment and operational demands.
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
                Our consultative approach to video projects
              </h2>

              <p className="text-[1.6rem] text-slate-600 leading-relaxed">
                We work as technical partners, guiding you through every phase
                of the project — from concept to long-term operation.
              </p>

              <ul className="space-y-4 text-[1.5rem] text-slate-600">
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Strategic needs analysis & spatial evaluation
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  System design, simulation & engineering
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Installation, calibration & commissioning
                </li>
                <li className="flex gap-3">
                  <Workflow className="w-6 h-6 text-[#00569e]" />
                  Training, documentation & lifecycle support
                </li>
              </ul>
            </motion.div>

            <motion.img
              src="/infiled.webp"
              alt="Professional LED Video Wall"
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
              Speak with a consultant about your video requirements
            </h2>

            <p className="text-[1.6rem] text-white/80 leading-relaxed">
              Our consultants help you define the right technology, scope,
              and system architecture — ensuring your investment delivers
              lasting value.
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

export default VideoService;
