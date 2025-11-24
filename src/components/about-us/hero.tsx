const Hero = () => {
    return ( 
        <section className="flex bg-[url(/hero.png)] bg-cover bg-no-repeat sm:bg-fixed px-10 sm:px-32 flex-col justify-center text-white sm:h-[min(100vh,960px)] h-screen">
            <h1 className="sm:text-[8.1rem] text-[3.2rem] font-bold">About Us</h1>
            <p className="sm:text-[2rem] text-[1.6rem] mt-4 max-w-200 w-full font-normal">Spectra AVL is Nigeria's premier provider of audiovisual, video, and lighting solutions, combining global partnerships with deep local market expertise.</p>
            <img 
                src="/cedia.png" 
                alt="cedia" 
                className="sm:w-[19.6rem] mt-6 w-[14.1rem] sm:mt-8" 
            />
        </section>
     );
}
 
export default Hero;