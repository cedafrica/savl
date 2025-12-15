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
          <h2 className="w-full text-[2.2rem] sm:text-[3rem] lg:text-[3.5rem] font-bold mb-6 leading-tight">
            {headline}
          </h2>

          <p className="text-[1.4rem] sm:text-[1.8rem] lg:text-[2rem] mb-10 text-white/80">
            {subheadline}
          </p>

          <CustomButton
            link={buttonLink}
            className="
              px-10 sm:px-12 lg:px-14
              py-6 sm:py-7 lg:py-8
              text-base sm:text-lg
              font-semibold tracking-wide
              bg-transparent
              text-white
              rounded-full
              border-2 border-white/40
              transition-all duration-300
              hover:scale-105
              hover:bg-gradient-to-r hover:from-silver-500 hover:to-black-400
              hover:text-gray-200
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
