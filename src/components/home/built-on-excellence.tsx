import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const BuiltOnExcellence = () => {
  const partners = [
    {
      name: "Best-in-Class Technologies",
      text: "We integrate only premium AV brands to match the standard of the spaces we serve.",
      image: "/medal.svg",
    },
    {
      name: "Global Ecosystem, Local Delivery",
      text: "International partners, engineered and supported by a specialist team on ground.",
      image: "/global.svg",
    },
    {
      name: "Precision Integration Team",
      text: "Experienced engineers delivering flawless execution on every commercial project.",
      image: "/team.svg",
    },
  ];

  const projects = [
    {
      no: "4,500+",
      text: "Projects Delivered Across Sectors",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7h18M3 12h18M3 17h18"
          />
        </svg>
      ),
    },
    {
      no: "31+",
      text: "Years of Technical Expertise",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" />
          <path
            d="M12 6v6l4 2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      no: "120+",
      text: "Premium Technology Partners",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 0l4 4m0-4l-4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      no: "98%",
      text: "Client Retention & Satisfaction",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-slate-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="px-6 sm:px-10 lg:px-24 pt-[4rem] sm:pt-[7rem] pb-[7rem] bg-white">
      <MaxContainer>
        {/* TOP SECTION */}
        <div className="flex flex-col gap-8 sm:gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h2 className="text-black font-semibold sm:text-[3.4rem] text-[2.4rem] leading-tight tracking-tight max-w-[40rem]">
              Built on Excellence,
              <br />
              Engineered for Premium Spaces.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-[32rem] text-[1.4rem] sm:text-[1.6rem] text-slate-600 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Spectra AVL is the integration partner behind some of the most
            demanding commercial and pro AV environments — restaurants & lounges,
            corporate HQs, hotels, retail, and multi-site venues that cannot
            afford compromises.
          </motion.p>
        </div>

        {/* PARTNERS LIST */}
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 mt-14 sm:mt-20">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="relative flex items-start gap-4 sm:gap-5 rounded-2xl border border-slate-100/70 bg-gradient-to-b from-slate-50/40 via-white to-slate-100/30 backdrop-blur-sm px-5 py-6 sm:px-6 sm:py-8 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 2}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="shrink-0">
                <div className="relative inline-flex items-center justify-center rounded-2xl border border-slate-200/70 bg-slate-50/70 p-3 sm:p-4">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-200/60 via-white/0 to-slate-400/40 opacity-40" />
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="relative sm:h-10 h-8 w-auto object-contain"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <h3 className="sm:text-[1.9rem] text-[1.6rem] font-semibold text-slate-900 leading-snug">
                  {partner.name}
                </h3>
                <p className="sm:text-[1.5rem] text-[1.35rem] text-slate-600 leading-snug">
                  {partner.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IMAGE + TEXT SECTION */}
        <div className="relative flex flex-col-reverse sm:flex-row items-center sm:items-stretch sm:gap-16 lg:gap-20 mt-20 sm:mt-28">
          {/* LEFT: TEXT + STATS */}
          <div className="flex flex-col sm:w-1/2 text-gray-900 space-y-8 sm:space-y-10">
            <motion.h2
              className="mt-12 sm:mt-0 sm:text-[3rem] text-[2.6rem] font-semibold leading-tight text-left tracking-tight"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              Seamless AV for High-Value Commercial Projects.
            </motion.h2>

            <motion.p
              className="sm:text-[1.8rem] text-[1.5rem] text-slate-700 leading-relaxed text-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              From concept to commissioning, Spectra AVL designs and integrates
              complete AV ecosystems — audio, video, control, and acoustics —
              tailored to each space. Every system is engineered to perform
              flawlessly, stay scalable, and remain future-ready for years.
            </motion.p>

            {/* PROJECT STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-4">
              {projects.map((project, index) => (
                <motion.div
                  key={project.text}
                  className="flex flex-col items-start rounded-2xl border border-slate-100 bg-slate-50/60 px-6 py-5 sm:px-7 sm:py-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 3}
                  whileHover={{ scale: 1.03, y: -3 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    {project.icon}
                    <span className="inline-block h-[1px] w-10 bg-gradient-to-r from-slate-300 to-slate-500/80" />
                  </div>
                  <h3 className="sm:text-[3rem] text-[2.4rem] font-bold text-slate-900 leading-none">
                    {project.no}
                  </h3>
                  <p className="sm:text-[1.5rem] text-[1.35rem] text-slate-600 mt-1.5">
                    {project.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: FULL IMAGE WITH TEXT OVERLAY */}
<motion.div
  className="sm:w-1/2 w-full relative flex justify-center mb-10 sm:mb-0"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={8}
>

  {/* Glow Accent */}
  <div className="absolute inset-6 sm:inset-4 rounded-[2.4rem] bg-gradient-to-br from-slate-100 via-slate-50 to-slate-300/70 blur-2xl opacity-80" />

  {/* IMAGE CARD */}
  <div className="
    relative w-full max-w-[48rem]
    rounded-[2.4rem] overflow-hidden
    border border-slate-200/80 
    shadow-[0_28px_80px_rgba(15,23,42,0.35)]
    group
  ">
    
    {/* FULL IMAGE NOW */}
    <img
      src="/booth.webp"
      alt="Premium restaurant AV integration by Spectra AVL"
      className="
        w-full h-[420px] sm:h-[520px]
        object-cover
        transition-transform duration-700
        group-hover:scale-[1.05]
      "
    />

    {/* DARKENING OVERLAY FOR READABILITY */}
    <div className="
      absolute inset-0
      bg-gradient-to-t from-black/60 via-black/20 to-transparent
      opacity-80
    " />

    {/* TEXT OVER THE IMAGE */}
    

    {/* BADGE (Still Visible) */}
    <div className="
      absolute bottom-5 right-5 
      rounded-full bg-white/90 
      border border-slate-200/70 
      px-4 py-2 
      flex items-center gap-2 
      text-xs sm:text-sm 
      font-medium text-slate-700 
      backdrop-blur-sm 
      z-30
    ">
      <span className="
        inline-flex h-2 w-2 rounded-full bg-sky-500/70
        shadow-[0_0_0_4px_rgba(56,189,248,0.25)]
      " />
      Flagship restaurant & lounge integration
    </div>
  </div>
</motion.div>

        </div>
      </MaxContainer>
    </section>
  );
};

export default BuiltOnExcellence;
