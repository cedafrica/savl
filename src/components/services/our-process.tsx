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
      delay: i * 0.2,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1], // premium easing curve
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
    <section className="relative bg-black text-white py-28 sm:py-36 overflow-hidden">
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0C0C0C] to-black" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_0%,white,transparent_45%)]" />

      <MaxContainer className="relative z-10 px-6 sm:px-10">
        {/* HEADER */}
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
            className="mt-6 text-gray-400 text-[1.6rem] sm:text-[1.9rem] leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
          >
            A deliberate, refined approach — from first conversation to long-term performance.
          </motion.p>
        </div>

        {/* PROCESS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-14">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              className="
                relative rounded-3xl p-10 sm:p-14
                bg-white/[0.03]
                border border-white/10
                backdrop-blur-sm
                hover:border-white/25
                transition-all duration-500
              "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              {/* STEP NUMBER */}
              <span className="absolute top-8 right-8 text-[6rem] font-bold text-white/5">
                {item.step}
              </span>

              <div className="relative z-10 max-w-[38rem]">
                <h3 className="text-[2.4rem] sm:text-[2.8rem] font-medium mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-[1.6rem] sm:text-[1.8rem] leading-relaxed">
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
