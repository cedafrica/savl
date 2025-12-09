import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MaxContainer from "../common/max-container";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserRound, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/* ---------------- TYPES ---------------- */

type Project = {
  image: string;
  location: string;
  date: string;
  title: string;
  link: string;
};

type Category = {
  id: string;
  label: string;
  subtitle: string;
  projects: Project[];
};

/* ---------------- SAMPLE DATA (REPLACE LATER) ---------------- */

const sampleProjects: Project[] = [
  {
    image: "/dance.png",
    location: "Lagos, Nigeria",
    date: "January 27, 2025",
    title: "National Stadium Audio Upgrade",
    link: "#",
  },
  {
    image: "/dance.png",
    location: "Lagos, Nigeria",
    date: "January 27, 2025",
    title: "National Stadium Audio Upgrade",
    link: "#",
  },
  {
    image: "/dance.png",
    location: "Lagos, Nigeria",
    date: "January 27, 2025",
    title: "National Stadium Audio Upgrade",
    link: "#",
  },
];

const categories: Category[] = [
  {
    id: "worship",
    label: "Houses of Worship",
    subtitle: "Clarity, warmth and balance for every listener.",
    projects: sampleProjects,
  },
  {
    id: "restaurants",
    label: "Cafés & Restaurants",
    subtitle: "Effortless ambiance with premium distributed audio.",
    projects: sampleProjects,
  },
  {
    id: "nightclubs",
    label: "Night Clubs & Lounges",
    subtitle: "High-energy systems with precise control.",
    projects: sampleProjects,
  },
  {
    id: "congregations",
    label: "Large Congregations",
    subtitle: "Scale, clarity and coverage for every seat.",
    projects: sampleProjects,
  },
  {
    id: "hotels",
    label: "Hotels & Resorts",
    subtitle: "Luxury multi-zone audio across every experience.",
    projects: sampleProjects,
  },
  {
    id: "stadiums",
    label: "Stadiums & Arenas",
    subtitle: "Message intelligibility across thousands of seats.",
    projects: sampleProjects,
  },
  {
    id: "auditoriums",
    label: "Auditoriums & Concert Halls",
    subtitle: "Acoustic precision for performance-grade spaces.",
    projects: sampleProjects,
  },
  {
    id: "concerts",
    label: "Concerts & Live Events",
    subtitle: "Scalable power for live production.",
    projects: sampleProjects,
  },
  {
    id: "boardrooms",
    label: "Boardrooms & Conference Rooms",
    subtitle: "Executive-grade AV for confident communication.",
    projects: sampleProjects,
  },
];

/* ---------------- ANIMATION VARIANTS ---------------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier easing (TS-safe)
    },
  }),
};

/* ---------------- MAIN COMPONENT ---------------- */

