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
    <section className="relative flex bg-[url('/uiu.webp')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col justify-center text-white sm:h-[min(100vh,960px)] sm:bg-fixed h-screen">
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h1
          className="sm:text-[6.1rem] text-[3.2rem] text-start font-bold"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          Premium AV&nbsp;Solutions
        </motion.h1>

        <motion.p
          className="sm:text-[1.8rem] text-[1.6rem] max-w-250 w-full font-normal mt-2 sm:mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          Comprehensive audiovisual services backed by global partnerships and unmatched local expertise
        </motion.p>

        <motion.img
          src="/cedia.png"
          alt="cedia"
          className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        />
      </div>
    </section>
  );
};

export default Hero;
