import { motion } from "framer-motion";

const Hero = () => {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return ( 
        <section className="relative flex bg-[url('/contact-hero.png')] bg-no-repeat px-10 sm:px-32 sm:bg-size-[100%_100%] flex-col justify-center text-white sm:h-[min(100vh,960px)] h-screen bg-cover">
            
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>
            
            {/* Content with higher z-index */}
            <motion.div 
                className="relative z-10 flex flex-col"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.3 }
                    }
                }}
            >
                <motion.h1
                    className="sm:text-[5.5rem] leading-[120%] max-w-280 text-[3.2rem] font-bold"
                    variants={fadeUp}
                >
                    Let’s Discuss Your Next Project
                </motion.h1>

                <motion.img 
                    src="/cedia.png" 
                    alt="cedia" 
                    className="sm:w-[19.6rem] w-[14.1rem] sm:mt-18" 
                    variants={fadeUp}
                />
            </motion.div>
        </section>
     );
}

export default Hero;
