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
    <section className="flex bg-[url(/hero.png)] bg-cover bg-no-repeat sm:bg-fixed px-10 sm:px-32 flex-col justify-center text-white sm:h-[min(100vh,960px)] h-screen">
      
      <motion.h1
        className="sm:text-[8.1rem] text-[3.2rem] font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={1}
      >
        About Us
      </motion.h1>
      
      <motion.p
        className="sm:text-[2rem] text-[1.6rem] mt-4 max-w-200 w-full font-normal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
      >
        Spectra AVL is Nigeria's premier provider of audiovisual, video, and lighting solutions, combining global partnerships with deep local market expertise.
      </motion.p>
      
      <motion.img
        src="/cedia.png"
        alt="cedia"
        className="sm:w-[19.6rem] mt-6 w-[14.1rem] sm:mt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={3}
      />
      
    </section>
  );
};

export default Hero;
