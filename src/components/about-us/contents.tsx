import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const Content = () => {
  const contents = [
    {
      header: "Vision",
      paragraph:
        "To be Africa's most trusted audiovisual integration partner, setting the standard for technical excellence, innovation, and customer service across stadiums, corporate spaces, and worship centers.",
    },
    {
      header: "Mission",
      paragraph:
        "To deliver world-class audiovisual solutions that transform spaces and create unforgettable experiences. We empower our clients with technology that amplifies their message and engages their audiences at scale.",
    },
  ];

  return (
    <section>
      {/* Vision & Mission */}
      <div className="bg-[#F5F5F5] px-10 sm:px-32 py-[4.1rem] sm:py-[8.1rem]">
        <MaxContainer className="grid sm:grid-cols-2 gap-8">
          {contents.map((content, index) => (
            <motion.div
              key={content.header}
              className="mt-10 sm:mt-20 bg-[#F5F5F5] sm:p-[3.8rem] flex flex-col px-[2.1rem] py-[3.6rem] gap-4 sm:gap-2 rounded-lg shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <h2 className="sm:text-[3rem] text-[2rem] font-bold">{content.header}</h2>
              <p className="sm:text-[2rem] text-[1.6rem]">{content.paragraph}</p>
            </motion.div>
          ))}
        </MaxContainer>
      </div>

      {/* Elevating Audiovisual Excellence */}
      <motion.div
  className="relative w-full h-screen sm:h-screen bg-[url(/okparaji.png)] bg-cover bg-center bg-no-repeat flex items-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  custom={contents.length + 1}
>
  {/* Overlay for subtle elegance */}
  <div className="absolute inset-0 bg-black/50"></div>

  <MaxContainer className="relative z-10 text-center text-white px-10 sm:px-32">
    <h2 className="font-bold sm:text-[4.8rem] text-[2.5rem] text-gray-300 leading-tight">
      Elevating Audiovisual Excellence
    </h2>
    <p className="sm:text-[1.8rem] text-[1.5rem] text-gray-300 mt-6 sm:mt-4 max-full mx-auto leading-relaxed">
      At Spectra AVL, we are redefining the audio, video, and lighting (AVL) landscape in Nigeria. With our strategic partnership with Audio Technology, we bring together world-class innovation and local expertise, delivering premium AVL solutions tailored to Nigeria’s unique needs. With Audio Technology bringing onboard a legacy spanning 31+ years, a team of 100+ design and engineering specialists, and over 4,500+ successfully completed projects, we are at the forefront of creating immersive and high-performance AVL experiences.
    </p>
  </MaxContainer>
</motion.div>

    </section>
  );
};

export default Content;
