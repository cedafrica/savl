import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
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
        "Companies such as Harman, Infiled, Christie, trust us to deliver their AV projects",
    },
    {
      title: "Future-Proof Technology",
      content:
        "We design scalable, high-performance AV solutions that evolve with your business needs.",
    },
  ];

  return (
    <section className="bg-black px-10 sm:px-32 sm:pb-[11.1rem] pt-[3.1rem] sm:pt-[6.3rem] text-white">
      {/* Heading */}
      <motion.div
        className="text-center space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-center text-[2.8rem] sm:text-[4.3rem] font-semibold">
          Why Spectra AVL
        </h2>
        <p className="text-center text-[1.6rem] sm:text-[2rem] sm:max-w-240 mx-auto">
          We are the bridge between innovation and execution, bringing world-class audiovisual solutions to Nigeria.
        </p>
      </motion.div>

      <MaxContainer className="sm:mt-36 flex-col-reverse mt-[3rem] sm:flex-row flex justify-center items-center gap-32">
        {/* Image */}
        <motion.img
          src="/lights.png"
          alt=""
          className="w-full max-w-[50.8rem]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        />

        {/* Advantages List */}
        <motion.div
          className="flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-12 items-start justify-between"
              variants={fadeUp}
              custom={index + 2} // stagger after image
            >
              <div className="flex gap-[1.8rem] flex-col items-center justify-center">
                <div className="size-16 flex items-center justify-center border text-[1.8rem] rounded-full">
                  {index + 1}
                </div>
                {index < advantages.length - 1 && (
                  <div className="w-[.5px] bg-gray-200 h-40" />
                )}
              </div>
              <div>
                <h3 className="text-[2rem] mb-2 font-semibold">{item.title}</h3>
                <p className="font-regular max-w-[33.1rem] text-[1.6rem]">{item.content}</p>
              </div>
            </motion.div>
          ))}

          {/* CTA Button */}
          
        </motion.div>
      </MaxContainer>
    </section>
  );
};

export default WhySpecialAVL;
