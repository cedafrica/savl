import MaxContainer from "./max-container";
import Marquee from "react-fast-marquee";

const Brands = () => {
  const logos = [
    { src: "gtbank.svg", className: "sm:w-[10rem] w-[6rem]" },
    { src: "bua.svg", className: "sm:w-[8rem] w-[5rem]" },
    { src: "mastercard.svg", className: "sm:w-[10rem] w-[6rem]" },
    { src: "pe.svg", className: "sm:w-[11rem] w-[7rem]" },
    { src: "vis.svg", className: "sm:w-[8rem] w-[5rem]" },
    { src: "boothy.svg", className: "sm:w-[12rem] w-[8rem]" },
    { src: "uba.svg", className: "sm:w-[10rem] w-[6rem]" },
  ];

  return (
    <section className="py-14 sm:py-24 bg-gradient-to-b from-[#f7f8fa] to-[#ffffff]">
      <MaxContainer>

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[2.4rem] sm:text-[3.2rem] font-semibold text-slate-900 tracking-tight">
            Trusted by Leading Brands
          </h2>
          <p className="text-[1.4rem] sm:text-[1.6rem] mt-3 text-slate-500 max-w-[50rem] mx-auto">
            We power world-class audiovisual experiences trusted by major institutions and enterprises.
          </p>
        </div>

        <div className="relative py-4">

          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-[10%] sm:w-[12%] bg-gradient-to-r from-[#f7f8fa] to-transparent z-10 pointer-events-none" />

          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-[10%] sm:w-[12%] bg-gradient-to-l from-[#ffffff] to-transparent z-10 pointer-events-none" />

          {/* MARQUEE */}
          <Marquee
            speed={40}
            pauseOnHover={true}
            gradient={false}
            className="flex items-center"
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={`/${logo.src}`}
                alt="brand logo"
                className={`
                  mx-12 sm:mx-16
                  object-contain
                  ${logo.className}
                  grayscale opacity-80
                  hover:grayscale-0 hover:opacity-100
                  transition-all duration-300
                `}
              />
            ))}
          </Marquee>

        </div>
      </MaxContainer>
    </section>
  );
};

export default Brands;
