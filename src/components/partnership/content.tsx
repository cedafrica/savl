import MaxContainer from "../common/max-container";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger
} from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

const Content = () => {
    const partners = [
        {
            name: "Certified Expertise",
            text: "Our factory-certified team ensures proper installation and optimal performance.",
            image: "/team.svg"
        },
        {
            name: "Priority Support",
            text: "Enjoy direct manufacturer support with fast, reliable parts replacement when needed.",
            image: "/global.svg"
        },
        {
            name: "Latest Technology",
            text: "First access to new products and technologies as they become available in the market.",
            image: "/cpu.svg"
        },
    ];

    const tabs = [
        {
            title: "All",
            value: "all",
            content: [
                "/ma.png",
                "/shure.png",
                "/christie.png",
                "/L-Acoustics.png",
                "/avpro.png",
                "/jbl.png",
                "/infiled.png",
                "/samsung.png",
                "/si.png",
                 "/barco.png",
                 "/crestron.png",
                "/unilumin.png"
            ]
        },
        {
            title: "Video",
            value: "Video",
            content: [
               
                
                "/christie.png",
               
                "/avpro.png",
               
                "/infiled.png",
                "/samsung.png",
                "/si.png",
                 "/barco.png",
              
                "/unilumin.png"
            ]
        },
        {
            title: "Audio",
            value: "Audio",
            content: [
               "/ma.png",
                "/shure.png",
                "/christie.png",
                "/L-Acoustics.png",
                "/avpro.png",
                "/jbl.png"
            ]
        },
        {
            title: "Lighting",
            value: "Lighting",
            content: [
                "/ma.png",
               
                 "/crestron.png"
                
            ]
        },
    ];

    return (
        <section className="sm:px-32 px-10 sm:pb-[18.1rem] pb-20">
            <MaxContainer>
                {/* Partner Cards */}
                <div className="grid sm:grid-cols-3 gap-[2.4rem] sm:gap-0 mt-20 sm:mt-[6.2rem]">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                            viewport={{ once: true }}
                            className="flex flex-col justify-between sm:justify-normal max-w-152 sm:gap-8 gap-9 items-start text-[#000000]"
                        >
                            <img
                                src={partner.image}
                                alt={partner.name}
                                className="sm:size-22 size-18 h-auto"
                            />
                            <div className="text-left">
                                <h3 className="text-[2rem] font-semibold">{partner.name}</h3>
                                <p className="text-[2rem] font-regular">{partner.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trusted by */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                    viewport={{ once: true }}
                    className="flex flex-col mt-[8.4rem]"
                >
                    <h2 className="sm:text-[3.8rem] text-[2.8rem] font-bold text-center">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-[1.8rem] max-w-[300px] mx-auto text-center font-normal">
                        We partner with the world's most respected audiovisual brands
                    </p>
                </motion.div>

                {/* Tabs */}
                <Tabs defaultValue="all">
                    <TabsList className="sm:gap-[4.1rem] gap-[2.1rem] flex rounded-none pb-0! h-fit bg-transparent overflow-scroll mt-[3.1rem] sm:overflow-hidden border-b border-b-[#000000] w-full">
                        {tabs.map((tab, index) => (
                            <TabsTrigger
                                key={index}
                                value={tab.value}
                                className="text-[1.6rem] data-[state=active]:shadow-none data-[state=active]:border-b-black data-[state=active]:border-b-[1.5px] rounded-none ring-0 h-15! font-semibold"
                            >
                                {tab.title}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                    {tabs.map((tab, tabIndex) => (
                        <TabsContent
                            key={tabIndex}
                            value={tab.value}
                            className="rounded"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-7 gap-[2.3rem] sm:gap-0 mt-[2.1rem] sm:mt-16 grid-row-2">
                                {tab.content.map((content, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                                        className="max-w-160 w-full"
                                    >
                                        <img src={content} alt="logo" />
                                    </motion.div>
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </MaxContainer>
        </section>
    );
};

export default Content;
