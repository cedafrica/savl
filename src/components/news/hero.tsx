import MaxContainer from "../common/max-container";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const Hero = () => {
    return (
        <section className="relative flex sm:bg-fixed bg-[url('/banner.png')] bg-cover bg-no-repeat px-10 sm:px-32 flex-col justify-center text-white sm:h-[min(100vh,960px)] h-screen">
            
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content above overlay */}
            <MaxContainer className="relative z-10 flex flex-col gap-6">
                <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={1}
                    variants={fadeUp}
                    className="sm:text-[6.1rem] text-[3.2rem] font-bold"
                >
                    Insights & Knowledge
                </motion.h1>

                <motion.p
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={2}
                    variants={fadeUp}
                    className="sm:text-[1.8rem] text-[1.6rem] max-w-400 sm:w-[50%] font-normal"
                >
                    Industry trends, technical guides, and expert perspectives on audiovisual technology
                </motion.p>

                <motion.img
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                    src="/cedia.png"
                    alt="cedia"
                    className="sm:w-[19.6rem] w-[14.1rem] mt-4 sm:mt-8"
                />
            </MaxContainer>
        </section>
    );
};

export default Hero;