const Projects = () => {
  return (
    <section className="px-6 sm:px-10 lg:px-24 pt-16 sm:pt-24">
      <MaxContainer>
        {/* Header */}
        <div className="mb-10 sm:mb-14 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-neutral-500 mb-3">
            Selected Work
          </p>
          <h2 className="text-[2.4rem] sm:text-[3rem] font-semibold tracking-tight text-neutral-900">
            Spaces transformed through intelligent AV design.
          </h2>
          <p className="mt-3 text-[1.45rem] text-neutral-600 leading-relaxed">
            From worship spaces and restaurants to stadiums and boardrooms, each project
            is engineered with clarity, precision and purpose.
          </p>
        </div>

        {/* Tabs root */}
        <Tabs defaultValue={categories[0].id} className="w-full">
          {/* ---------- MOBILE TAB BAR (HORIZONTAL SCROLL) ---------- */}
          {/* MOBILE TAB LIST CONTAINER (REQUIRED FOR SCROLL) */}
<div className="sm:hidden mb-6 w-full overflow-x-auto overflow-y-visible">
  <TabsList
    className="
      inline-flex
      flex-nowrap
      gap-3
      bg-[#0B0B0C] text-white
      px-4 py-3
      rounded-xl
      whitespace-nowrap
      overflow-x-auto
      scrollbar-none
      w-max
    "
  >
    {categories.map((cat) => (
      <TabsTrigger
        key={cat.id}
        value={cat.id}
        className="
          px-5 py-2
          text-[1.3rem]
          rounded-lg
          text-white
          flex-shrink-0
          border border-white/20
          whitespace-nowrap
          data-[state=active]:bg-white data-[state=active]:text-black
        "
      >
        {cat.label}
      </TabsTrigger>
    ))}
  </TabsList>
</div>

          {/* ---------- DESKTOP SPLIT LAYOUT ---------- */}
          <div className="hidden sm:flex flex-row w-full rounded-3xl border border-black/5 overflow-hidden bg-[#0B0B0C]">
            {/* Left sidebar */}
            <aside className="w-[300px] lg:w-[340px] border-r border-white/10 bg-[#0B0B0C]">
              <div className="flex flex-col h-full px-8">
                {/* Top label */}
                <div className="pt-10 pb-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                    Project Types
                  </p>
                </div>

                {/* Centered tab list */}
                <div className="flex-1 flex items-center">
                  <TabsList className="flex flex-col gap-2 bg-transparent p-0 w-full">
                    {categories.map((cat) => (
                      <TabsTrigger
                        key={cat.id}
                        value={cat.id}
                        className="
                          w-full text-left rounded-xl
                          px-4 py-3
                          text-[1.35rem] font-medium tracking-tight
                          text-neutral-300 hover:text-white
                          data-[state=active]:bg-white data-[state=active]:text-black
                          transition-all
                        "
                      >
                        {cat.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {/* Footer text */}
                <div className="pb-10 pt-4 border-t border-white/10">
                  <p className="text-[1.25rem] leading-relaxed text-neutral-400">
                    Every system is designed to be invisible — yet unforgettable.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right side content (desktop) */}
            <div className="flex-1 bg-[#F6F6F7]">
              {categories.map((cat) => (
                <TabsContent key={cat.id} value={cat.id}>
                  <CategoryContent category={cat} />
                </TabsContent>
              ))}
            </div>
          </div>

          {/* ---------- MOBILE CONTENT (STACKED) ---------- */}
          <div className="sm:hidden">
            {categories.map((cat) => (
              <TabsContent key={cat.id} value={cat.id}>
                <CategoryContent category={cat} />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </MaxContainer>
    </section>
  );
};

/* ---------------- CATEGORY CONTENT ---------------- */

const CategoryContent = ({ category }: { category: Category }) => (
  <div className="p-4 sm:p-8 lg:p-10">
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      custom={0}
      className="mb-8 sm:mb-10"
    >
      <p className="text-xs uppercase tracking-[0.28em] text-neutral-500 mb-3">
        {category.label}
      </p>

      <h3 className="text-[2rem] sm:text-[2.3rem] font-semibold tracking-tight text-neutral-900">
        {category.subtitle}
      </h3>

      <p className="mt-2 text-[1.4rem] text-neutral-600">
        A selection of recent projects where we led the AV consulting, acoustic strategy,
        and system engineering.
      </p>
    </motion.div>

    {/* Projects grid */}
    <div className="grid gap-6 sm:gap-10 md:grid-cols-2 xl:grid-cols-3">
      {category.projects.map((project, i) => (
        <motion.div
          key={project.title + i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={i + 1}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>
  </div>
);

/* ---------------- PROJECT CARD ---------------- */

const ProjectCard = ({ project }: { project: Project }) => {
  const { image, location, date, title, link } = project;

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-[0_18px_40px_rgba(15,15,15,0.12)] hover:shadow-[0_22px_55px_rgba(15,15,15,0.16)] transition-all">
      <div className="relative h-[190px] sm:h-[210px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <p className="text-[1.25rem] uppercase tracking-[0.18em] text-white/70 mb-1">
            Case Study
          </p>
          <p className="text-[1.5rem] font-medium leading-snug line-clamp-2">
            {title}
          </p>
        </div>
      </div>

      <div className="p-5 sm:p-6 bg-[#F6F6F9]">
        <div className="flex items-center justify-between text-[1.3rem] text-neutral-600 mb-4 gap-3">
          <span className="flex items-center gap-2">
            <UserRound size={17} /> {location}
          </span>
          <span className="flex items-center gap-2">
            <Calendar size={17} /> {date}
          </span>
        </div>

        <Button
          asChild
          variant="ghost"
          className="px-0 text-[1.4rem] font-medium hover:text-black"
        >
          <Link to={link}>View Case Study →</Link>
        </Button>
      </div>
    </div>
  );
};

export default Projects;
