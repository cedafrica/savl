import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const tabs = ["All", "Audio", "Video", "Lighting"];

const newsData = [
  {
    title: "Spectra AVL Secures Partnership with Infiled for LED Installation",
    excerpt:
      "We are proud to announce that Infiled has entrusted Spectra AVL as their official partner for LED installation.",
    date: "January 27, 2025",
    category: ["Video"],
    image: "/infiled.webp",
    link: "/news/infiled-led-partnership",
  },
  {
    title: "Spectra AVL X Audio Technology",
    excerpt:
      "Spectra AVL announces a groundbreaking audio engineering partnership aimed at redefining sound experiences across industries.",
    date: "January 27, 2025",
    category: ["Audio"],
    image: "/at.png",
    link: "/news/audio-technology-partnership",
  },
  {
    title:
      "Booth Night Club, South Africa Trusts Spectra for Immersive Sound Experience",
    excerpt:
      "The new Booth Night Club & Kilala Restaurant & Lounge sets a new benchmark for immersive sound experiences in South Africa.",
    date: "January 27, 2025",
    category: ["Audio", "Video"],
    image: "/booths.webp",
    link: "/news/booth-nightclub-south-africa",
  },
];

const NewsPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredNews =
    activeTab === "All"
      ? newsData
      : newsData.filter(item => item.category.includes(activeTab));

  return (
    <section className="w-full bg-white">
      <div className="max-w-[1600px] mx-auto px-10 py-32">

        {/* PAGE HEADER */}
        <div className="mb-20">
          <h1 className="text-5xl lg:text-6xl font-semibold text-black mb-6">
            News & Insights
          </h1>
          <p className="text-3xl text-gray-500 max-w-3xl leading-relaxed">
            Industry announcements, partnerships, and project highlights from
            Spectra AVL.
          </p>
        </div>

        {/* TABS */}
        <div className="flex gap-12 mb-20 border-b border-gray-200">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-6 text-2xl tracking-wide transition-all ${
                activeTab === tab
                  ? "border-b-2 border-black text-black"
                  : "text-gray-400 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* NEWS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
          {filteredNews.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* IMAGE */}
              <div className="overflow-hidden mb-8 rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* META */}
              <div className="flex items-center gap-4 text-sm uppercase tracking-widest text-gray-400 mb-4">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.category.join(" / ")}</span>
              </div>

              {/* TITLE */}
              <h2 className="text-3xl lg:text-3xl font-semibold text-black leading-snug mb-5 group-hover:underline">
                {item.title}
              </h2>

              {/* EXCERPT */}
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                {item.excerpt}
              </p>

              {/* READ MORE */}
              <Link
                to={item.link}
                className="inline-block text-2xl font-medium underline underline-offset-8 hover:text-black transition"
              >
                Read More →
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
