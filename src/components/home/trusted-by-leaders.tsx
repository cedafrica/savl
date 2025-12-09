import { useState } from "react";
import MaxContainer from "../common/max-container";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, Video, Lightbulb } from "lucide-react";

type Category = "Audio" | "Video" | "Lighting";

const TrustedByLeaders = () => {
  const categories: Category[] = ["Audio", "Video", "Lighting"];
  const [active, setActive] = useState<Category>("Audio");

  const partners: Record<Category, { img: string; name: string }[]> = {
    Audio: [
      { img: "/ma.png", name: "MA Lighting is a leading provider of professional lighting control solutions, renowned for its grandMA consoles and innovative stage light technology" },
      { img: "/shure.png", name: "Leading manufacturer of microphones for live, touring and studio applications." },
      { img: "/christie.png", name: "Christie is a global audio visual solutions company. They create innovative AV solutions and display products that inspire exceptional experiences." },
      { img: "/L-Acoustics.png", name: "L-Acoustics sets the benchmark for the concert sound system and professional sound system innovations; redefining the future of audio." },
        { img: "/avpro.png", name: "AVPro is an electronics manufacture of AVPro Edge & Murideo. They manufacture cutting edge Audio Video distribution & testing equipment, specializing in high bandwidth signal flow." },
        { img: "/jbl.png", name: "JBL is an American audio equipment manufacturer headquartered in Los Angeles, California. The company was founded in 1946" },
 
    ],
    Video: [
      { img: "/infiled.png", name: "INFILED specializes in high quality LED display solutions, offering innovative screens for events, retail, broadcasting, and large-scale installations" },
      { img: "/unilumin.png", name: "Leading LED display manufacturer and supplier offering innovative solutions for indoor and outdoor applications" },
      
      { img: "/christie.png", name: "Christie is a global audio visual solutions company. They create innovative AV solutions and display products that inspire exceptional experiences." },
      { img: "/avpro.png", name: "AVPro is an electronics manufacture of AVPro Edge & Murideo. They manufacture cutting edge Audio Video distribution & testing equipment, specializing in high bandwidth signal flow." },
       { img: "/samsung.png", name: "Samsung is a global technology powerhouse known for cutting-edge displays, consumer electronics, and professional visual solutions for businesses." },
       { img: "/si.png", name: "Screen Innovations (SI) designs innovative projection screens and shades, delivering immersive viewing experiences in homes, offices, and cinemas." },
   
      { img: "/barco.png", name: "Barco NV is a Belgian technology company that specializes in digital projection and imaging technology, focusing on three core markets: entertainment, enterprise, and healthcare" },
    ],
    Lighting: [
      { img: "/ma.png", name: "MA Lighting is a leading provider of professional lighting control solutions, renowned for its grandMA consoles and innovative stage light technology" },
      { img: "/crestron.png", name: "Crestron is a global leader in automation and control solutions, delivering advanced technologies for smart homes, offices, and AV Integration." },
     
    ],
  };

  const icons = {
    Audio: <Volume2 className="w-5 h-5" />,
    Video: <Video className="w-5 h-5" />,
    Lighting: <Lightbulb className="w-5 h-5" />,
  };

  return (
    <section className="py-28 bg-gradient-to-b from-[#f3f3f4] to-[#f5f5f5]">
      <MaxContainer>
        
        {/* CENTERED BLOCK */}
        <div className="w-full flex justify-center">
          <div className="w-full max-w-[900px] flex flex-col items-center">

            {/* Heading */}
            <div className="text-center mb-20">
              <h2 className="text-[3rem] sm:text-[3.8rem] font-semibold text-slate-900 tracking-tight">
                Strategic Partners & Subsidiaries
              </h2>
              <p className="text-[1.6rem] sm:text-[1.9rem] text-slate-600 max-w-[48rem] mx-auto mt-4 leading-relaxed">
               Our commitment to excellence is reinforced through key partnerships
              </p>
            </div>

            {/* TABS */}
            <div
              className="
                bg-white/50 backdrop-blur-xl 
                border border-white/70 
                rounded-full px-4 py-3 
                shadow-[0_10px_28px_rgba(0,0,0,0.06)]
                flex items-center justify-center gap-2 sm:gap-4
              "
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`
                    relative flex items-center gap-2 px-6 py-2
                    rounded-full font-medium transition-all
                    text-[1.4rem] sm:text-[1.6rem]
                    ${active === cat ? "text-black" : "text-slate-600"}
                  `}
                >
                  {icons[cat]}
                  {cat}

                  {active === cat && (
                    <motion.div
                      layoutId="tabHighlight"
                      className="absolute inset-0 bg-white rounded-full -z-10 shadow"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 25
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* GRID */}
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
                      grid grid-cols-2 sm:grid-cols-3
                      gap-12 sm:gap-14 justify-items-center
                    "
                  >
                    {partners[active].map((brand, i) => (
                      <motion.div
                        key={brand.name}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.15, duration: 0.45 }}
                        className="
                          bg-white/60 backdrop-blur-xl border border-white/60
                          rounded-xl py-10 px-6
                          flex flex-col items-center justify-center text-center
                          shadow-[0_8px_25px_rgba(0,0,0,0.05)]
                          hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]
                          hover:-translate-y-1 transition-all duration-500
                          w-full
                        "
                      >
                        <img
                          src={brand.img}
                          className="
                            h-12 sm:h-14 object-contain 
                            grayscale group-hover:grayscale-0
                            opacity-70 hover:opacity-100 transition-all duration-500
                          "
                        />

                        <p className="mt-4 text-[1.35rem] sm:text-[1.45rem] text-slate-700 opacity-70 hover:opacity-100 transition">
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
