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
        <section className={`relative flex ${backgroundImage} bg-cover bg-no-repeat px-10 sm:px-32 flex-col sm:bg-fixed justify-center text-white sm:h-[min(100vh,960px)] h-screen`}>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            
            {/* Content */}
            <div className="relative z-10">
                <h1 className="sm:text-[4.1rem] max-w-300 text-[3.2rem] font-bold">{headlineText}</h1>
                <p className="sm:text-[2rem] text-[1.6rem] max-w-200 w-full font-normal">{subHeadlineText}</p>
                  <CustomButton link={link}>{buttonLabel}</CustomButton>
                <img
                    src="/cedia.png"
                    alt="cedia"
                    className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8"
                />
                
            </div>
        </section>
    );
}

export default Hero;