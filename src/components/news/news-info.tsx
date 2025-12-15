import { useParams, Link } from "react-router-dom";

/* =======================
   TYPES
======================= */
type NewsInfoType = {
  slug: string;
  title: string;
  date: string;
  content: string; // FULL HTML ARTICLE
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
<section class="article-section">
  <h2>Strategic Partnership Overview</h2>

  <p>
    Spectra AVL is proud to announce a strategic partnership with <strong>Infiled</strong>, a globally
    recognized manufacturer of premium LED display solutions. This collaboration represents a
    significant milestone in Spectra AVL’s ongoing expansion and reinforces its commitment to
    delivering world-class audiovisual experiences across Africa and selected international markets.
  </p>

  <p>
    As the demand for high-performance visual technology continues to accelerate across commercial,
    entertainment, and architectural environments, the need for reliable, technically robust LED
    solutions has never been greater. This partnership enables Spectra AVL to meet that demand by
    combining global-grade LED technology with deep regional integration expertise.
  </p>

  <p>
    By aligning with Infiled, Spectra AVL strengthens its position as a trusted partner for clients
    seeking visually impactful, durable, and future-ready LED installations that meet international
    engineering standards while remaining tailored to local project requirements.
  </p>

  <img
    src="/infiled.webp"
    alt="Infiled LED display installation by Spectra AVL"
  />

  <h2>What This Partnership Delivers</h2>

  <p>
    Through this collaboration, Spectra AVL becomes an official installation and integration partner
    for Infiled’s LED display systems. This enables the delivery of fully integrated, end-to-end LED
    solutions that go beyond hardware supply to encompass the complete project lifecycle.
  </p>

  <p>
    Each project is approached with a structured methodology that prioritizes performance,
    reliability, and long-term value. From early-stage consultation and system design through
    installation, calibration, and ongoing support, Spectra AVL ensures that every LED deployment
    performs exactly as intended within its environment.
  </p>

  <ul>
    <li>Comprehensive LED system design and technical specification</li>
    <li>Precision installation aligned with architectural intent</li>
    <li>Professional commissioning, calibration, and performance tuning</li>
    <li>Ongoing technical support and long-term system optimization</li>
  </ul>

  <p>
    This end-to-end approach ensures consistency in visual quality, operational stability, and
    scalability, allowing clients to confidently deploy LED technology in demanding applications
    such as corporate headquarters, retail flagships, entertainment venues, and large-format public
    installations.
  </p>

  <h2>About Infiled</h2>

  <p>
    Infiled is internationally respected for its innovation in LED display engineering and
    manufacturing. The brand is trusted worldwide across a wide range of applications, including
    broadcast studios, live events, corporate environments, hospitality venues, retail spaces, and
    architectural landmarks.
  </p>

  <p>
    Known for its commitment to quality, reliability, and visual performance, Infiled’s LED solutions
    are engineered to deliver exceptional brightness, accurate color reproduction, and consistent
    performance in both indoor and outdoor environments. These systems are designed to operate
    reliably under demanding conditions, making them a preferred choice for projects where visual
    impact and long-term durability are critical.
  </p>

  <p>
    Infiled’s focus on continuous research and development ensures that its products remain at the
    forefront of LED technology, supporting evolving content formats, higher resolutions, and
    increasingly complex installation requirements.
  </p>

  <h3>Looking Ahead</h3>

  <p>
    This partnership marks an important step forward in Spectra AVL’s long-term strategy to
    collaborate with premium global technology brands that share its commitment to excellence.
    Together, Spectra AVL and Infiled are well positioned to deliver advanced LED solutions that
    elevate visual communication, strengthen brand presence, and enhance user experiences across
    diverse environments.
  </p>

  <p>
    As demand for immersive visual technology continues to grow across Africa and beyond, this
    collaboration sets a new benchmark for professional LED integration—one defined by technical
    precision, thoughtful design, and long-term performance.
  </p>
</section>
`,

  },

  {
    slug: "audio-technology-partnership",
    title: "Spectra AVL X Audio Technology",
    date: "January 27, 2025",
    content: `
<section class="article-section">
  <h2>Advancing Professional Audio Integration</h2>

  <p>
    Spectra AVL announces a strategic audio engineering partnership with
    <strong>Audio Technology</strong>, bringing together advanced acoustic engineering
    and precision-driven system integration to redefine professional audio experiences
    across diverse environments. This collaboration represents a significant step in
    Spectra AVL’s mission to deliver sound systems that are not only technically accurate
    but also emotionally engaging and operationally reliable.
  </p>

  <p>
    As expectations for audio performance continue to rise across commercial, entertainment,
    and public spaces, clients increasingly demand solutions that balance power, clarity,
    and control. This partnership positions Spectra AVL to meet those expectations by
    combining globally respected audio technology with deep integration expertise and
    an understanding of real-world acoustic challenges.
  </p>

  <p>
    By aligning with Audio Technology, Spectra AVL strengthens its ability to design and
    deliver sound systems that perform consistently under demanding conditions, while
    remaining adaptable to future requirements and evolving content formats.
  </p>

  <img
    src="/atech.webp"
    alt="Professional audio system integration by Spectra AVL"
  />

  <h2>Core Focus Areas</h2>

  <p>
    At the core of this collaboration is a shared commitment to audio precision and
    performance consistency. Every system is engineered with a clear understanding of
    how sound behaves within a given space and how users interact with that sound over time.
  </p>

  <ul>
    <li>Optimized speech intelligibility and natural tonal balance across listening areas</li>
    <li>Consistent sound coverage in acoustically complex and multi-zone environments</li>
    <li>Scalable, future-ready audio systems designed for long-term adaptability</li>
  </ul>

  <p>
    These focus areas ensure that each installation delivers clarity and impact without
    compromise, whether the system is supporting spoken word, background music, or
    high-energy entertainment content.
  </p>

  <h2>Precision-Driven Engineering and Integration</h2>

  <p>
    Spectra AVL’s integration methodology emphasizes accuracy at every stage of the
    project lifecycle. From early-stage acoustic assessment and system modeling to
    equipment selection, installation, and commissioning, each decision is guided by
    performance objectives and long-term reliability.
  </p>

  <p>
    Systems are carefully calibrated and fine-tuned to ensure consistent audio performance
    across all listening positions. This approach minimizes variations in sound quality
    and ensures that every listener experiences the intended tonal balance and clarity,
    regardless of their location within the space.
  </p>

  <h2>Designed for Multiple Environments</h2>

  <p>
    The Spectra AVL and Audio Technology partnership supports a wide range of applications,
    from entertainment venues and nightlife environments to hospitality, corporate, and
    mixed-use developments. Each environment presents unique acoustic and operational
    challenges that require tailored solutions rather than one-size-fits-all approaches.
  </p>

  <p>
    In entertainment venues, systems are engineered to deliver impactful sound with
    controlled dynamics, ensuring energy and excitement without listener fatigue. In
    hospitality and corporate environments, the focus shifts toward comfort, intelligibility,
    and subtlety, allowing audio to enhance the atmosphere without overwhelming it.
  </p>

  <p>
    Across all applications, systems are designed to be reliable, scalable, and easy to
    manage, enabling operators to adapt to changing requirements with confidence.
  </p>

  <h2>Future-Ready Professional Audio Solutions</h2>

  <p>
    A key strength of this partnership is its focus on future-ready design. Audio systems
    are engineered with scalability and flexibility in mind, allowing for seamless upgrades,
    expansion, and integration with emerging technologies.
  </p>

  <p>
    This forward-thinking approach protects client investment while ensuring that systems
    remain relevant as content formats, user expectations, and operational needs evolve.
    By combining advanced audio technology with disciplined integration practices, Spectra
    AVL delivers solutions that continue to perform at a high level throughout their lifecycle.
  </p>

  <p>
    Together, Spectra AVL and Audio Technology are setting a new standard for professional
    audio integration—one defined by technical precision, thoughtful design, and enduring
    performance.
  </p>
</section>
`,

  },

  {
    slug: "booth-nightclub-south-africa",
    title:
      "Booth Night Club, South Africa Trusts Spectra for Immersive Sound Experience",
    date: "January 27, 2025",
    content: `
<section class="article-section">
  <h2>Project Overview</h2>

  <p>
    Spectra AVL delivered a high-performance professional audio integration for
    <strong>Booth Night Club & Kilala Restaurant & Lounge</strong>, a premium nightlife
    and hospitality destination located in Pretoria, South Africa. The project reflects
    Spectra AVL’s commitment to engineering sound systems that enhance guest experience
    while meeting the operational demands of modern entertainment venues.
  </p>

  <p>
    Designed as a hybrid space combining high-energy nightlife with refined hospitality,
    the venue required an audio solution capable of delivering impact, clarity, and
    consistency across multiple zones. From the main dance floor to lounge and dining
    areas, the system needed to perform reliably under varying sound pressure levels
    without compromising sound quality.
  </p>

  <p>
    Spectra AVL approached the project with a clear focus on performance-driven design,
    ensuring that the audio system aligned with the venue’s architectural layout, interior
    finishes, and operational goals.
  </p>

  <img
    src="/booth.webp"
    alt="Booth Night Club sound system installation"
  />

  <h2>Engineering for Nightlife Performance</h2>

  <p>
    Nightlife environments present unique acoustic challenges, including high sound
    pressure levels, reflective surfaces, and dense audience movement. To address these
    conditions, the system was engineered to deliver powerful low-frequency impact while
    maintaining control and definition across the audible spectrum.
  </p>

  <p>
    Articulate midrange detail ensures musical clarity and vocal presence, while controlled
    high-frequency response preserves brightness and energy without harshness. This
    balanced approach allows the system to perform at elevated volumes without listener
    fatigue, supporting extended operating hours and diverse music genres.
  </p>

  <p>
    Careful attention was given to loudspeaker selection, placement, and tuning to ensure
    that sound energy is distributed evenly throughout the venue. This creates a cohesive
    and immersive sonic experience that complements the venue’s lighting, interior design,
    and overall atmosphere.
  </p>

  <h2>System Capabilities</h2>

  <p>
    The installed audio system was designed with both current performance requirements
    and future adaptability in mind. By combining robust hardware with thoughtful system
    architecture, Spectra AVL delivered a solution capable of supporting a wide range of
    events and programming formats.
  </p>

  <ul>
    <li>
      Uniform sound coverage across all zones, ensuring a consistent listening experience
      throughout the venue
    </li>
    <li>
      High SPL performance with precise control, allowing the system to deliver impact
      without distortion
    </li>
    <li>
      Scalable system architecture that supports future expansion, upgrades, and evolving
      event requirements
    </li>
  </ul>

  <p>
    Reliability was a key consideration throughout the design and installation process.
    The system was engineered to operate consistently under demanding conditions, reducing
    the risk of downtime and ensuring dependable performance during peak operating hours.
  </p>

  <h2>Installation, Calibration, and Optimization</h2>

  <p>
    Beyond system design, the success of the project relied on precision installation and
    detailed calibration. Spectra AVL’s integration process emphasized accuracy, safety,
    and attention to detail at every stage of execution.
  </p>

  <p>
    Following installation, the system underwent comprehensive tuning and optimization to
    account for the venue’s acoustic characteristics. This process ensured that tonal
    balance, dynamic control, and coverage uniformity met performance targets under
    real-world operating conditions.
  </p>

  <h3>Outcome</h3>

  <p>
    The completed installation establishes a new benchmark for professional nightlife
    audio in South Africa. By delivering a system that balances power, clarity, and control,
    Spectra AVL enabled Booth Night Club & Kilala Restaurant & Lounge to create an engaging
    and memorable audio experience for its guests.
  </p>

  <p>
    This project stands as a strong example of Spectra AVL’s ability to execute complex,
    high-performance audio integrations within demanding entertainment environments,
    reinforcing its position as a trusted partner for premium nightlife and hospitality
    projects.
  </p>
</section>
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
    return <div className="py-32 text-center text-3xl">Article Not Found</div>;
  }

  return (
    <article className="bg-white pt-24">
      {/* HERO */}
      <section className="w-full h-[520px] bg-black flex items-end">
        <div className="max-w-4xl mx-auto w-full px-6 pb-16 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            {article.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{article.date}</p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-28">
        <Link
          to="/news"
          className="inline-block mb-12 text-sm uppercase tracking-widest text-gray-400 hover:text-black"
        >
          ← Back to News
        </Link>

        {/* RENDER REAL HTML */}
        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </article>
  );
};

export default NewsInfo;
