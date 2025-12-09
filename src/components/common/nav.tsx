import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = { label: string; link: string };
type NavItem = { label: string; href?: string; type?: "dropdown"; children?: NavChild[] };

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openDropdownMobile, setOpenDropdownMobile] = useState<string | null>(null);
  const [openDropdownDesktop, setOpenDropdownDesktop] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const NavItems: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Partners", href: "/partnership" },
    {
      label: "Applications",
      type: "dropdown",
      children: [
        { label: "Houses of Worship", link: "/application/house-of-worship" },
        { label: "Cafes & Restaurants", link: "/application/cafes-restaurants" },
        { label: "Night Clubs & Lounges", link: "/application/night-clubs-lounges" },
        { label: "Large Congregations", link: "/application/large-congregations" },
        { label: "Hotels & Resorts", link: "/application/hotels-resorts" },
        { label: "Auditoriums & Concert Halls", link: "/application/auditoriums-concert-halls" },
        { label: "Concerts & Live Events", link: "/application/concerts-live-events" }
      ],
    },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  /* Scroll effect for premium navbar transitions */
  useEffect(() => {
    const listen = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", listen);
    return () => window.removeEventListener("scroll", listen);
  }, []);

  /* Lock background scroll when mobile nav open */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        className={`
          fixed top-0 left-0 w-full z-[9999]
          px-6 sm:px-14 
          transition-all duration-500
          ${scrolled ? 
            "bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.25)]" :
            "bg-black/25 backdrop-blur-[3px]"
          }
        `}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-[1500px] mx-auto flex justify-between items-center py-5">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="/spectra-logo.svg"
              alt="logo"
              className="w-40 sm:w-56"
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.4 }}
            />
          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden sm:flex items-center gap-12 text-white/90">
            {NavItems.map((item) =>
              item.type !== "dropdown" ? (
                <li key={item.label}>
                  <Link
                    to={item.href ?? "#"}
                    className="text-[1.45rem] font-medium hover:text-white transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li key={item.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdownDesktop(
                        openDropdownDesktop === item.label ? null : item.label
                      )
                    }
                    className="text-[1.45rem] font-medium flex items-center gap-2 hover:text-white transition"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-all ${
                        openDropdownDesktop === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* PREMIUM FLOATING DROPDOWN */}
                  <AnimatePresence>
                    {openDropdownDesktop === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="
                          absolute left-0 top-full mt-4
                          w-[28rem]
                          bg-white/70 backdrop-blur-xl
                          border border-white/30
                          rounded-2xl 
                          shadow-[0_15px_50px_rgba(0,0,0,0.2)]
                          overflow-hidden py-4
                        "
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.link}
                            to={child.link}
                            className="
                              block px-5 py-3
                              text-[1.35rem] font-medium 
                              text-slate-800 hover:text-black
                              hover:bg-black/5
                              transition
                            "
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            )}
          </ul>

          {/* PREMIUM HAMBURGER */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="sm:hidden flex flex-col justify-center items-center w-10 h-10 relative"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="absolute w-8 h-[3px] bg-white rounded"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-8 h-[3px] bg-white rounded"
              transition={{ duration: 0.2 }}
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="absolute w-8 h-[3px] bg-white rounded"
              transition={{ duration: 0.3 }}
            />
          </button>

        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="
              fixed inset-0 z-[99998]
              bg-black/90 backdrop-blur-2xl
              px-10 pt-40
              flex flex-col gap-10
            "
          >
            {NavItems.map((item) =>
              item.type !== "dropdown" ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    to={item.href ?? "#"}
                    onClick={() => setOpen(false)}
                    className="text-white text-[2rem] font-semibold"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <div key={item.label}>
                  <button
                    onClick={() =>
                      setOpenDropdownMobile(
                        openDropdownMobile === item.label ? null : item.label
                      )
                    }
                    className="
                      w-full text-left 
                      flex justify-between items-center
                      text-white text-[2rem] font-semibold
                    "
                  >
                    {item.label}
                    <ChevronDown
                      className={`transition ${
                        openDropdownMobile === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openDropdownMobile === item.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35 }}
                        className="pl-4 mt-3 flex flex-col gap-4"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.link}
                            to={child.link}
                            onClick={() => setOpen(false)}
                            className="text-white/80 text-[1.7rem] hover:text-white"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
