import MaxContainer from "../common/max-container";
import { UserRound, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const ReadTheLatestNews = () => {
  const News = [
    {
      image: "/restaurant2.webp",
      name: "Stephen",
      date: "January 27th, 2025",
      description:
        "We are proud to announce that Infiled has entrusted us as their official partner for LED installation.",
      title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
      link: "#",
    },
    {
      image: "/Church.webp",
      name: "Stephen",
      date: "January 27th, 2025",
      title: "Spectra AVL X Audio Technology",
      description:
        "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
      link: "#",
    },
    {
      image: "/restaurant.webp",
      name: "Stephen",
      date: "January 27th, 2025",
      title: "Spectra AVL X Audio Technology",
      description:
        "Spectra AVL is proud to announce a groundbreaking Audio Engineering Partnership aimed at revolutionizing sound experiences across various industries.",
      link: "#",
    },
  ];

  return (
    <section className="sm:pt-28 sm:pb-32 pb-20 px-10 sm:px-32 bg-white">
      {/* Heading */}
      <motion.div
        className="text-center space-y-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        <h2 className="text-[2.6rem] sm:text-[4rem] font-semibold tracking-tight text-black">
          Read The Latest News
        </h2>
        <p className="text-[1.8rem] sm:text-[2rem] text-black/70 max-w-[50rem] mx-auto">
          Stay informed with insights, trends, and top stories shaping the industry
          today.
        </p>
      </motion.div>

      {/* News Cards */}
      <MaxContainer className="grid sm:grid-cols-3 gap-12 mt-20">
        {News.map((item, index) => (
          <motion.div
            key={index}
            className="group max-w-160 w-full rounded-2xl overflow-hidden bg-white shadow-[0px_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0px_20px_50px_rgba(0,0,0,0.10)] transition-all duration-500"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index + 1}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt="news"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="sm:p-10 p-6 bg-[#FAFAFA] space-y-6">
              <div className="flex items-center justify-between text-black/60 text-[1.5rem]">
                <p className="flex items-center gap-2">
                  <UserRound size={18} />
                  {item.name}
                </p>

                <p className="flex items-center gap-2">
                  <Calendar size={18} />
                  {item.date}
                </p>
              </div>

              <h3 className="text-[1.9rem] sm:text-[2.2rem] font-semibold leading-tight text-black group-hover:text-neutral-800 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-[1.6rem] sm:text-[1.8rem] text-black/70 leading-relaxed">
                {item.description}
              </p>

              <Button
                asChild
                variant="ghost"
                className="ml-auto mt-4 w-fit text-[1.6rem] font-medium text-black hover:text-neutral-900 transition-colors"
              >
                <Link to={item.link}>Read More →</Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </MaxContainer>
    </section>
  );
};

export default ReadTheLatestNews;
