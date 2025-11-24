import MaxContainer from "../common/max-container";
import CustomButton from "./custom-button";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const Services = () => {
  const Solutions = [
    {
      name: "Video & Projection",
      text: "From large-scale LED walls to ultra-high-definition projection, we deliver stunning visual experiences that captivate audiences and enhance engagement.",
      link: "",
      image: "/video_projection.png",
    },
    {
      name: "Audio Systems",
      text: "Our expertly tuned sound systems bring unparalleled clarity to worship halls, stadiums, and event venues, ensuring every voice and note is heard as intended.",
      link: "",
      image: "/audio_system.png",
    },
    {
      name: "Lighting Solutions",
      text: "Lighting is more than illumination—it’s an experience. Our intelligent lighting solutions set the mood, enhance performances, and create unforgettable atmospheres.",
      link: "",
      image: "/lightning_solution.png",
    },
  ];

  return (
    <MaxContainer className="w-full">
      {Solutions.map((solution, index) => {
        const isEven = (index + 1) % 2 === 0;
        return (
          <motion.div
            key={index}
            className="grid w-full gap-[2.1rem] sm:gap-0 sm:grid-cols-2 items-center my-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Text Content */}
            <motion.div
              className={`self-center max-w-220 ${isEven ? "sm:order-2 sm:pl-16" : "sm:order-1 sm:pl-32"}`}
              variants={fadeUp}
              custom={index * 2 + 1}
            >
              <h2 className="sm:text-[6.2rem] mt-[2.1rem] sm:mt-0 text-[2.4rem] font-semibold sm:font-bold sm:leading-[120%]">
                {solution.name}
              </h2>
              <p className="sm:text-[1.8rem] text-[1.6rem] mt-2 sm:mt-[2.8rem]">{solution.text}</p>
              <CustomButton className="text-black border border-black px-8 mt-6">
                Learn More
              </CustomButton>
            </motion.div>

            {/* Image */}
            <motion.img
              src={solution.image}
              alt={solution.name}
              className={`${isEven ? "order-1" : "order-2"}`}
              variants={fadeUp}
              custom={index * 2 + 2}
            />
          </motion.div>
        );
      })}
    </MaxContainer>
  );
};

export default Services;
