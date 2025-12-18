import { motion } from "framer-motion";
import CustomButton from "../common/custom-button";

interface HeroProps {
  id?: string;
  backgroundImage: string;
  headlineText: string;
  subHeadlineText: string;
  link: string;
  buttonLabel: string;
}

const Hero = ({
  backgroundImage,
  headlineText,
  subHeadlineText,
  link,
  buttonLabel,
}: HeroProps) => {
  return (
    <section
      className="
        relative
        min-h-screen
        sm:min-h-[min(100vh,980px)]
        overflow-hidden
      "
    >
      {/* ================= CINEMATIC BACKGROUND ================= */}
      <motion.div
        className={`absolute inset-0 ${backgroundImage} bg-cover bg-center`}
        initial={{ scale: 1.08, x: 0, y: 0 }}
        animate={{ scale: 1.18, x: -20, y: -10 }}
        transition={{
          duration: 28,
          ease: "easeOut",
        }}
      />

      {/* ================= LUXURY OVERLAYS ================= */}
      <div className="absolute inset-0 z-0">
        {/* Depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/80" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />
      </div>

      {/* ================= CONTENT ================= */}
      <div
        className="
          relative
          z-10
          flex
          items-center
          min-h-screen
          sm:min-h-[min(100vh,980px)]
          px-10
          sm:px-32
        "
      >
        <div className="max-w-[110rem] pt-32 sm:pt-40">
          {/* BRAND EYEBROW */}
          <p className="text-white/70 uppercase tracking-[0.32em] text-[1.25rem] sm:text-[1.4rem] mb-10">
            Spectra AVL
          </p>

          {/* HEADLINE */}
          <h1
            className="
              text-white
              text-[3.6rem]
              sm:text-[5.2rem]
              lg:text-[6.8rem]
              font-semibold
              leading-[1.06]
              tracking-tight
              max-w-[95rem]
            "
          >
            {headlineText}
          </h1>

          {/* SUBHEADLINE */}
          <p
            className="
              mt-12
              text-white/80
              text-[1.7rem]
              sm:text-[2.1rem]
              leading-[1.75]
              max-w-[62rem]
            "
          >
            {subHeadlineText}
          </p>

          {/* CTA */}
          <div className="mt-16">
            <CustomButton link={link}>
              {buttonLabel}
            </CustomButton>
          </div>

          {/* TRUST BADGE */}
          <img
            src="/cedia.png"
            alt="CEDIA"
            className="mt-20 sm:mt-28 w-[15rem] sm:w-[21rem] opacity-90"
          />
        </div>
      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-black/85 to-transparent z-0" />
    </section>
  );
};

export default Hero;
