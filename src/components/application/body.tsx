import MaxContainer from "../common/max-container";
import type { BodyContent } from "@/types"; // or wherever you store types
import { useEffect, useRef } from "react";

interface BodyProps {
  contents: BodyContent[];
}

const Body = ({ contents }: BodyProps) => {
  const sectionRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((el) => {
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
            observer.unobserve(el);
          }
        },
        { threshold: 0.2 }
      );
      observer.observe(el);
    });
  }, []);

  return (
    <section className="relative sm:px-32 sm:py-28 py-20 px-10 overflow-hidden bg-white">
      <MaxContainer className="flex flex-col gap-32 max-w-[1400px] mx-auto">
        {contents.map((content, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            className={`flex flex-col sm:flex-row items-center gap-12 opacity-0 transform translate-y-8 ${
              index % 2 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className="relative w-full sm:w-[45%] overflow-hidden shadow-[0_6px_16px_rgba(0,0,0,0.18)] group">
              <img
                src={content.image}
                alt=""
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out hover:scale-105"
              />
            </div>

            {/* TEXT */}
            <div className="sm:w-[55%] flex flex-col gap-6">
              {/* Title */}
              <h2 className="text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] font-medium leading-snug text-black">
                {content.title}
              </h2>

              {/* Feature items */}
              <div className="flex flex-col gap-4">
                {content.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-4 opacity-0 transform translate-y-6"
                    style={{
                      transition: `opacity 0.8s ease ${
                        itemIndex * 150
                      }ms, transform 0.8s ease ${itemIndex * 150}ms`,
                    }}
                    ref={(el) => {
                      if (el) {
                        const observer = new IntersectionObserver(
                          ([entry]) => {
                            if (entry.isIntersecting) {
                              el.style.opacity = "1";
                              el.style.transform = "translateY(0)";
                              observer.unobserve(el);
                            }
                          },
                          { threshold: 0.2 }
                        );
                        observer.observe(el);
                      }
                    }}
                  >
                    {/* Gradient Arrow */}
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="url(#arrowGradient)"
                      >
                        <defs>
                          <linearGradient
                            id="arrowGradient"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="black" />
                            <stop offset="100%" stopColor="silver" />
                          </linearGradient>
                        </defs>
                        <path d="M5 12h14m0 0l-4-4m4 4l-4 4" stroke="url(#arrowGradient)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>

                    <p className="text-[1.5rem] sm:text-[1.6rem] leading-snug text-black">
                      {item.bold && <span className="font-semibold">{item.bold}: </span>}
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </MaxContainer>
    </section>
  );
};

export default Body;
