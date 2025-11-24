const Hero = () => {
    return ( 
        <section className="flex bg-[url('/partner-hero.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col justify-center sm:bg-fixed text-white sm:h-[min(100vh,960px)] h-screen">
            <h1 className="sm:text-[6.1rem] text-[3.2rem]  font-bold">The Power of Partnerships</h1>
            <p className="sm:text-[2rem] text-[1.4rem] max-w-400 w-full font-normal">Our relationships with industry-leading brands ensure you receive the highest quality equipment, expert support, and cutting-edge technology for every project.</p>
            <img 
                src="/cedia.png" 
                alt="cedia" 
                className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8" 
            />
        </section>
     );
}
 
export default Hero;