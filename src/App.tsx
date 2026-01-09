import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "@/components/common/nav";

// PRELOADER + HOOK
import Preloader from "@/components/TEMP_preloader";
import { usePageLoader } from "@/hooks/usePageLoader"; 
import { motion } from "framer-motion";
import Projects from "./components/our-project/projects";
import ProjectInfo from "./components/our-project/project-info";

import NavLayout from "@/layout/nav-layout";
import Home from "./pages/home";
import AboutUs from "./pages/about-us";
import Services from "./pages/services";
import Project from "./pages/our-project";
import Partnership from "./pages/partnership";

import NewsLayout from "./layout/news-layout";
import News from "./pages/news";
import NewsInfo from "./components/news/news-info";

import Contact from "./pages/contact";
import Video from "./pages/video";
import Audio from "./pages/audio";
import Lighting from "./pages/lighting";

import Application from "./pages/application";

function App() {
  const loading = usePageLoader(); // <-- route-aware loading

  return (
    <>
      {/* PREMIUM GLOBAL PRELOADER */}
      <Preloader loading={loading} />

      {/* NAV ALWAYS VISIBLE */}
      <Nav />

      {/* FADE-IN PAGE TRANSITION */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Routes>
          <Route element={<NavLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/partnership" element={<Partnership />} />
            <Route path="/projects" element={<Projects />} />
<Route path="/projects/:slug" element={<ProjectInfo />} />

            {/* News */}
            <Route element={<NewsLayout />}>
              <Route path="/news" element={<News />} />
              <Route path="/news/:slug" element={<NewsInfo />} />
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<Video />} />
             <Route path="/audio" element={<Audio />} />
             <Route path="/lighting" element={<Lighting />} />

            {/* Dynamic Application Pages */}
            <Route path="/application/:id" element={<Application />} />
          </Route>
        </Routes>
      </motion.div>
    </>
  );
}

export default App;
