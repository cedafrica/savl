import Services from "../common/services";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const PremiumSolution = () => {
  return (
    <section
      className="
        bg-[#fff]

        sm:pt-[8rem] 
        pt-[4rem] 
        pb-[5rem] 
        px-8 sm:px-0 
        relative
      "
    >
      {/* Subtle gradient glow behind title */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[18rem] bg-gradient-to-b from-slate-100/70 to-transparent blur-2xl opacity-70 pointer-events-none" />

      {/* Heading */}
      <motion.h2
        className="
          text-left sm:text-center 
          font-semibold 
          tracking-tight
          sm:text-[3.8rem] 
          text-[2.8rem]
          text-slate-900
        "
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        Premium AV Solutions  
      </motion.h2>

      {/* Description */}
      <motion.p
        className="
          text-left sm:text-center 
          max-w-[60rem] mx-auto
          mt-4
          text-[1.5rem] sm:text-[1.6rem]
          leading-relaxed 
          text-slate-600
        "
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        Engineered audiovisual systems built on international standards,  
        premium brand partnerships, and expert local execution for demanding commercial spaces.
      </motion.p>

      {/* Divider Line (luxury touch) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2.5}
        className="
          mx-auto 
          mt-8 sm:mt-12 
          h-[1px] 
          w-[120px] 
          bg-gradient-to-r 
          from-transparent 
          via-slate-300 
          to-transparent
        "
      />

      {/* Services Component */}
      <motion.div
        className="sm:mt-[6rem] mt-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
      >
        <Services />
      </motion.div>
    </section>
  );
};

export default PremiumSolution;
