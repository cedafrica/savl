import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const Services = () => {
  const Solutions = [
    {
      name: "Video & Projection",
      text: "From large-scale LED walls to ultra-high-definition projection, we deliver stunning visual experiences that captivate audiences and enhance engagement.",
      image: "/video_projection.png",
    },
    {
      name: "Audio Systems",
      text: "Our expertly tuned sound systems bring unparalleled clarity to worship halls, stadiums, and event venues, ensuring every voice and note is heard as intended.",
      image: "/audio_system.png",
    },
    {
      name: "Lighting Solutions",
      text: "Lighting is more than illumination—it’s an experience. Our intelligent lighting solutions set the mood, enhance performances, and create unforgettable atmospheres.",
      image: "/lightning_solution.png",
    },
  ];

  return (
    <MaxContainer className="w-full">
      {Solutions.map((solution, index) => {
        const isEven = (index + 1) % 2 === 0;
        const delay = index * 0.3;

        return (
          <div
            key={index}
            className="grid w-full gap-[2.1rem] sm:gap-0 sm:grid-cols-2 items-center my-16"
          >
            {/* Image first on mobile */}
            <motion.img
              src={solution.image}
              alt={solution.name}
              className={`${isEven ? "sm:order-1 order-1" : "sm:order-2 order-1"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: delay + 0.15, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            />

            {/* Text */}
            <motion.div
              className={`self-center max-w-220 ${isEven ? "sm:order-2 sm:pl-16 order-2" : "sm:order-1 sm:pl-32 order-2"}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <h2 className="sm:text-[6.2rem] mt-[2.1rem] sm:mt-0 text-[2.4rem] font-semibold sm:font-bold sm:leading-[120%]">
                {solution.name}
              </h2>
              <p className="sm:text-[1.8rem] text-[1.6rem] mt-2 sm:mt-[2.8rem]">{solution.text}</p>
            </motion.div>
          </div>
        );
      })}
    </MaxContainer>
  );
};

export default Services;
