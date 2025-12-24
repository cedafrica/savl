import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const OurProcess = () => {
  const steps = [
    {
      step: "01",
      title: "Consult",
      text: "We take time to understand your vision, your space, and how you want people to feel within it.",
    },
    {
      step: "02",
      title: "Design",
      text: "Our engineers translate insight into precision — detailed system design, modeling, and documentation.",
    },
    {
      step: "03",
      title: "Install",
      text: "Specialist teams deliver flawless installation with discipline, accuracy, and respect for your space.",
    },
    {
      step: "04",
      title: "Maintain",
      text: "Ongoing support, calibration, and care to ensure performance remains exceptional over time.",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden text-white">

      {/* ================= BLUE GRADIENT BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#030B1A] to-[#00040A]" />

      {/* Soft blue atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,86,158,0.18),transparent_55%)]" />

      {/* Very subtle texture */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

      <MaxContainer className="relative z-10 px-6 sm:px-10">

        {/* ================= HEADER ================= */}
        <div className="max-w-[72rem] mx-auto text-center mb-20 sm:mb-28">
          <motion.h2
            className="text-[2.8rem] sm:text-[4.2rem] font-semibold tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Our Process
          </motion.h2>

          <motion.p
            className="mt-6 text-slate-300 text-[1.6rem] sm:text-[1.9rem] leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            A deliberate, refined approach — from first conversation to long-term performance.
          </motion.p>
        </div>

        {/* ================= PROCESS GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
              className="
                group relative rounded-3xl p-10 sm:p-14
                bg-white/[0.035]
                border border-white/10
                backdrop-blur-md
                transition-all duration-500
                hover:border-[#00569e]/60
                hover:shadow-[0_30px_90px_rgba(0,86,158,0.25)]
              "
            >
              {/* Step number (blue intelligence cue) */}
              <span className="
                absolute top-8 right-8
                text-[6rem]
                font-bold
                text-[#00569e]/12
                group-hover:text-[#00569e]/20
                transition-colors
              ">
                {item.step}
              </span>

              {/* Blue signal line */}
              <span className="
                absolute left-0 top-10
                h-[2px] w-16
                bg-[#00569e]
                opacity-60
              " />

              <div className="relative z-10 max-w-[38rem]">
                <h3 className="text-[2.4rem] sm:text-[2.8rem] font-medium mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-300 text-[1.6rem] sm:text-[1.8rem] leading-relaxed">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </MaxContainer>
    </section>
  );
};

export default OurProcess;
