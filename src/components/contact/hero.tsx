import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex bg-[url('/contact-hero.png')] bg-no-repeat px-10 sm:px-32 sm:bg-size-[100%_100%] flex-col justify-center text-white sm:h-[min(100vh,960px)] h-screen bg-cover">
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      
      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-col gap-8">
        {/* Heading */}
        <motion.h1
          className="sm:text-[5.5rem] leading-[120%] max-w-280 text-[3.2rem] font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Let’s Discuss Your Next Project
        </motion.h1>

        {/* Image */}
        <motion.img
          src="/cedia.png"
          alt="cedia"
          className="sm:w-[19.6rem] w-[14.1rem] sm:mt-18"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </section>
  );
};

export default Hero;
