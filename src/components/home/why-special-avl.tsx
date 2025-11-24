import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const WhySpecialAVL = () => {
    const advantages = [
        {
            title: "Global Backing",
            content: "As an extension of Audio Technology, we integrate international excellence with local execution.",
        },
        {
            title: "Trusted by Industry Leaders",
            content: "Companies such as Harman, Infiled, Christie, trust us to deliver their AV projects"
        },
        {
            title: "Future-Proof Technology",
            content: "We design scalable, high-performance AV solutions that evolve with your business needs."
        }
    ]
    return (
        <section className="bg-black px-10 sm:px-32 sm:pb-[11.1rem] pt-[3.1rem] sm:pt-[6.3rem] text-white">
            <h2 className="text-center text-[2.8rem] sm:text-[4.3rem] font-semibold">Why Spectra AVL</h2>
            <p className="text-center text-[1.6rem] sm:text-[2rem] sm:max-w-240 mx-auto">We are the bridge between innovation and execution, bringing world-class audiovisual solutions to Nigeria.</p>

            <MaxContainer
                className="sm:mt-36 flex-col-reverse mt-[3rem] sm:flex-row flex justify-center items-center gap-32"
            >
                <img
                    className="w-full max-w-[50.8rem]"
                    src="/lights.png"
                    alt=""
                />

                <div className="flex flex-col gap-8">
                    {
                        advantages.map((item, index) => {
                            return (
                                <div className="flex gap-12 items-start justify-between" key={index}>
                                    <div className="flex gap-[1.8rem] flex-col items-center justify-center">
                                        <div
                                            className="size-16 flex  items-center  justify-center border text-[1.8rem] rounded-full"
                                           
                                        >
                                            {index + 1}
                                        </div>
                                        {
                                            index < advantages.length - 1 && (
                                                <div
                                                    className="w-[.5px] bg-gray-200 h-40"
                                                />
                                            )
                                        }
                                    </div>
                                    <div className="">
                                        <h3 className="text-[2rem] mb-2 font-semibold">{item.title}</h3>
                                        <p className="font-regular max-w-[33.1rem] text-[1.6rem]">{item.content}</p>
                                    </div>
                                </div>
                            )
                        })
                    }

                    <Button className="px-8 w-fit sm:mt-10 bg-transparent border border-white rounded-4xl text-[1.2rem] text-white py-6" asChild>
                        <Link to={""}>Learn More</Link>
                    </Button>
                </div>

            </MaxContainer>
        </section>
    );
}

export default WhySpecialAVL;