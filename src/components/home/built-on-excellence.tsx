import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

/* ---------------- ANIMATION ---------------- */

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

/* ---------------- DATA ---------------- */

const partners = [
  {
    name: "Best-in-Class Technologies",
    text:
      "We integrate only premium AV brands trusted globally, ensuring performance, longevity, and uncompromising quality across every deployment.",
    image: "/medal.svg",
  },
  {
    name: "Global Ecosystem, Local Delivery",
    text:
      "Backed by international technology partners, executed with precision by a specialist team deeply grounded in local realities.",
    image: "/global.svg",
  },
  {
    name: "Precision Integration Team",
    text:
      "Highly experienced engineers delivering accurate implementation, disciplined standards, and flawless commissioning on every project.",
    image: "/team.svg",
  },
];

const projects = [
  {
    no: "4,500+",
    text: "Projects Delivered Across Sectors",
    icon: (
      <svg
        className="w-10 h-10 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
      </svg>
    ),
  },
  {
    no: "31+",
    text: "Years of Technical Expertise",
    icon: (
      <svg
        className="w-10 h-10 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    no: "120+",
    text: "Premium Technology Partners",
    icon: (
      <svg
        className="w-10 h-10 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 100 20z" />
      </svg>
    ),
  },
  {
    no: "98%",
    text: "Client Retention & Satisfaction",
    icon: (
      <svg
        className="w-10 h-10 text-slate-400"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
];

/* ---------------- COMPONENT ---------------- */

const BuiltOnExcellence = () => {
  return (
    <>
      {/* =====================================================
          SECTION 1 — BUILT ON EXCELLENCE
      ====================================================== */}
      <section className="px-6 sm:px-10 lg:px-24 pt-[7rem] sm:pt-[10rem] pb-[9rem] bg-white">

        {/* FULL-WIDTH INTRO */}
        <div className="w-full">
          <motion.span
            className="block text-sm tracking-[0.35em] uppercase text-slate-400 mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Our Foundation
          </motion.span>

          <motion.h2
            className="
              text-black font-semibold
              text-[2.8rem] sm:text-[4rem] lg:text-[4.6rem]
              leading-[1.05] tracking-tight
            "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            Built on Excellence.
            <br />
            <span className="text-[#00569e]">
              Designed to Withstand Demand.
            </span>
          </motion.h2>

          <motion.p
            className="
              mt-8 max-w-[100vw]
              text-[1.55rem] sm:text-[1.75rem]
              text-slate-600 leading-relaxed
            "
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            Spectra AVL operates behind some of the most demanding commercial
            environments. Our work supports spaces where failure is not an
            option and performance is expected to remain consistent, day after
            day.
          </motion.p>
        </div>

        {/* PARTNERS */}
        <MaxContainer>
          <div className="mt-20 grid sm:grid-cols-3 gap-14">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index + 3}
              >
                {/* ICON WITH BRAND BLUE BORDER */}
                <div
                  className="
                    mb-6 inline-flex items-center justify-center
                    rounded-2xl
                    border border-[#00569e]/30
                    bg-white p-5
                    shadow-[0_14px_40px_rgba(15,23,42,0.06)]
                    transition-all duration-300
                    group-hover:scale-[1.04]
                    group-hover:border-[#00569e]/70
                    group-hover:shadow-[0_18px_45px_rgba(0,86,158,0.18)]
                  "
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-10 w-auto opacity-90 group-hover:opacity-100 transition"
                  />
                </div>

                <h3 className="text-[1.9rem] font-semibold text-slate-900">
                  {partner.name}
                </h3>

                <p className="mt-2 text-[1.45rem] text-slate-600 leading-relaxed">
                  {partner.text}
                </p>
              </motion.div>
            ))}
          </div>
        </MaxContainer>
      </section>

      {/* =====================================================
          SECTION 2 — PROVEN AT SCALE
      ====================================================== */}
      <section className="px-6 sm:px-10 lg:px-24 py-[9rem] sm:py-[11rem] bg-slate-50">
        <MaxContainer>
          <div className="flex flex-col-reverse sm:flex-row gap-16 lg:gap-24 items-center">

            {/* LEFT */}
            <div className="sm:w-1/2 space-y-10">
              <motion.span
                className="block text-sm tracking-[0.35em] uppercase text-slate-400"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Proven Performance
              </motion.span>

              <motion.h2
                className="
                  text-[2.8rem] sm:text-[3.3rem]
                  font-semibold text-slate-900
                  leading-tight tracking-tight
                "
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                Seamless AV for
                <br />
                <span className="text-[#00569e]">High-Value Commercial Projects. </span>
              </motion.h2>

              <motion.p
                className="
                  text-[1.6rem] text-slate-700
                  leading-relaxed max-w-[40rem]
                "
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
              >
                From concept to commissioning, Spectra AVL delivers complete AV
                ecosystems. Audio, video, lighing, and control, engineered
                for reliability, scalability, and longevity.
              </motion.p>

              <div className="grid sm:grid-cols-2 gap-8 pt-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.text}
                    className="
                      rounded-2xl bg-white
                      border border-[#00569e]
                      px-7 py-6
                      shadow-[0_18px_45px_rgba(15,23,42,0.08)]
                    "
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={index + 3}
                  >
                    <div className="mb-4">{project.icon}</div>
                    <h3 className="text-[3rem] font-bold text-[#00569e]">
                      {project.no}
                    </h3>
                    <p className="mt-1 text-[1.4rem] text-slate-600">
                      {project.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="sm:w-1/2 relative"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={7}
            >
              <div className="
                relative w-full overflow-hidden
                rounded-[2.6rem]
                border border-slate-200/80
                shadow-[0_32px_90px_rgba(15,23,42,0.35)]
              ">
                <div className="w-full pt-[75%] sm:pt-[66.66%] lg:pt-[62.5%]" />
                <img
                  src="/booth.webp"
                  alt="Premium commercial AV integration"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </motion.div>

          </div>
        </MaxContainer>
      </section>
    </>
  );
};

export default BuiltOnExcellence;
