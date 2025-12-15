import { useParams, Link } from "react-router-dom";

/* =======================
   TYPES
======================= */
type NewsInfoType = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

/* =======================
   DATA
======================= */
const newsData: NewsInfoType[] = [
  {
    slug: "infiled-led-partnership",
    title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
    date: "January 27, 2025",
    content: `
<h1>Spectra AVL Announces Strategic Partnership with Infiled</h1>

Spectra AVL is proud to announce a strategic partnership with Infiled, a globally recognized manufacturer of premium LED display solutions. This collaboration marks a significant milestone in Spectra AVL’s continued growth and reinforces its commitment to delivering world-class audiovisual experiences across Africa and select international markets.

As demand for high-performance visual technology continues to rise across commercial, entertainment, and architectural environments, this partnership positions Spectra AVL to meet that demand with precision, reliability, and global-standard expertise.

<h1>Strengthening AV Integration Excellence Across Africa</h1>

Through this collaboration, Spectra AVL is officially positioned as an installation and integration partner for Infiled’s advanced LED display solutions. This partnership enables Spectra AVL to provide clients with direct access to industry-leading LED technology, backed by expert system design, professional installation, and long-term performance support.

By aligning with Infiled, Spectra AVL reinforces its role as a trusted AV integration partner capable of delivering complex, large-scale visual systems that meet the highest international standards. Clients can expect seamless project execution, from initial consultation through to commissioning and lifecycle support.

<h1>About Infiled: A Global Leader in LED Display Innovation</h1>

Infiled is internationally respected for its innovation in LED display engineering and manufacturing. The brand is trusted worldwide across a broad range of applications, including broadcast studios, live events, corporate environments, retail spaces, hospitality venues, and architectural installations.

Known for its commitment to quality, reliability, and visual performance, Infiled’s LED solutions are engineered to deliver exceptional brightness, color accuracy, and durability. These systems are designed to perform consistently in demanding environments, making them a preferred choice for projects where visual impact and long-term reliability are critical.

<h1>Delivering End-to-End LED Installation Services</h1>

As part of this partnership, Spectra AVL will deliver comprehensive, end-to-end LED installation services tailored to each project’s unique requirements. These services include early-stage system design support, ensuring that LED solutions are properly specified to align with architectural intent, operational needs, and budget considerations.

Installation is carried out with a strong emphasis on precision, safety, and system integrity. Following installation, Spectra AVL provides professional calibration and system optimization to ensure that each LED display performs exactly as intended. Long-term performance monitoring and support services further ensure reliability and longevity throughout the system’s lifecycle.

<h1>Enhancing Experiences Through Precision Engineering</h1>

At the core of this partnership is a shared commitment to excellence in engineering and performance. By combining Infiled’s advanced LED technology with Spectra AVL’s integration expertise, clients benefit from solutions that are not only visually striking but also technically robust and future-ready.

Whether deployed in entertainment venues, commercial spaces, or architectural landmarks, these LED systems are designed to enhance user experience, strengthen brand presence, and deliver lasting value. Each installation is approached with a focus on consistency, clarity, and operational efficiency.

<h1>A Strategic Milestone for Spectra AVL</h1>

This partnership represents an important step forward in Spectra AVL’s long-term strategy to collaborate with premium global technology brands. By forming strategic alliances with manufacturers known for innovation and quality, Spectra AVL continues to raise the standard for professional AV integration across the region.

The collaboration with Infiled further strengthens Spectra AVL’s portfolio and enhances its ability to support increasingly sophisticated projects. It also reflects the company’s dedication to continuous improvement, technical excellence, and delivering solutions that exceed client expectations.

<h1>Looking Ahead</h1>

As Spectra AVL and Infiled move forward together, the partnership is set to unlock new opportunities across multiple sectors, including live entertainment, corporate environments, hospitality, retail, and large-scale public installations.

This milestone reinforces Spectra AVL’s position as a trusted partner for premium audiovisual solutions and underscores its commitment to shaping the future of visual experiences through technology, expertise, and strategic collaboration.
`,

  },
  {
    slug: "audio-technology-partnership",
    title: "Spectra AVL X Audio Technology",
    date: "January 27, 2025",
    content: `
<h1>Spectra AVL Announces Strategic Audio Engineering Partnership with Audio Technology</h1>

Spectra AVL is pleased to announce a strategic audio engineering partnership with Audio Technology, marking a significant step forward in the company’s mission to deliver world-class sound solutions across professional environments. This collaboration brings together deep audio engineering expertise and precision-driven system integration to create sound systems that are accurate, immersive, and emotionally engaging.

As demand for high-performance audio continues to grow across entertainment, corporate, hospitality, and public venues, this partnership positions Spectra AVL to deliver solutions that meet the highest global standards while remaining tailored to local project requirements.

<h1>Elevating Professional Audio Experiences</h1>

At the heart of this collaboration is a shared commitment to excellence in audio performance. By combining Audio Technology’s engineering innovation with Spectra AVL’s integration expertise, the partnership delivers systems designed for clarity, consistency, and reliability.

Every project is approached with a focus on how sound is experienced within a space. From speech intelligibility and tonal balance to dynamic impact and coverage uniformity, systems are engineered to perform precisely as intended. This ensures that audiences, guests, and users experience sound that is not only technically accurate but also engaging and emotionally resonant.

<h1>Precision-Driven System Integration</h1>

Spectra AVL’s role within this partnership centers on precision-driven system integration. This includes translating advanced audio technology into fully realized solutions that align with architectural design, operational needs, and user expectations.

Through detailed system planning, careful equipment selection, and professional installation, Spectra AVL ensures that each audio solution is seamlessly integrated into its environment. Calibration and fine-tuning further optimize performance, guaranteeing consistent sound quality across all listening positions and usage scenarios.

<h1>Applications Across Multiple Sectors</h1>

The Spectra AVL X Audio Technology partnership supports a wide range of applications, from entertainment venues and nightclubs to corporate environments, hospitality spaces, and mixed-use developments.

In entertainment venues, the focus is on delivering impactful, high-energy sound while maintaining control and clarity. In corporate and hospitality spaces, systems are engineered for intelligibility, comfort, and subtlety, ensuring that audio enhances the environment rather than overpowering it.

Across all applications, the goal remains the same: to deliver sound systems that are reliable, scalable, and future-ready.

<h1>Technically Accurate and Future-Ready Solutions</h1>

Technical accuracy is a defining principle of this partnership. Systems are designed using proven engineering methodologies that prioritize performance consistency, acoustic compatibility, and long-term reliability.

By adopting future-ready design principles, Spectra AVL ensures that systems can adapt to evolving requirements, new content formats, and changing usage patterns. This forward-thinking approach protects client investment while enabling seamless upgrades and expansions over time.

<h1>A Shared Commitment to Quality and Excellence</h1>

This partnership reflects a shared philosophy between Spectra AVL and Audio Technology: that exceptional audio experiences are achieved through a balance of advanced technology, expert design, and disciplined execution.

By working closely with a globally respected audio engineering partner, Spectra AVL strengthens its ability to deliver solutions that meet international benchmarks for performance and reliability. Clients benefit from systems that are designed with intent, installed with precision, and supported throughout their operational lifecycle.

<h1>Strengthening Spectra AVL’s Professional Audio Portfolio</h1>

The collaboration with Audio Technology further reinforces Spectra AVL’s position as a trusted professional audio integration partner. It expands the company’s technical capabilities and enhances its ability to support increasingly complex and demanding projects.

This partnership also underscores Spectra AVL’s commitment to aligning with premium technology brands that share its focus on innovation, quality, and performance excellence.

<h1>Looking Ahead</h1>

As Spectra AVL and Audio Technology move forward together, the partnership is set to unlock new opportunities across diverse sectors and project scales. By delivering sound solutions that are technically precise, immersive, and emotionally impactful, the collaboration aims to redefine expectations for professional audio experiences.

The Spectra AVL X Audio Technology partnership stands as a clear statement of intent: to continue raising the standard for professional audio integration through expertise, innovation, and strategic collaboration.
`,

  },
  {
    slug: "booth-nightclub-south-africa",
    title:
      "Booth Night Club, South Africa Trusts Spectra for Immersive Sound Experience",
    date: "January 27, 2025",
    content: `
<h1>Spectra AVL Delivers Immersive Audio Integration for Booth Night Club & Kilala Restaurant & Lounge</h1>

Spectra AVL is proud to be entrusted with the professional audio integration for Booth Night Club & Kilala Restaurant & Lounge, a premier nightlife and hospitality destination located in Pretoria, South Africa. This project reflects Spectra AVL’s continued commitment to delivering high-performance sound systems that elevate guest experience while meeting the operational demands of modern entertainment venues.

Designed to support both high-energy nightlife and refined hospitality environments, the audio system was carefully engineered to deliver impact, clarity, and consistency across all areas of the venue.

<h1>Engineering Sound for a Premium Nightlife Experience</h1>

Nightclubs and hybrid entertainment venues present unique acoustic challenges. High sound pressure levels, dynamic music content, and diverse audience movement require systems that perform reliably without sacrificing audio quality. For Booth Night Club & Kilala Restaurant & Lounge, Spectra AVL approached the project with a focus on controlled power and precision.

The system was engineered to deliver powerful low frequencies that provide physical impact on the dance floor, articulate midrange detail that preserves musical definition, and crisp high-frequency response that maintains clarity even at elevated volume levels. This balanced approach ensures an immersive listening experience without listener fatigue.

<h1>Consistent Coverage Across the Venue</h1>

Achieving consistent sound coverage throughout the venue was a critical design objective. Uneven audio levels can negatively affect guest experience, particularly in multi-zone nightlife environments where sound transitions between spaces must feel natural and cohesive.

Through careful loudspeaker selection, placement, and tuning, Spectra AVL ensured uniform sound distribution across all audience areas. Whether on the dance floor, at the bar, or within lounge zones, guests experience a consistent sonic character that enhances the atmosphere of the space.

<h1>Precision Installation and System Optimization</h1>

Beyond system design, the success of the project relied heavily on precision installation and detailed system optimization. Spectra AVL’s integration process emphasized accuracy, safety, and attention to detail at every stage.

Following installation, the system underwent comprehensive calibration and fine-tuning to ensure optimal performance within the venue’s acoustic environment. This process allowed the system to achieve its intended tonal balance, dynamic control, and operational stability under real-world conditions.

<h1>Reliability and Scalability for Diverse Events</h1>

Modern nightlife venues must support a wide range of events, from DJ-driven club nights to private functions and special performances. Reliability and scalability were therefore key priorities throughout the project.

The installed system was designed to operate consistently under demanding conditions, minimizing downtime and maintenance requirements. Its scalable architecture allows the venue to adapt to future programming needs, equipment upgrades, or layout changes without compromising sound quality.

<h1>Enhancing Guest Experience Through Sound</h1>

Sound plays a critical role in shaping the emotional impact of nightlife and hospitality spaces. For Booth Night Club & Kilala Restaurant & Lounge, the goal was to create an environment where audio energy complements the venue’s design, lighting, and overall ambiance.

The result is a sound system that enhances guest engagement, encourages longer stays, and supports the venue’s brand identity. By delivering clarity and impact in equal measure, the system contributes directly to the overall success of the venue.

<h1>A New Benchmark for Nightlife Sound in South Africa</h1>

This project establishes a new benchmark for professional nightlife audio integration in South Africa. By combining technical expertise with a deep understanding of venue requirements, Spectra AVL delivered a solution that balances performance, reliability, and future-readiness.

The Booth Night Club & Kilala Restaurant & Lounge installation stands as a testament to Spectra AVL’s capability to execute complex, high-performance audio projects within demanding entertainment environments.

<h1>Continuing a Commitment to Excellence</h1>

Spectra AVL remains committed to delivering premium audiovisual solutions that elevate experiences and set new standards across the region. Projects such as Booth Night Club & Kilala Restaurant & Lounge reinforce the company’s position as a trusted partner for professional audio integration within nightlife, hospitality, and entertainment sectors.

As Spectra AVL continues to expand its portfolio, it remains focused on engineering sound systems that not only perform exceptionally but also contribute meaningfully to the spaces they serve.
`,

  },
];

