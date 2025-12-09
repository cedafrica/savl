import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" }
  },
};

const Hero = () => {
  return (
    <section
      className="
        relative w-full h-screen
        flex items-center
        px-10 sm:px-32
        bg-cover bg-center bg-no-repeat
        overflow-hidden
      "
      style={{ backgroundImage: "url('/restaurant3.webp')" }}
    >

      {/* Cinematic Luxury Overlay */}
      <div className="absolute inset-0 bg-black/55 sm:bg-black/60 backdrop-blur-[1px]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-[900px]">
        
        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="
            text-white/70
            tracking-[0.22em]
            uppercase
            text-[1.2rem] sm:text-[1.4rem]
            mb-4
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
            text-white font-bold leading-[1.05]
            text-[3.4rem] sm:text-[6.4rem]
          "
        >
          Premium&nbsp;AV&nbsp;Solutions
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="
            text-white/85 mt-6
            text-[1.45rem] sm:text-[1.9rem]
            max-w-[55rem] leading-relaxed
          "
        >
          Comprehensive audiovisual solutions powered by global technology
          alliances and engineered for exceptional performance across modern
          commercial environments.
        </motion.p>

        {/* Certification / Badge */}
        <motion.img
          src="/cedia.png"
          alt="CEDIA"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-14 w-[14rem] sm:w-[20rem] opacity-95"
        />
      </div>
    </section>
  );
};

export default Hero;
