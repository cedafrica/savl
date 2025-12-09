import MaxContainer from "../common/max-container";
import CustomButton from "../common/custom-button";

interface CallToActionProps {
  headline: string;
  subheadline: string;
  buttonText: string;
  buttonLink: string;
}

const CallToAction = ({
  headline,
  subheadline,
  buttonText,
  buttonLink,
}: CallToActionProps) => {
  return (
    <section className="bg-black text-white py-20 sm:py-32 px-6 sm:px-16 lg:px-32">
      <MaxContainer>
        <div className="w-full text-center">
          {/* Headline */}
          <h2 className="w-full text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold mb-6 leading-tight">
            {headline}
          </h2>

          {/* Subheadline */}
          <p className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] mb-10 text-white/80">
            {subheadline}
          </p>

          {/* Button */}
          <CustomButton
            link={buttonLink}
            className="
              px-5 py-5 sm:py-6 lg:py-7
              text-sm sm:text-base lg:text-base
              font-semibold
              bg-transparent
              text-white
              rounded-full
              border border-white/30
              transition-all duration-300
              hover:scale-105
              hover:shadow-[0_14px_40px_rgba(255,165,0,0.6)]
              hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400
              hover:text-black
            "
          >
            {buttonText}
          </CustomButton>
        </div>
      </MaxContainer>
    </section>
  );
};

export default CallToAction;
