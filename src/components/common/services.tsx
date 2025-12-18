import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// FIXED VARIANTS — fully FM v11 compatible (no ease)
const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.9
    }
  }
});

const slide = (d = 0) => ({
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: d,
      duration: 1.1
    }
  }
});

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
    <section className="bg-[#fff] py-2">
      <MaxContainer>

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
                className="relative w-full lg:w-[55%] overflow-hidden rounded-3xl"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[34rem] sm:h-[40rem] object-cover rounded-3xl"
                  initial={{ scale: 1.15 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 1.8
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

                <Link to="/contact">
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
