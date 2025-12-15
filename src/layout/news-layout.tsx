import { Outlet, useLocation } from "react-router-dom";
import Hero from "@/components/news/hero";
import Content from "@/components/news/content";

const NewsLayout = () => {
  const { pathname } = useLocation();
  const isNewsList = pathname === "/news";

  return (
    <section className="relative z-10">
      {isNewsList && <Hero />}
      {isNewsList && <Content />}

      <div className="relative">
        <Outlet />
      </div>
    </section>
  );
};


export default NewsLayout;