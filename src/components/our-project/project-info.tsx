import { useParams, Link } from "react-router-dom";

type ProjectCaseStudy = {
  slug: string;
  title: string;
  location: string;
  date: string;
  heroImage: string;
  gallery: string[]; // 👈 3 IMAGES HERE
  content: string;
};

const projectData: ProjectCaseStudy[] = [
  
  {
    slug: "booth-nightclub",
    title: "Booth Night Club",
    location: "Pretoria, South Africa",
    date: "January 2025",
    heroImage: "/booth1.webp",
    gallery: ["/booth2.webp", "/booth3.webp", "/booth1.webp"],
    content: `
      <section class="article-section">
        <h2>Project Overview</h2>
        <p>
          Booth Night Club required a high-energy professional sound system designed
          for consistency, control, and impact across extended operating hours.
        </p>

        <h2>The Challenge</h2>
        <p>
          Nightclubs operate at extreme sound pressure levels and require systems
          that deliver power without distortion or listener fatigue.
        </p>

        <h2>The Solution</h2>
        <p>
          Spectra AVL engineered a performance-driven system with controlled
          low-frequency impact and smooth high-frequency response.
        </p>

        <h2>How We Delivered</h2>
        <ul>
          <li>High-SPL system design</li>
          <li>Precision placement for uniform coverage</li>
          <li>Professional calibration</li>
          <li>Scalable system architecture</li>
        </ul>
      </section>
    `,
  },
];

const ProjectInfo = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projectData.find(p => p.slug === slug);

  if (!project) {
    return <div className="py-32 text-center text-3xl">Project Not Found</div>;
  }

  return (
    <article className="bg-white pt-24">
      {/* HERO */}
      <section className="h-[520px] bg-black flex items-end">
        <div className="max-w-6xl mx-auto px-6 pb-16 text-white">
          <h1 className="text-4xl md:text-5xl font-semibold">
            {project.title}
          </h1>
          <p className="mt-4 text-white/80">
            {project.location} • {project.date}
          </p>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {project.gallery.map((img, i) => (
            <div key={i} className="overflow-hidden rounded-2xl">
              <img
                src={img}
                alt={`${project.title} project image ${i + 1}`}
                className="w-full h-[280px] object-cover hover:scale-[1.04] transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-28">
        <Link
          to="/projects"
          className="text-sm uppercase tracking-widest text-gray-400"
        >
          ← Back to Projects
        </Link>

        <div
          className="article-content mt-16"
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </section>
    </article>
  );
};

export default ProjectInfo;
