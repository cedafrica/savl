import React from "react";

interface BodyItem {
  bold?: string;
  text?: string;
}

interface BodySection {
  title: string;
  image: string;
  items: BodyItem[];
}

interface BodyProps {
  contents?: BodySection[];
}

const Body: React.FC<BodyProps> = ({ contents = [] }) => {
  return (
    <section className="py-32 bg-[#f7f7f7]">
      <div className="max-w-[95rem] mx-auto px-6 space-y-48">

        {contents.map((section, index) => (
          <div key={index} className="relative">

            {/* CINEMATIC IMAGE */}
            <div
              className="
                w-full 
                h-[420px] sm:h-[520px] lg:h-[620px]
                rounded-[40px] 
                overflow-hidden 
                shadow-[0_30px_90px_rgba(0,0,0,0.20)]
              "
            >
              <img
                src={section.image}
                alt={section.title}
                className="
                  w-full h-full object-cover 
                  transition-all duration-[1500ms]
                  hover:scale-[1.06]
                "
              />
            </div>

            {/* FLOATING GLASS CARD WITH CTA */}
            <div
              className={`
                absolute left-1/2 transform -translate-x-1/2
                ${index % 2 === 0 ? "lg:-bottom-20" : "lg:-bottom-24"}
                -bottom-12
                w-[92%] sm:w-[80%] lg:w-[65%]
                bg-white/70 backdrop-blur-[16px]
                rounded-[32px]
                shadow-[0_12px_40px_rgba(0,0,0,0.15)]
                p-10 sm:p-12 space-y-10
              `}
            >
              {/* Title */}
              <h2
                className="
                  text-[2.8rem] sm:text-[3.4rem] lg:text-[3.8rem]
                  font-semibold text-slate-900 
                  tracking-tight leading-[1.15]
                "
              >
                {section.title}
              </h2>

              {/* Apple-style storytelling paragraphs */}
              <div className="space-y-6">
                {section.items.map((itm, i) => (
                  <p
                    key={i}
                    className="
                      text-[1.55rem] sm:text-[1.7rem] lg:text-[1.8rem]
                      text-slate-700 leading-[1.65]
                      max-w-[60ch]
                    "
                  >
                    {itm.bold && (
                      <span className="font-semibold text-slate-900">
                        {itm.bold}:{" "}
                      </span>
                    )}
                    {itm.text}
                  </p>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button
                  className="
                    px-7 py-3.5
                    rounded-full
                    text-[1.5rem]
                    font-medium
                    bg-slate-900 text-white
                    hover:bg-slate-800
                    transition-all duration-300
                    shadow-[0_8px_25px_rgba(0,0,0,0.15)]
                  "
                >
                  Discuss This Project →
                </button>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Body;
