import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const WhySpecialAVL = () => {
  const advantages = [
    {
      title: "Global Backing",
      content:
        "As an extension of Audio Technology, we integrate international excellence with local execution.",
    },
    {
      title: "Trusted by Industry Leaders",
      content:
        "Companies such as Harman, Infiled, Christie, trust us to deliver their AV projects.",
    },
    {
      title: "Future-Proof Technology",
      content:
        "We design scalable, high-performance AV solutions that evolve with your business needs.",
    },
  ];

  return (
    <section className="bg-black px-10 sm:px-32 sm:pb-[11.1rem] pt-[3.1rem] sm:pt-[6.3rem] text-white">

      {/* HEADER */}
      <motion.div
        className="text-center space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-[2.8rem] sm:text-[4.3rem] font-semibold text-[#00569e]">
          Why Spectra AVL
        </h2>
        <p className="text-[1.6rem] sm:text-[2rem] sm:max-w-[60rem] mx-auto text-gray-300">
          We are the bridge between innovation and execution, bringing world-class audiovisual solutions to Nigeria.
        </p>
      </motion.div>

      <MaxContainer className="sm:mt-36 mt-[3rem] flex flex-col-reverse sm:flex-row justify-center items-center gap-32">

        {/* IMAGE */}
        <motion.img
          src="/lights.png"
          alt="Spectra AVL Lighting"
          className="w-full max-w-[50.8rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        />

        {/* ADVANTAGES */}
        <motion.div
          className="flex flex-col gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-12 items-start"
              variants={fadeUp}
              custom={index + 2}
            >
              {/* NUMBER + LINE */}
              <div className="flex flex-col items-center gap-3">
                <div
                  className="
                    size-16 flex items-center justify-center
                    rounded-full border-2
                    border-[#00569e]
                    text-[#00569e]
                    text-[1.8rem] font-semibold
                  "
                >
                  {index + 1}
                </div>

                {index < advantages.length - 1 && (
                  <div className="w-[1px] h-36 bg-[#00569e]/60" />
                )}
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-[2rem] mb-2 font-semibold text-white">
                  {item.title}
                </h3>
                <p className="max-w-[33.1rem] text-[1.6rem] text-gray-300 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </MaxContainer>
    </section>
  );
};

export default WhySpecialAVL;
