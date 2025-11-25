
import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const BuiltOnExcellence = () => {
  const partners = [
    {
      name: "Top-Tier Brands",
      text: "We work with leading global brands to deliver premium AVL quality.",
      image: "/medal.svg",
    },
    {
      name: "Global Partners",
      text: "Our global network ensures seamless, cutting-edge solutions.",
      image: "/global.svg",
    },
    {
      name: "Expert Local Team",
      text: "Skilled local experts bring world-class results to every project.",
      image: "/team.svg",
    },
  ];

  const projects = [
    {
      no: "500+",
      text: "Projects Completed",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
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
      no: "15+",
      text: "Years of Experience",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={2} />
          <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      no: "100+",
      text: "Global Partners",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
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
      text: "Client Satisfaction",
      icon: (
        <svg
          className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400"
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
    <section className="sm:px-32 px-6 pt-[4rem] sm:pt-[10rem] pb-[8rem] bg-white">
      <MaxContainer>
        {/* HEADLINE */}
        <motion.h2
          className="text-black font-semibold sm:text-[3.6rem] text-[2.4rem] leading-tight max-w-[50rem] sm:max-w-none"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          Built on Excellence, Driven by Partnership
        </motion.h2>

        {/* PARTNERS LIST */}
        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 mt-16 sm:mt-28">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="flex items-start sm:items-center gap-4 sm:gap-6 text-black"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 1}
            >
              <img
                src={partner.image}
                alt={partner.name}
                className="sm:h-24 h-16 object-contain"
              />
              <div>
                <h3 className="sm:text-[2rem] text-[1.6rem] font-semibold leading-snug">
                  {partner.name}
                </h3>
                <p className="sm:text-[1.8rem] text-[1.4rem] opacity-70 leading-snug mt-1">
                  {partner.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* IMAGE + TEXT SECTION */}
        <div className="relative flex flex-col-reverse sm:flex-row items-center sm:gap-20 mt-24 sm:mt-48">
          {/* Left: Text Content */}
          <div className="flex flex-col sm:w-1/2 text-gray-900 space-y-8 sm:space-y-12">
            <motion.h2
  className="mt-12 sm:mt-0 sm:text-[3rem] text-[2.8rem] font-semibold leading-tight text-left sm:text-left tracking-tight"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={1}
>
  Elevating Audiovisual Excellence
</motion.h2>

            <motion.p
              className="sm:text-[1.9rem] text-[1.6rem] text-gray-700 leading-relaxed text-left sm:text-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              Spectra AVL is redefining Nigeria’s AVL scene with advanced audio technology, bringing{" "}
              <span className="font-semibold">31+ years of expertise</span> and{" "}
              <span className="font-semibold">4,500+ successful projects</span> to deliver world-class, performance-driven solutions.
            </motion.p>

            {/* PROJECT STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 mt-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-start p-6 rounded-xl bg-gray-50 hover:shadow-xl transition-all duration-300"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  custom={index + 3}
                >
                  <div className="flex items-center gap-4">{project.icon}</div>
                  <h3 className="sm:text-[3.5rem] text-[2.6rem] font-bold text-gray-900 leading-none mt-3">
                    {project.no.toLocaleString()}
                  </h3>
                  <p className="sm:text-[1.6rem] text-[1.4rem] text-gray-600 mt-1">
                    {project.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

       {/* Right: Image */}
<motion.div
  className="sm:w-1/2 w-full relative group flex justify-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  custom={8}
>
  <img
    src="/restaurant3.webp"
    alt="Audiovisual Excellence"
    loading="lazy"
    className="
      w-full max-w-[40rem] sm:max-w-[50rem]
      shadow-2xl rounded-xl
      object-cover
      transition-transform duration-500
      group-hover:scale-105
    "
  />
</motion.div>

        </div>
      </MaxContainer>
    </section>
  );
};

export default BuiltOnExcellence;