/* =======================
   COMPONENT
======================= */
const NewsInfo = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = newsData.find(item => item.slug === slug);

  if (!article) {
    return (
      <div className="py-32 text-center text-3xl">
        Article Not Found
      </div>
    );
  }

  return (
    <article className="bg-white pt-24">
      {/* =======================
          BLACK HERO
      ======================= */}
      <section className="w-full h-[520px] bg-black flex items-end">
        <div className="max-w-4xl mx-auto w-full px-6 pb-16 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">
            {article.date}
          </p>
        </div>
      </section>

      {/* =======================
          CONTENT
      ======================= */}
      <div className="max-w-4xl mx-auto px-6 py-28">
        {/* Back link */}
        <Link
          to="/news"
          className="inline-block mb-12 text-sm uppercase tracking-widest text-gray-400 hover:text-black transition"
        >
          ← Back to News
        </Link>

        {/* Article body */}
        <div className="space-y-10 text-[20px] leading-[1.8] text-gray-700">
          {article.content
            .trim()
            .split(/\n\s*\n/)
            .map((para, i) => {
              const formatted = para.replace(
                /\*\*(.*?)\*\*/g,
                "<strong>$1</strong>"
              );

              return (
                <p
                  key={i}
                  dangerouslySetInnerHTML={{ __html: formatted }}
                />
              );
            })}
        </div>
      </div>
    </article>
  );
};

export default NewsInfo;
