import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

/* ---------------- MOTION VARIANTS ---------------- */

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.9,
    },
  },
});

const slide = (d = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: d,
      duration: 1.1,
    },
  },
});

/* ---------------- COMPONENT ---------------- */

const Services = () => {
  const data = [
    {
      title: "Audio",
      text:
        "We implement and finely tune professional audio systems that deliver clear, balanced, and immersive sound, creating spaces where audiences feel connected, comfortable, and fully engaged, and where every voice and note is heard exactly as intended.",
      image: "/audser.png",
    },
    {
      title: "Video",
      text:
        "From large-scale LED walls to ultra-high-definition projection, we deliver stunning visual experiences that captivate audiences and enhance engagement.",
      image: "/champ.webp",
    },
    {
      title: "Lighting",
      text:
        "Lighting is more than illumination—it’s an experience. Our intelligent lighting solutions set the mood, enhance performances, and create unforgettable atmospheres.",
      image: "/malight.webp",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-white overflow-hidden">
      <MaxContainer className="relative z-10">

        {/* IMMERSIVE SERVICE SECTIONS */}
        <div className="flex flex-col space-y-40">
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-20 items-center`}
            >
              {/* IMAGE SIDE */}
              <motion.div
                variants={fade(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  relative w-full lg:w-[55%]
                  overflow-hidden rounded-3xl
                  ring-1 ring-[#00569e]/10
                  bg-white isolate
                "
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[34rem] sm:h-[40rem] object-cover rounded-3xl"
                  initial={{ scale: 1.08 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.8 }}
                />
              </motion.div>

              {/* TEXT SIDE */}
              <motion.div
                variants={slide(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-[45%] space-y-7"
              >
                {/* TITLE WITH BLUE ACCENT */}
                <div className="relative inline-block">
                  <h2 className="text-[3rem] sm:text-[3.4rem] font-semibold text-slate-900 tracking-tight leading-tight">
                    {item.title}
                  </h2>
                  <span
                    className="
                      absolute -bottom-2 left-0
                      h-[2px] w-14
                      bg-[#00569e]
                    "
                  />
                </div>

                <p className="text-[1.55rem] sm:text-[1.65rem] text-slate-600 leading-relaxed max-w-[580px]">
                  {item.text}
                </p>

                {/* CTA */}
                <Link to="/contact">
                  <button
                    className="
                      mt-6 inline-flex items-center
                      text-[1.45rem] font-medium
                      text-slate-900
                      border border-[#00569e]/30
                      px-6 py-3 rounded-full
                      transition-all duration-300
                      hover:text-[#00569e]
                      hover:border-[#00569e]
                      hover:shadow-[0_8px_25px_rgba(0,86,158,0.18)]
                    "
                  >
                    Discuss Your Project
                    <span className="ml-2 text-[1.9rem] translate-y-[1px]">→</span>
                  </button>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

      </MaxContainer>
    </section>
  );
};

export default Services;
