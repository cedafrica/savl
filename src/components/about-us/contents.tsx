import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Content = () => {
  const contents = [
    {
      header: "Vision",
      paragraph:
        "To be Africa’s most trusted audiovisual integration partner, setting the benchmark for technical excellence, innovation, and reliability across stadiums, corporate environments, hospitality, and worship spaces.",
    },
    {
      header: "Mission",
      paragraph:
        "To design and deliver world-class audiovisual ecosystems that transform spaces, deepen connection, and enable our clients to communicate, inspire, and perform at scale.",
    },
  ];

  return (
    <section className="bg-[#EFEFEF]">
      {/* VISION & MISSION */}
      <div className="px-10 sm:px-0 py-16 sm:py-24">
        <MaxContainer>
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7 }}
            className="mb-10 sm:mb-14"
          >
            <p className="text-[1.3rem] sm:text-[1.4rem] tracking-[0.25em] uppercase text-slate-500">
              Our Foundation
            </p>
            <h2 className="mt-3 text-[2.4rem] sm:text-[3.2rem] font-semibold text-slate-900 max-w-[40rem]">
              A clear vision and mission guiding every integration.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-10 sm:gap-12">
            {contents.map((content, index) => (
              <motion.div
                key={content.header}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="
                  relative overflow-hidden
                  rounded-2xl
                  bg-white/80
                  border border-slate-200/70
                  shadow-[0_18px_60px_rgba(15,23,42,0.08)]
                  px-6 py-8 sm:px-8 sm:py-10
                  flex flex-col gap-4
                "
              >
                {/* subtle corner accent */}
                <span className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-slate-900 via-slate-500 to-slate-300" />

                <p className="text-[1.3rem] sm:text-[1.4rem] uppercase tracking-[0.18em] text-slate-500">
                  {index === 0 ? "01" : "02"} • {content.header}
                </p>
                <h3 className="text-[2rem] sm:text-[2.4rem] font-semibold text-slate-900">
                  {content.header}
                </h3>
                <p className="text-[1.5rem] sm:text-[1.7rem] leading-relaxed text-slate-600">
                  {content.paragraph}
                </p>
              </motion.div>
            ))}
          </div>
        </MaxContainer>
      </div>

      {/* ELEVATING AUDIOVISUAL EXCELLENCE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: 0.1 }}
        className="
          relative w-full bg-fixed h-[100vh]
          bg-[url(/uiu.webp)] bg-cover bg-center bg-no-repeat
        "
      >
        {/* overlay for cinematic feel */}
        <div className="absolute inset-0 bg-black/55 sm:bg-black/60" />

        <div className="relative z-10">
          <MaxContainer className="py-20 sm:py-28">
            <div className="max-w-[860px] text-left text-white px-10 sm:px-0">
              <p className="text-[1.3rem] sm:text-[1.4rem] tracking-[0.25em] uppercase text-white/60">
                Elevating Audiovisual Excellence
              </p>

              <h2 className="mt-4 text-[2.6rem] sm:text-[4rem] font-semibold leading-tight text-white">
                Redefining performance-driven AVL for modern African spaces.
              </h2>

              <p className="mt-6 sm:mt-5 text-[1.5rem] sm:text-[1.8rem] leading-relaxed text-white/85">
                At Spectra AVL, we are reshaping the audio, video, and lighting
                landscape in Nigeria. Through our strategic collaboration with
                Audio Technology, we combine global innovation with local
                expertise to deliver premium AVL systems tailored to the realities
                of African environments.
              </p>

              <p className="mt-4 text-[1.5rem] sm:text-[1.8rem] leading-relaxed text-white/80">
                With a legacy of over <span className="font-semibold">31+ years</span>,
                a team of <span className="font-semibold">100+ design and engineering specialists</span>, and
                more than <span className="font-semibold">4,500 successfully completed projects</span>, our
                ecosystem is engineered to create immersive, reliable, and
                future-ready experiences for every audience.
              </p>
            </div>
          </MaxContainer>
        </div>
      </motion.section>
    </section>
  );
};

export default Content;
