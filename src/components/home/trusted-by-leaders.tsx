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

    Lighting: [
      { img: "/ma.png", name: "grandMA lighting control consoles and stage lighting technology." },
    ],

    Control: [
      { img: "/crestron.png", name: "Global leader in automation and control systems for AV and smart environments." },
    ],
  };

  const icons = {
    Audio: <Volume2 className="w-5 h-5" />,
    Video: <Video className="w-5 h-5" />,
    Lighting: <Lightbulb className="w-5 h-5" />,
    Control: <Sliders className="w-5 h-5" />,
  };

  return (
    <section className="py-28 px-6 sm:px-10 bg-gradient-to-b from-[#f3f3f4] to-[#f5f5f5]">
      <MaxContainer>

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
            <div
              className="
                bg-white/50 backdrop-blur-xl
                border border-white/70
                rounded-2xl sm:rounded-full
                py-3 px-3
                shadow-[0_10px_28px_rgba(0,0,0,0.06)]
                flex flex-wrap justify-center gap-2 sm:gap-4
              "
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`
                    relative flex items-center gap-2 px-5 sm:px-6 py-2
                    rounded-full font-medium transition-all
                    text-[1.35rem] sm:text-[1.6rem]
                    ${active === cat ? "text-black" : "text-slate-600"}
                  `}
                >
                  {icons[cat]}
                  {cat}

                  {active === cat && (
                    <motion.div
                      layoutId="tabHighlight"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* BRAND GRID */}
            <div className="mt-20 w-full flex justify-center">
              <div className="w-full max-w-[780px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -25 }}
                    transition={{ duration: 0.45 }}
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      lg:grid-cols-3
                      gap-8 sm:gap-14
                      justify-items-center
                    "
                  >
                    {partners[active].map((brand, i) => (
                      <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.12, duration: 0.45 }}
                        className="
                          bg-white/60 backdrop-blur-xl border border-white/60
                          rounded-xl
                          py-7 px-4 sm:py-10 sm:px-6
                          flex flex-col items-center justify-center text-center
                          shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                          hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                          hover:-translate-y-1 transition-all duration-500
                          w-full max-w-[260px]
                        "
                      >
                        <img
                          src={brand.img}
                          alt={brand.name}
                          className="
                            h-10 sm:h-14
                            object-contain
                            grayscale opacity-70
                            hover:grayscale-0 hover:opacity-100
                            transition-all duration-500
                          "
                        />

                        <p className="mt-4 text-[1.3rem] sm:text-[1.45rem] text-slate-700 opacity-70 hover:opacity-100 transition">
                          {brand.name}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>

      </MaxContainer>
    </section>
  );
};

export default TrustedByLeaders;
