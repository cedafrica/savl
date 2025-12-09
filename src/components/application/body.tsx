import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

// FIXED VARIANTS — FM v11 safe
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 1 }
  }
});

const zoomReveal = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2 }
  }
};

const Services = () => {
  const services = [
    {
      title: "Audio Architecture",
      text:
        "We engineer audio environments that blend into the architectural narrative—creating rich tonal spaces calibrated for intimacy, clarity, and emotional depth.",
      image: "/aud.webp",
    },
    {
      title: "Visual Immersion",
      text:
        "From LED walls to projection landscapes, our visual systems elevate ambience, storytelling, and commercial presentation into immersive sensory moments.",
      image: "/the.png",
    },
    {
      title: "Atmospheric Lighting",
      text:
        "Lighting is emotion. We sculpt ambience, highlight architecture, and enhance the human experience through refined, programmable lighting ecosystems.",
      image: "/lightning_solution.png",
    },
  ];

  return (
    <section className="bg-[#F7F7F7] py-20 sm:py-32 relative">
      <MaxContainer>

        {/* TOP HEADING */}
        <motion.div
          variants={fadeUp(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-20 sm:mb-40 px-4"
        >
          <h1 className="text-[2.6rem] sm:text-[4rem] leading-tight font-semibold text-slate-900 tracking-tight">
            Crafting Experiences With Precision
          </h1>

          <p className="text-[1.45rem] sm:text-[1.65rem] text-slate-600 max-w-[750px] mx-auto leading-relaxed mt-4 sm:mt-6">
            Every environment deserves a sensory identity. We design audiovisual
            systems that enrich atmosphere, elevate architecture, and move people.
          </p>
        </motion.div>

        {/* Vertical guideline (desktop only) */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-slate-300/40"></div>

        {/* SERVICES LIST */}
        <div className="flex flex-col space-y-24 sm:space-y-[18rem] px-4 sm:px-0">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row ${
                  isEven ? "" : "lg:flex-row-reverse"
                } items-center gap-10 sm:gap-20`}
              >
                {/* IMAGE */}
                <motion.div
                  variants={zoomReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="
                    w-full lg:w-1/2 
                    h-[22rem] sm:h-[36rem]
                    overflow-hidden rounded-[28px] sm:rounded-[36px] 
                    shadow-[0_12px_35px_rgba(0,0,0,0.08)]
                  "
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  variants={fadeUp(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`
                    w-full lg:w-1/2 
                    space-y-4 sm:space-y-6
                    ${isEven ? "text-left lg:pr-10" : "text-left lg:pl-10"}
                  `}
                >
                  <h2 className="text-[2.4rem] sm:text-[3.2rem] leading-tight font-semibold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="text-[1.45rem] sm:text-[1.55rem] text-slate-600 leading-relaxed max-w-[600px]">
                    {service.text}
                  </p>

                  <button
                    className="
                      inline-flex items-center
                      text-[1.35rem] sm:text-[1.45rem] 
                      font-medium
                      border border-slate-300
                      px-5 sm:px-6 py-2.5 sm:py-3 
                      rounded-full
                      hover:bg-slate-900 hover:text-white 
                      transition-all duration-300
                      mt-4 sm:mt-6
                    "
                  >
                    Discuss Your Project →
                  </button>
                </motion.div>
              </div>
            );
          })}
        </div>

      </MaxContainer>
    </section>
  );
};

export default Services;
