import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const Hero = () => {
  return (
    <section
      className="
        relative w-full min-h-screen
        flex items-center
        px-5 sm:px-12 lg:px-32
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{ backgroundImage: "url('/restaurant3.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 max-w-[900px]">
        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="
            text-white/70 uppercase tracking-[0.22em]
            text-[0.95rem] sm:text-[1.1rem] lg:text-[1.25rem]
            mb-3 sm:mb-4
          "
        >
          Our Services
        </motion.p>

        {/* Main Title */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="
            text-white font-bold
            leading-[1.15] sm:leading-[1.05]
            text-[2.2rem] sm:text-[3.6rem] lg:text-[6.2rem]
            max-w-[18ch]
          "
        >
          Premium AV Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="
            text-white/85 mt-5 sm:mt-6
            text-[1.05rem] sm:text-[1.3rem] lg:text-[1.9rem]
            max-w-[42rem]
            leading-relaxed
          "
        >
          Comprehensive audiovisual solutions powered by global technology
          alliances and engineered for exceptional performance across modern
          commercial environments.
        </motion.p>

        {/* Certification Badge */}
        <motion.img
          src="/cedia.png"
          alt="CEDIA Certification"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="
            mt-8 sm:mt-12
            w-[9rem] sm:w-[14rem] lg:w-[20rem]
            opacity-95
          "
        />
      </div>
    </section>
  );
};

export default Hero;
