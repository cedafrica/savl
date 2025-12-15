import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface BodyItem {
  bold?: string;
  text?: string;
}

interface BodySection {
  title: string;
  image: string;
  items: BodyItem[];
}

interface BodyProps {
  contents?: BodySection[];
}

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const fadeUpDelayed = {
  hidden: { opacity: 0, y: 55 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 1.08 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4 } },
};

/* ✅ CREATE MOTION LINK */
const MotionLink = motion(Link);

const Body: React.FC<BodyProps> = ({ contents = [] }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#f7f7f7]">
      <div className="max-w-[95rem] mx-auto px-4 sm:px-6 space-y-40 sm:space-y-48">
        {contents.map((section, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* IMAGE */}
            <motion.div
              variants={zoomIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                w-full 
                h-[340px] sm:h-[420px] lg:h-[620px]
                rounded-[28px] sm:rounded-[36px]
                overflow-hidden 
                shadow-[0_20px_60px_rgba(0,0,0,0.15)]
              "
            >
              <img
                src={section.image}
                alt={section.title}
                className="
                  w-full h-full object-cover 
                  transition-all duration-[1500ms]
                  hover:scale-[1.05]
                "
              />
            </motion.div>

            {/* TEXT CARD */}
            <motion.div
              variants={fadeUpDelayed}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`
                w-full sm:w-[85%] lg:w-[65%]
                mt-10
                lg:absolute lg:left-1/2 lg:-translate-x-1/2
                ${index % 2 === 0 ? "lg:-bottom-20" : "lg:-bottom-24"}
                bg-white/70 backdrop-blur-[16px]
                rounded-[24px] sm:rounded-[32px]
                shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                p-6 sm:p-10 lg:p-12
                space-y-8 sm:space-y-10
              `}
            >
              {/* TITLE */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="
                  text-[2.2rem] sm:text-[2.8rem] lg:text-[3.6rem]
                  font-semibold text-slate-900
                  leading-[1.2] tracking-tight
                "
              >
                {section.title}
              </motion.h2>

              {/* PARAGRAPHS */}
              <div className="space-y-5 sm:space-y-6">
                {section.items.map((itm, i) => (
                  <motion.p
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    className="
                      text-[1.35rem] sm:text-[1.55rem] lg:text-[1.7rem]
                      text-slate-700 leading-[1.65]
                    "
                  >
                    {itm.bold && (
                      <span className="font-semibold text-slate-900">
                        {itm.bold}:{" "}
                      </span>
                    )}
                    {itm.text}
                  </motion.p>
                ))}
              </div>

              {/* ✅ CTA BUTTON (WORKING + ANIMATED) */}
              <MotionLink
                to="/contact"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1.2 }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  inline-flex items-center justify-center
                  px-6 sm:px-7 py-3 sm:py-3.5
                  rounded-full
                  text-[1.35rem] sm:text-[1.45rem]
                  font-medium
                  bg-slate-900 text-white
                  hover:bg-slate-800
                  transition-all duration-300
                  shadow-[0_6px_20px_rgba(0,0,0,0.15)]
                "
              >
                Discuss This Project →
              </MotionLink>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Body;
