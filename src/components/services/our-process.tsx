import MaxContainer from "../common/max-container";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

const fadeUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
  }),
};

const OurProcess = () => {
  const cards = [
    {
      title: "Consult",
      text: "We listen to your needs, assess your space, and understand your goals to create the perfect solution.",
      classname: "",
      link: "",
    },
    {
      title: "Design",
      text: "Our engineers develop detailed system designs with 3D modeling, equipment specifications, and installation plans.",
      classname: "sm:col-span-2 bg-[url(/card-2.png)] bg-contain sm:bg-cover",
      link: "",
    },
    {
      title: "Install",
      text: "Expert installation teams deploy your system with precision, meeting deadlines and maintaining the highest standards.",
      classname: "sm:col-span-2 bg-[url(/card-3.png)] bg-contain sm:bg-cover",
      link: "",
    },
    {
      title: "Maintain",
      text: "We listen to your needs, assess your space, and understand your goals to create the perfect solution.",
      classname: "",
      link: "",
    },
  ];

  return (
    <section className="bg-black text-white sm:px-32 px-10 py-[5.4rem] sm:py-[8.2rem]">
      <h2 className="text-center text-[2.6rem] sm:text-[3.8rem] font-bold">
        Our&nbsp;Process
      </h2>
      <p className="text-center sm:text-[1.8rem] text-[1.6rem] font-normal max-w-[50.1rem] mx-auto">
        From initial consultation to ongoing support, we're with you every step of the way
      </p>

      <MaxContainer className="grid sm:grid-cols-3 grid-cols-1 gap-[2.3rem] mt-[6.1rem] sm:mt-16 grid-row-2">
        {cards.map((card, index) => {
          const isEven = index === 1 || index === 2;

          return (
            <motion.div
              key={index}
              className={cn(
                card.classname,
                "flex flex-col data-[isEven=false]:bg-white sm:data-[isEven=false]:px-[2.6rem] data-[isEven=false]:px-8 data-[isEven=false]:py-[4.8rem] data-[isEven=true]:pl-8 sm:data-[isEven=true]:pl-[4.3rem] h-[32.1rem] justify-center sm:h-auto data-[isEven=true]:pb-[4.3rem] sm:data-[isEven=true]:pr-[9.1rem] rounded-2xl"
              )}
              data-isEven={isEven ? "true" : "false"}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={index + 1}
            >
              <div
                data-isEven={isEven ? "true" : "false"}
                className="flex flex-col sm:flex-row justify-between sm:items-baseline-last sm:data-[isEven=true]:mt-auto"
              >
                <div
                  className="flex flex-col sm:gap-[5.1rem]"
                  data-isEven={isEven ? "true" : "false"}
                >
                  <div>
                    <h2
                      className="sm:text-[3rem] text-[2.4rem] data-[isEven=false]:text-black"
                      data-isEven={isEven ? "true" : "false"}
                    >
                      {card.title}
                    </h2>
                    <p
                      className="data-[isEven=false]:text-black data-[isEven=false]:max-w-108 data-[isEven=true]:max-w-160 font-normal sm:text-[2rem] text-[1.6rem]"
                      data-isEven={isEven ? "true" : "false"}
                    >
                      {card.text}
                    </p>
                  </div>
                  {!isEven && (
                    <Button className="mt-8 w-fit bg-transparent px-7 sm:py-8 py-6 border border-black text-[1.2rem] rounded-4xl sm:text-[1.4rem] text-black">
                      Learn More
                    </Button>
                  )}
                </div>
                {isEven && (
                  <Button className="mt-8 w-fit bg-transparent px-7 sm:py-8 border py-6 text-white text-[1.2rem] rounded-4xl sm:text-[1.4rem]">
                    Learn More
                  </Button>
                )}
              </div>
            </motion.div>
          );
        })}
      </MaxContainer>
    </section>
  );
};

export default OurProcess;
