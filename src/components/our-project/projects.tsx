import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserRound, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Projects = () => {

    const tabs = [
        {
            title: "Houses of worship",
            content: "",
            value: "house",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Cafés & Restaurants ",
            content: "",
            value: "restaurant",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Night Clubs & Lounges ",
            content: "",
            value: "night",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Large Congregations ",
            content: "",
            value: "Congregations",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Hotels & Resorts",
            content: "",
            value: "event-centres",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Stadiums & Large Arenas ",
            content: "",
            value: "stadiums",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },

        {
            title: "Auditoriums & Concert Halls",
            content: "",
            value: "auditoriums",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Concerts & Live Events",
            content: "",
            value: "concert",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
        {
            title: "Boardrooms & Conference Rooms ",
            content: "",
            value: "boardrooms",
            projects: [
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
                {
                    image: "/dance.png",
                    name: "Lagos , Nigeria",
                    date: "January 27th, 2025",
                    title: "National Stadium Audio Upgrade",
                    link: "#"
                },
            ]
        },
    ]

     return (
    <section className="sm:px-32 px-10 sm:pt-[8.1rem] pt-12">
      <MaxContainer>
        <Tabs defaultValue={tabs[0].value} className="bg-transparent justify-between rounded-0!">
          <TabsList className="justify-between rounded-none pb-0 h-fit bg-transparent overflow-x-scroll border-b border-b-[#000000] w-full">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="text-[1.6rem] data-[state=active]:shadow-none data-[state=active]:border-b-black data-[state=active]:border-b-[1.5px] rounded-none ring-0 mr-[1.2rem] h-15! font-semibold"
              >
                {tab.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab, tabIndex) => (
            <TabsContent key={tabIndex} value={tab.value}>
              <div className="grid sm:grid-cols-3 gap-[2.3rem] sm:gap-0 mt-[2.1rem] sm:mt-16 grid-row-2">
                {tab.projects.map((project, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={i + 1}
                  >
                    <Card {...project} />
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

const Card = ({ image, name, date, title, link }: { image: string; name: string; date: string; title: string; link: string }) => {
  return (
    <div className="max-w-160 shadow-2xl w-full">
      <img src={image} alt="logo" className="w-full" />
      <div className="sm:p-[2.3rem] p-[1.4rem] flex flex-col bg-[#F5F5F5]">
        <div className="flex items-center justify-between">
          <p>
            <UserRound className="inline-block mr-2" />
            <span className="text-[1.5rem]">{name}</span>
          </p>
          <p>
            <Calendar className="inline-block mr-2" />
            <span className="text-[1.5rem]">{date}</span>
          </p>
        </div>
        <h3 className="sm:text-[2rem] text-[1.8rem] font-semibold w-full sm:w-[85%] my-4 sm:my-8">{title}</h3>
        <Button asChild variant={"ghost"} className="ml-auto mt-[1.7rem] w-fit text-[1.6rem]">
          <Link to={link}>View Case Study</Link>
        </Button>
      </div>
    </div>
  );
};

export default Projects;