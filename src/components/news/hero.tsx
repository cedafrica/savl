import MaxContainer from "../common/max-container";

const Hero = () => {
    return (
        <section className="flex sm:bg-fixed bg-[url('/banner.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col justify-center text-white sm:h-[min(100vh,960px)] h-screen">
            <MaxContainer className="">
                <h1 className="sm:text-[6.1rem] text-[3.2rem]  font-bold">Insights & Knowledge</h1>
                <p className="sm:text-[1.8rem] text-[1.6rem] max-w-400 sm:w-[50%] font-normal">Industry trends, technical guides, and expert perspectives on audiovisual technology</p>
                <img
                    src="/cedia.png"
                    alt="cedia"
                    className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8"
                />
            </MaxContainer>
        </section>
    );
}

export default Hero;