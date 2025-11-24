import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const Hero = () => {
  return (
    <section className="relative flex bg-[url('/shw.webp')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col sm:bg-fixed justify-center text-white sm:h-[min(100vh,960px)] h-screen">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div> 
      
      {/* Content above overlay */}
      <motion.div 
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h1 
          className="sm:text-[6.1rem] text-[3.2rem] font-bold"
          variants={fadeUp}
          custom={1}
        >
          Our Projects
        </motion.h1>
        <motion.p 
          className="sm:text-[2rem] text-[1.6rem] max-w-200 w-full font-normal mt-4 sm:mt-4"
          variants={fadeUp}
          custom={2}
        >
          Explore our portfolio of premium audiovisual installations across Nigeria
        </motion.p>
        <motion.img 
          src="/cedia.png" 
          alt="cedia" 
          className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8"
          variants={fadeUp}
          custom={3}
        />
      </motion.div>
    </section>
  );
}

export default Hero;
