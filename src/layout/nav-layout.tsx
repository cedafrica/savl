import { Outlet, useLocation } from "react-router-dom";
import Nav from "@/components/common/nav";
import Footer from "@/components/common/footer";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

const NavLayout = () => {
  const location = useLocation();

  // Always reset scroll position on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <>
      <Nav />

      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <Footer />
    </>
  );
};

export default NavLayout;
