import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

/* ---------------- MOTION ---------------- */

const fade = (d = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: d,
      duration: 0.7,
    },
  },
});

/* ---------------- COMPONENT ---------------- */

const NewsSection = () => {
  const News = [
    {
      date: "January 27, 2025",
      title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
      description:
        "We are proud to announce that Infiled has entrusted us as their official partner for LED installation.",
      link: "/news/infiled-led-partnership",
    },
    {
      date: "January 27, 2025",
      title: "Spectra AVL X Audio Technology",
      description:
        "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
      link: "/news/audio-technology-partnership",
    },
    {
      date: "January 27, 2025",
      title: "Booth Night Club, South Africa Trust Spectra for Immersive Sound Experience",
      description:
        "The new Booth Night Club & Kilala Restaurant & Lounge in Pretoria will set the new standard to Sound Experience in the SA entertainment industry.",
      link: "/news/booth-nightclub-south-africa",
    },
  ];

  return (
    <section className="py-28 px-6 sm:py-40 bg-[#F5F5F5]">
      <MaxContainer>

        {/* HEADER */}
        <motion.div
          variants={fade(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-[3rem] sm:text-[4rem] font-semibold text-slate-900 tracking-tight">
            Latest Insights
          </h2>
          <p className="text-[1.55rem] sm:text-[1.8rem] text-slate-600 max-w-[55rem] mx-auto mt-4 leading-relaxed">
            A curated collection of engineering stories, thought pieces, and
            updates from Spectra AVL.
          </p>
        </motion.div>

        {/* TWO COLUMN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:gap-32 items-start">

          {/* LEFT — TIMELINE */}
          <div className="relative pl-10 sm:pl-16">

            {/* VERTICAL LINE — BRAND BLUE */}
            <div className="absolute top-0 left-3 sm:left-6 h-full w-[2px] bg-[#00569e]/40" />

            <div className="flex flex-col gap-24">
              {News.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fade(0.15 + index * 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* TIMELINE DOT */}
                  <div className="
                    absolute left-[-1rem] sm:left-[-1.4rem] top-[0.5rem]
                    w-4 h-4 rounded-full
                    bg-[#00569e]
                    shadow-[0_0_0_6px_rgba(0,86,158,0.12)]
                  " />

                  <div className="space-y-3 max-w-[700px]">

                    {/* DATE — BRAND BLUE */}
                    <p className="
                      text-[1.4rem] flex items-center gap-2
                      text-[#00569e]
                      uppercase tracking-wide
                    ">
                      <Calendar size={18} className="opacity-80" />
                      {item.date}
                    </p>

                    {/* TITLE */}
                    <h3 className="text-[2.3rem] sm:text-[2.8rem] font-semibold leading-snug text-slate-900">
                      {item.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-[1.55rem] text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    {/* READ MORE — BRAND BLUE */}
                    <Link
                      to={item.link}
                      className="
                        inline-flex items-center gap-2 pt-1
                        text-[1.55rem] font-medium
                        text-[#00569e]
                        transition-all duration-300
                        hover:gap-3
                        hover:underline
                      "
                    >
                      Read More →
                    </Link>

                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky top-36 hidden sm:block"
          >
            <div className="overflow-hidden rounded-2xl shadow-[0_12px_45px_rgba(0,0,0,0.12)]">
              <img
                src="/restaurant2.webp"
                alt="Editorial Visual"
                className="
                  w-full h-[580px] object-cover
                  transition-all duration-[1400ms]
                  hover:scale-[1.04]
                "
              />
            </div>
          </motion.div>

        </div>

      </MaxContainer>
    </section>
  );
};

export default NewsSection;
