const Hero = () => {
    return ( 
        <section className="flex bg-[url('/club.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col justify-center text-white sm:h-[min(100vh,960px)] sm:bg-fixed h-screen">
            <h1 className="sm:text-[6.1rem] text-[3.2rem] text-start font-bold">Premium AV Solutions</h1>
            <p className="sm:text-[1.8rem] text-[1.6rem] max-w-250 w-full font-normal">Comprehensive audiovisual services backed by global partnerships and unmatched local expertise</p>
            <img 
                src="/cedia.png" 
                alt="cedia" 
                className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8" 
            />
        </section>
     );
}
 
export default Hero;