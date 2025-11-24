import { Calendar } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
};

const News = () => {
    const news = [
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "/news/123"
        },
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "/news/123"
        },
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "/news/123"
        },
        {
            name: "Audio",
            image: "/dance.png",
            date: "January 27th, 2025",
            time: "8",
            title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
            decription: "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
            link: "/news/123"
        },
    ];

    return (
        <div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
            >
                <div className="flex flex-col sm:flex-row">
                    <div className="relative w-full h-80 mt-11 sm:mt-0 sm:w-[32.1rem] sm:h-[30.1rem] shrink-0">
                        <img
                            src="/dance.png"
                            alt="dance"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <span className="text-[1.4rem] absolute left-4 top-4 p-2 bg-[#FFFFFF] rounded-[.4rem]">
                            Featured
                        </span>
                    </div>

                    <div className="flex-1 shadow sm:p-8 p-4 bg-[#F5F5F5]">
                        <div className="flex items-center justify-between">
                            <span className="p-2 sm:text-[1.4rem] text-[1.2rem] text-white shrink-0 bg-[#000000] rounded-[.4rem]">
                                Industry Insight
                            </span>

                            <div className="flex items-center gap-2">
                                <Calendar className="inline size-[1.6rem]" />
                                <span className="sm:text-[1.5rem] text-[1.2rem]">March 15, 2025</span>
                                <span className="sm:text-[1.5rem] text-[1.2rem]">8 mins read</span>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <h3 className="mt-[1.8rem] sm:text-[2rem] w-full text-[1.8rem] font-bold max-w-[35.1rem]">
                                The Future of Stadium AV: Trends Reshaping Live Entertainment
                            </h3>

                            <p className="text-[1.4rem] mt-4 w-full sm:max-w-[25.2rem]">
                                Explore how emerging technologies in audio, video, and lighting are transforming the stadium experience for millions of fans worldwide.
                            </p>

                            <Button
                                className="p-0 text-[1.4rem] w-fit underline font-normal mt-12"
                                variant={"ghost"}
                            >
                                Read Full Article
                            </Button>
                        </div>
                    </div>
                </div>
            </motion.div>

            <h2 className="sm:text-[3rem] text-[2.8rem] my-8 sm:mt-20 font-semibold">Latest Articles</h2>

            <motion.div
                className="grid sm:gap-8 gap-12 sm:mt-20 sm:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {news.map((item, index) => (
                    <Card key={index} {...item} index={index} />
                ))}
            </motion.div>
        </div>
    );
};

const Card = ({ image, name, date, time, title, decription, link, index }: {
    image: string;
    name: string;
    date: string;
    time: string;
    title: string;
    decription: string;
    link: string;
    index?: number;
}) => {
    return (
        <motion.div
            className="w-full shadow-xl"
            custom={index}
            variants={{
                hidden: { opacity: 0, y: 40 },
                visible: (i = 1) => ({
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
                }),
            }}
        >
            <img
                src={image}
                alt=""
                className="w-full h-auto"
            />
            <div className="bg-[#F5F5F5] flex flex-col py-[1.5rem] sm:px-8 px-4">
                <div className="flex items-center justify-between">
                    <span className="p-2 text-[1.2rem] rounded-[.3rem] bg-black text-white">{name}</span>
                    <div className="flex gap-2 items-center">
                        <Calendar className="size-[1.4rem]" />
                        <span className="text-[1.2rem]">{date}</span>
                        <span className="text-[1.2rem]">{time} mins read</span>
                    </div>
                </div>
                <h2 className="text-[2rem] mt-2 font-bold">{title}</h2>
                <p className="text-[1.4rem] mt-2">{decription}</p>
                <Button asChild className="ml-auto p-0 text-[1.4rem] sm:mt-[1.5rem]" variant={"ghost"}>
                    <Link to={link}>Read More</Link>
                </Button>
            </div>
        </motion.div>
    )
};

export default News;
