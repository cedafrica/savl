import MaxContainer from "./max-container";
import Marquee from "react-fast-marquee";

const Brands = () => {
    const logos = [
        { src: 'gtbank.svg', className: 'sm:w-[18rem] w-40' },
        { src: 'bua.svg', className: 'sm:w-[12rem] w-30' },
        { src: 'mastercard.svg', className: 'sm:w-[15rem] w-40' },
        { src: 'pe.svg', className: 'w-60 sm:w-80' },
        { src: 'vis.svg', className: '' },
        { src: 'boothy.svg', className: 'sm:w-[20rem] w-50' },
        { src: 'uba.svg', className: 'sm:w-[18rem] w-35' }
    ]
    
    return ( 
        <section className="sm:py-20 py-4">
            <MaxContainer>
                <div className="relative">
                    {/* Left fade overlay */}
                    <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    
                    {/* Right fade overlay */}
                    <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    
                    <Marquee speed={50} direction="left" autoFill={true}>
                        {
                            logos.map((logo, index) => {
                                return (
                                    <img
                                        src={`/${logo.src}`}
                                        alt=""
                                        key={index}
                                        className={`ml-[2.1rem] ${logo.className}`}
                                    />
                                )
                            })
                        }
                    </Marquee>
                </div>
            </MaxContainer>
        </section>
     );
}
 
export default Brands;