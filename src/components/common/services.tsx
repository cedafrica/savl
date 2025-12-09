import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
});

const Services = () => {
  const data = [
    {
      title: "Audio Architecture",
      text:
        "We design audio as an architectural layer — shaping space, mood, and experience with precision-calibrated sound fields engineered for luxury environments.",
      image: "/aud.webp",
    },
    {
      title: "Visual Experiences",
      text:
        "Ultra-high-definition LED walls and projection canvases crafted to complement architecture. Our systems transform hospitality and commercial spaces into immersive visual stories.",
      image: "/the.png",
    },
    {
      title: "Lighting Design",
      text:
        "Light that sculpts atmosphere. Our integrative lighting ecosystems merge function and emotion — elevating how guests feel, move, and connect within the space.",
      image: "/lightning_solution.png",
    },
  ];

  return (
    <section className="bg-[#EDEDED] py-2">
      <MaxContainer>
        {/* SECTION HEADER */}
        

        {/* IMMERSIVE SERVICE SECTIONS */}
        <div className="flex flex-col space-y-40">
          {data.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-20 items-center`}
            >
              {/* IMAGE SIDE — PARALLAX EFFECT */}
              <motion.div
                variants={fade(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative w-full lg:w-[55%] overflow-hidden rounded-3xl"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full h-[34rem] sm:h-[40rem] object-cover 
                    rounded-3xl
                  "
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 1.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              </motion.div>

              {/* TEXT SIDE */}
              <motion.div
                variants={slide(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="w-full lg:w-[45%] space-y-6"
              >
                <h2 className="text-[3rem] sm:text-[3.4rem] font-semibold text-slate-900 tracking-tight leading-tight">
                  {item.title}
                </h2>
                <p className="text-[1.55rem] sm:text-[1.65rem] text-slate-600 leading-relaxed max-w-[580px]">
                  {item.text}
                </p>

                <button
                  className="
                    mt-6 inline-flex items-center
                    text-[1.45rem] font-medium
                    text-slate-900
                    border border-slate-300
                    px-6 py-3 rounded-full
                    transition-all duration-300
                    hover:bg-slate-900 hover:text-white hover:border-slate-900
                  "
                >
                  Discuss Your Project
                  <span className="ml-2 text-[1.9rem] translate-y-[1px]">
                    →
                  </span>
                </button>
              </motion.div>
            </div>
          ))}
        </div>
      </MaxContainer>
    </section>
  );
};

export default Services;
