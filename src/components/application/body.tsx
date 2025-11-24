import MaxContainer from "../common/max-container";
import type { BodyContent } from "@/types"; // or wherever you store types

interface BodyProps {
    contents: BodyContent[];
}

const Body = ({ contents }: BodyProps) => {
    return (
        <section className="relative sm:px-32 sm:py-28 py-20 px-10 overflow-hidden bg-white">
  <MaxContainer className="flex flex-col gap-32 max-w-[1400px] mx-auto">

    {contents.map((content, index) => (
      <div
        key={index}
        className={`flex flex-col sm:flex-row items-center gap-12 ${
          index % 2 ? "sm:flex-row-reverse" : ""
        }`}
      >
        {/* IMAGE */}
        <div
          className="relative w-full sm:w-[45%] overflow-hidden  shadow-[0_6px_16px_rgba(0,0,0,0.18)] group"
          style={{ opacity: 0, transform: "translateY(30px)" }}
          ref={(el) => {
            if (el) {
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
            }
          }}
        >
          <img
            src={content.image}
            alt=""
            className="w-full h-auto shadow-[0_6px_16px_rgba(0,0,0,0.18)]
 object-cover  transform transition-transform duration-700 ease-out hover:scale-105"
          />
        </div>

        {/* TEXT */}
        <div
          className="sm:w-[55%] flex flex-col gap-6"
          style={{ opacity: 0, transform: "translateY(30px)" }}
          ref={(el) => {
            if (el) {
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
            }
          }}
        >
          {/* Title */}
          <h2 className="text-[1.8rem] sm:text-[2rem] lg:text-[2.2rem] font-medium leading-snug text-black">
            {content.title}
          </h2>

          {/* Creative feature items */}
          <div className="flex flex-col gap-4">
            {content.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex items-start gap-4 opacity-0 transform translate-y-6"
                style={{
                  transition: `opacity 0.8s ease ${(itemIndex + 1) * 150}ms, transform 0.8s ease ${(itemIndex + 1) * 150}ms`,
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
                {/* Creative arrow */}
                <div className="flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4 text-orange-500 transform transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-4-4m4 4l-4 4" />
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
}

export default Body;