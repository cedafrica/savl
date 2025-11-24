const Hero = () => {
    return ( 
        <section className="relative flex bg-[url('/contact-hero.png')] bg-no-repeat px-10 sm:px-32 sm:bg-size-[100%_100%] flex-col  justify-center text-white sm:h-[min(100vh,960px)] h-screen bg-cover">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            
            {/* Content with higher z-index */}
            <div className="relative z-10 flex flex-col">
                <h1 className="sm:text-[5.5rem] leading-[120%] max-w-280 text-[3.2rem] font-bold">Let’s Discuss on Your Next Project</h1>
                {/* <p className="sm:text-[2rem] mt-[2.1rem] text-[1.6rem] max-w-400 w-full font-normal">Contact Us</p> */}
                <img 
                    src="/cedia.png" 
                    alt="cedia" 
                    className="sm:w-[19.6rem] w-[14.1rem] sm:mt-18" 
                />
            </div>
        </section>
     );
}
 
export default Hero;