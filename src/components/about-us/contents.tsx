import MaxContainer from "../common/max-container";

const Content = () => {
    const contents = [
        {
            header: "Vision",
            paragraph: "To be Africa's most trusted audiovisual integration partner, setting the standard for technical excellence, innovation, and customer service across stadiums, corporate spaces, and worship centers."
        },
        {
            header: "Mission",
            paragraph: "To deliver world-class audiovisual solutions that transform spaces and create unforgettable experiences. We empower our clients with technology that amplifies their message and engages their audiences at scale."
        }
    ]
    return (
        <section className="">
            <div className=" bg-[#F5F5F5] px-10 sm:px-32 py-[4.1rem] items-center  sm:py-[8.1rem]">
                <MaxContainer className="grid sm:grid-cols-2">
                    {
                        contents.map((content) => (
                            <div
                                key={content.header}
                                className="mt-10 sm:mt-20 bg-[#F5F5F5] sm:p-[3.8rem] flex flex-col px-[2.1rem] py-[3.6rem] gap-4 sm:gap-2"
                            >
                                <h2 className="sm:text-[3rem] text-[2rem] font-bold">{content.header}</h2>
                                <p className="sm:text-[2rem] text-[1.6rem]">{content.paragraph}</p>
                            </div>
                        ))
                    }
                </MaxContainer>
            </div>
            <div className="bg-black bg-no-repeat bg-bottom-right bg-[url(/okparaji.png)] text-white sm:px-32 py-13 sm:py-100 bg-contain sm:bg-fixed px-10">
                <MaxContainer className="">
                    <h2 className="font-bold text-center sm:text-[4.8rem] text-[2rem]">Elevating Audiovisual
                        Excellence</h2>
                    <p className="sm:text-[2rem] text-center text-[1.4rem] mt-6 sm:mt-0">At Spectra AVL, we are redefining the audio, video, and lighting (AVL) landscape in Nigeria. With our strategic partnership with Audio Technology, we bring together world-class innovation and local expertise, delivering premium AVL solutions tailored to Nigeria’s unique need.
                        With Audio Technology bringing onboard a legacy spanning 31+ years, a team of 100+ design and engineering specialists, and over 4,500+ successfully completed projects, we are at the forefront of creating immersive and high-performance AVL experiences.</p>
s
                    {/* <img
                        src="/okparaji.png"
                        alt="colors"
                        className="sm:w-full mt-[3.1rem] sm:mt-0"
                    /> */}
                </MaxContainer>
            </div>
        </section>
    );
}

export default Content;