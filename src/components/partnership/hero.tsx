import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex bg-[url('/partner-hero.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col justify-center sm:bg-fixed text-white sm:h-[min(100vh,960px)] h-screen">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div> 
      
      {/* Content above overlay */}
      <div className="relative z-10 flex flex-col gap-4">
        <motion.h1
          className="sm:text-[6.1rem] text-[3.2rem] font-bold"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          The Power of Partnerships
        </motion.h1>

        <motion.p
          className="sm:text-[2rem] text-[1.4rem] max-w-400 w-full font-normal"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Our relationships with industry-leading brands ensure you receive the highest quality equipment, expert support, and cutting-edge technology for every project.
        </motion.p>

        <motion.img
          src="/cedia.png"
          alt="cedia"
          className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        />
      </div>
    </section>
  );
};

export default Hero;
