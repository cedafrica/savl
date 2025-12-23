import { useState } from "react";
import MaxContainer from "../common/max-container";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Video, Lightbulb, Sliders } from "lucide-react";

type Category = "Audio" | "Video" | "Lighting" | "Control";

const TrustedByLeaders = () => {
  const categories: Category[] = ["Audio", "Video", "Lighting", "Control"];
  const [active, setActive] = useState<Category>("Audio");

  const partners: Record<Category, { img: string; name: string }[]> = {
    Audio: [
      { img: "/ma.png", name: "Professional lighting and control systems for stage and entertainment." },
      { img: "/shure.png", name: "Leading manufacturer of microphones for live, touring and studio applications." },
      { img: "/L-Acoustics.png", name: "Benchmark-setting professional sound reinforcement systems." },
      { img: "/avpro.png", name: "High-bandwidth AV distribution and signal testing solutions." },
      { img: "/jbl.png", name: "Iconic American audio equipment manufacturer founded in 1946." },
    ],
    Video: [
      { img: "/infiled.png", name: "High-quality LED display solutions for large-scale installations." },
      { img: "/unilumin.png", name: "Advanced LED display technology for indoor and outdoor environments." },
      { img: "/christie.png", name: "Global leader in projection and AV display technologies." },
      { img: "/avpro.png", name: "Professional AV signal distribution and testing equipment." },
      { img: "/samsung.png", name: "Cutting-edge professional display solutions." },
      { img: "/si.png", name: "Innovative projection screens and shading systems." },
      { img: "/barco.png", name: "Visualization and projection solutions for enterprise and entertainment." },
    ],
    Lighting: [{ img: "/ma.png", name: "grandMA lighting control consoles and stage lighting technology." }],
    Control: [{ img: "/crestron.png", name: "Global leader in automation and control systems for AV and smart environments." }],
  };

  const icons = {
    Audio: <Volume2 className="w-5 h-5" />,
    Video: <Video className="w-5 h-5" />,
    Lighting: <Lightbulb className="w-5 h-5" />,
    Control: <Sliders className="w-5 h-5" />,
  };

  return (
    <section className="relative py-28 px-6 sm:px-10 overflow-hidden bg-[#f4f6f8]">

      {/* 🌐 ORBIT RING */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="relative w-[900px] h-[900px] sm:w-[1200px] sm:h-[1200px]">

          {/* Outer orbit */}
          <div className="
            absolute inset-0 rounded-full
            border border-[#00569e]/25
            blur-[0.5px]
            animate-orbitSlow
          " />

          {/* Inner orbit */}
          <div className="
            absolute inset-[12%] rounded-full
            border border-[#00569e]/15
            blur-[0.5px]
            animate-orbitReverse
          " />

          {/* Orbit particle */}
          <div className="
            absolute top-1/2 left-1/2
            w-2 h-2 rounded-full
            bg-[#00569e]
            shadow-[0_0_20px_rgba(0,86,158,0.8)]
            animate-orbitParticle
          " />
        </div>
      </div>

      <MaxContainer className="relative z-10">
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[900px] flex flex-col items-center">

            {/* HEADING */}
            <div className="text-center mb-20">
              <h2 className="text-[3rem] sm:text-[3.8rem] font-semibold text-slate-900 tracking-tight">
                Strategic Partners & Subsidiaries
              </h2>
              <p className="text-[1.6rem] sm:text-[1.9rem] text-slate-600 max-w-[48rem] mx-auto mt-4 leading-relaxed">
                Our commitment to excellence is reinforced through carefully
                selected global technology partners.
              </p>
            </div>

            {/* FILTER TABS */}
            <div className="bg-white/70 backdrop-blur-xl rounded-full py-3 px-4 shadow-lg flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`
                    relative px-6 py-2 rounded-full font-medium transition-all
                    text-[1.35rem] sm:text-[1.6rem]
                    ${
                      active === cat
                        ? "text-[#00569e]"
                        : "text-slate-600 hover:text-[#00569e]"
                    }
                  `}
                >
                  <span className="flex items-center gap-2">
                    {icons[cat]}
                    {cat}
                  </span>

                  {active === cat && (
                    <motion.div
                      layoutId="tabHighlight"
                      className="
                        absolute inset-0 -z-10 rounded-full
                        ring-2 ring-[#00569e]/40
                        shadow-[0_0_30px_rgba(0,86,158,0.35)]
                      "
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* BRAND GRID */}
            <div className="mt-20 w-full">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.45 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
                >
                  {partners[active].map((brand, i) => (
                    <motion.div
                      key={brand.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.12 }}
                      className="
                        bg-white/85 backdrop-blur-xl
                        rounded-xl px-6 py-8
                        shadow-[0_10px_35px_rgba(0,0,0,0.08)]
                        hover:shadow-[0_18px_45px_rgba(0,86,158,0.25)]
                        hover:-translate-y-1
                        transition-all duration-500
                        w-full max-w-[260px]
                      "
                    >
                      <img
                        src={brand.img}
                        alt={brand.name}
                        className="
                          h-12 mx-auto
                          grayscale opacity-70
                          hover:opacity-100 hover:grayscale-0
                          transition-all duration-500
                        "
                      />

                      <p className="mt-4 text-center text-slate-700 text-[1.35rem]">
                        {brand.name}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </MaxContainer>

      {/* ORBIT KEYFRAMES */}
      <style>{`
        @keyframes orbitSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbitReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes orbitParticle {
          from { transform: rotate(0deg) translateX(450px); }
          to { transform: rotate(360deg) translateX(450px); }
        }
        .animate-orbitSlow {
          animation: orbitSlow 90s linear infinite;
        }
        .animate-orbitReverse {
          animation: orbitReverse 140s linear infinite;
        }
        .animate-orbitParticle {
          animation: orbitParticle 60s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default TrustedByLeaders;
