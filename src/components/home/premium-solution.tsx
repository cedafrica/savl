import Services from "../common/services";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const PremiumSolution = () => {
  return (
    <section className="bg-white sm:pt-[8.1rem] pb-[4.1rem] sm:pb-0 px-10 sm:px-0 pt-[4rem]">
      {/* Heading */}
      <motion.h2
        className="text-center font-semibold sm:text-[4rem] text-[3rem]"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
      >
        Premium Solutions
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-center mx-auto sm:text-[2rem] text-[1.8rem] max-w-[55.8rem] mt-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
      >
        Comprehensive audiovisual services backed by global partnerships and local expertise
      </motion.p>

      {/* Services Component */}
      <motion.div
        className="sm:mt-[6.3rem] mt-4"
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
