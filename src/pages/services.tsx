import Hero from "@/components/services/hero";
import Solutions from "@/components/common/services";
import Brands from "@/components/common/brands";
import OurProcess from "@/components/services/our-process";

const Services = () => {
    return (
        <>
            <Hero />
            <div className="px-10 pt-20 pb-20 sm:pb-0">
                <h2 className="text-center text-[2.2rem] sm:text-[3.6rem] font-bold">Where Every Space Speaks Through Sound, Light &
                    Vision.</h2>
                <p className="text-center mt-2 sm:mb-30 text-[1.4rem] sm:text-[1.8rem] max-w-300 mx-auto">Bespoke AV integration that transforms commercial
                    spaces into immersive, unforgettable experiences.</p>
                <Solutions />
            </div>
            <OurProcess />
            <Brands />
        </>
    );
}

export default Services;