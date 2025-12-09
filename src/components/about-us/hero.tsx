import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.9, 
      ease: "easeOut" 
    }
  }
};

const Hero = () => {
  return (
    <section
      className="
        relative w-full h-screen 
        flex flex-col justify-center
        px-10 sm:px-32
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url(/hero.png)" }}
    >
      {/* LUXURY OVERLAY */}
      <div className="absolute inset-0 bg-black/45 sm:bg-black/55 backdrop-blur-[1px]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] space-y-8">

        {/* TITLE */}
        <motion.h1
          className="font-bold text-white leading-[1.08]
                     text-[3.4rem] sm:text-[7.2rem]"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          About Us
        </motion.h1>

        {/* TEXT */}
        <motion.p
          className="
            text-white/85 font-light leading-relaxed
            text-[1.55rem] sm:text-[2rem] max-w-[55rem]
          "
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Spectra AVL is Nigeria's premier provider of audiovisual, video, 
          and lighting solutions, combining global partnerships with deep 
          local market expertise.
        </motion.p>

        {/* LOGO */}
        <motion.img
          src="/cedia.png"
          alt="CEDIA"
          className="w-[14rem] sm:w-[20rem] opacity-95"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        />
      </div>
    </section>
  );
};

export default Hero;
