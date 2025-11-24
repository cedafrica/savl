import Services from "../common/services";

const PremiumSolution = () => {
   
    return (
        <section className="bg-white sm:pt-[8.1rem] pb-[4.1rem] sm:pb-0 px-10 sm:px-0 pt-[4rem]">
            <h2 className="text-center font-semibold sm:text-[4rem] text-[3rem]">Premium Solutions</h2>
            <p className="text-center mx-auto sm:text-[2rem] text-[1.8rem] max-w-[55.8rem]">Comprehensive audiovisual services backed by global partnerships and local expertise</p>

            <div className="sm:mt-[6.3rem] mt-4">
                <Services />
            </div>
        </section>
    );
}

export default PremiumSolution;