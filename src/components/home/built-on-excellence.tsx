import CustomButton from "../common/custom-button";
import MaxContainer from "../common/max-container";

const BuiltOnExcellence = () => {
    const partners = [
        {
            name: "Top-Tier Brands",
            text: "We work with leading global brands to deliver premium AVL quality.",
            image: "/medal.svg"
        },
        {
            name: "Global Partners",
            text: "Our global network ensures seamless, cutting-edge solutions.",
            image: "/global.svg"
        },
        {
            name: "Expert Local Team",
            text: "Skilled local experts bring world-class results to every project.",
            image: "/team.svg"
        },

    ]

    const projects = [
        {
            no: "500+",
            text: "Projects Completed"
        },
        {
            no: "15+",
            text: "Years of Experience",
        },
        {
            no: "100+",
            text: "Global Partners",
        },
        {
            no: "98%",
            text: "Clients Satisfaction"
        }
    ]

    return (
        <section className="sm:px-32 px-9 pt-[4rem] sm:pt-[10rem] pb-[8rem] bg-white">
    <MaxContainer>

        {/* HEADLINE */}
        <h2 className="fade-up text-black font-semibold sm:text-[3.6rem] text-[2.4rem] leading-tight max-w-[50rem] sm:max-w-none fade-delay-1">
            Built on Excellence, Driven by Partnership
        </h2>

        {/* PARTNERS LIST */}
        <div className="grid sm:grid-cols-3 gap-[3rem] sm:gap-[4rem] mt-[4rem] sm:mt-[7rem]">
            {partners.map((partner, index) => (
                <div
                    key={index}
                    className={`fade-up fade-delay-${index + 1} flex items-start sm:items-center gap-[1.6rem] sm:gap-[2.4rem] text-black`}
                >
                    <img
                        src={partner.image}
                        alt={partner.name}
                        className="sm:h-[6rem] h-[3.8rem] object-contain"
                    />
                    <div>
                        <h3 className="sm:text-[2rem] text-[1.8rem] font-semibold leading-snug">
                            {partner.name}
                        </h3>
                        <p className="sm:text-[1.8rem] text-[1.5rem] opacity-70 leading-snug">
                            {partner.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>

        {/* IMAGE + TEXT SECTION */}
        <div className="relative flex flex-col-reverse sm:flex-row items-center sm:gap-16 mt-24 sm:mt-48">

  {/* Left: Text Content */}
  <div className="flex flex-col sm:w-1/2 text-gray-900 space-y-8 sm:space-y-12">
    
    {/* Heading */}
    <h2 className="fade-up fade-delay-1 sm:text-[4.8rem] text-[2.8rem] font-extrabold leading-tight text-center sm:text-left tracking-tight">
      Elevating Audiovisual Excellence
    </h2>

    {/* Description */}
    <p className="fade-up fade-delay-2 sm:text-[1.9rem] text-[1.6rem] text-gray-700 leading-relaxed text-center sm:text-left">
      Spectra AVL is redefining Nigeria’s AVL scene with advanced audio technology — bringing <span className="font-semibold">31+ years of expertise</span> and <span className="font-semibold">4,500+ successful projects</span> to deliver world-class, performance-driven solutions.
    </p>

    {/* Project Stats */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mt-8">
      {projects.map((project, index) => (
        <div key={index} className="fade-up fade-delay-{index + 1} flex flex-col items-center sm:items-start">
          <h3 className="sm:text-[3.5rem] text-[2.6rem] font-bold text-gray-900 leading-none">
            {project.no.toLocaleString()}
          </h3>
          <p className="sm:text-[1.6rem] text-[1.4rem] text-gray-600 mt-2 text-center sm:text-left">
            {project.text}
          </p>
        </div>
      ))}
    </div>

    {/* CTA Button */}
    <CustomButton className="fade-up fade-delay-4 mt-8 sm:mt-12 px-12 sm:px-16 py-4 sm:py-5 rounded-full border-[1.5px] border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all shadow-md hover:shadow-lg">
      Learn More
    </CustomButton>
  </div>

  {/* Right: Image */}
  <div className="sm:w-1/2 relative">
    <img
      src="/lights.png"
      alt="Audiovisual Excellence"
      className="fade-up fade-delay-3 w-full max-w-[60rem] shadow-2xl object-cover"
    />
    {/* Optional subtle overlay for elegance */}
    <div className="absolute inset-0  pointer-events-none"></div>
  </div>
</div>

    </MaxContainer>
</section>

    );
}

export default BuiltOnExcellence;