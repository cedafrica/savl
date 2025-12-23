import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = { label: string; link: string };
type NavItem = {
  label: string;
  href?: string;
  type?: "dropdown";
  children?: NavChild[];
};



const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);
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
        { label: "Cafés & Restaurants", link: "/application/cafes-restaurants" },
        { label: "Night Clubs & Lounges", link: "/application/night-clubs-lounges" },
        { label: "Large Congregations", link: "/application/large-congregations" },
        { label: "Hotels & Resorts", link: "/application/hotels-resorts" },
        { label: "Auditoriums & Concert Halls", link: "/application/auditoriums-concert-halls" },
        { label: "Concerts & Live Events", link: "/application/concerts-live-events" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  /* Scroll detection */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock scroll on mobile menu */
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
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              : "bg-white"
          }
        `}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="max-w-[1500px] mx-auto flex justify-between items-center py-5">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
           <motion.img
  src="/spectra-logo.svg"
  alt="Spectra AVL"
  className={`
    w-[140px] sm:w-[200px]
    transition-[width] duration-300
    ${scrolled ? "sm:w-[180px]" : ""}
  `}
  style={{
    imageRendering: "auto",
    shapeRendering: "geometricPrecision",
  }}
/>

          </Link>

          {/* DESKTOP NAV */}
          <ul className="hidden sm:flex items-center gap-12 text-black">
            {NavItems.map((item) =>
              item.type === "dropdown" ? (
                <li key={item.label} className="relative">
                  <button
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    className="
                      text-[1.45rem] font-medium
                      flex items-center gap-2
                      transition-colors
                      hover:text-[#00569e]
                    "
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* DROPDOWN */}
                  <AnimatePresence>
                    {openDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="
                          absolute left-0 top-full mt-4
                          w-[26rem]
                          bg-white
                          rounded-xl shadow-xl
                          border border-slate-200
                          overflow-hidden
                          p-4 space-y-2
                        "
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.link}
                            to={child.link}
                            className="
                              block px-3 py-2
                              text-[1.4rem] font-medium
                              text-slate-700
                              hover:text-[#00569e]
                              hover:bg-slate-100
                              rounded-md transition
                            "
                            onClick={() => setOpenDropdown(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    to={item.href ?? "#"}
                    className="
                      text-[1.45rem] font-medium
                      transition-colors
                      hover:text-[#00569e]
                    "
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="sm:hidden flex flex-col gap-1.5 w-9"
          >
            <span className="w-full h-[3px] bg-black block rounded"></span>
            <span className="w-full h-[3px] bg-black block rounded"></span>
            <span className="w-full h-[3px] bg-black block rounded"></span>
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="
              fixed inset-0 z-[99999]
              bg-white
              flex flex-col pt-32 px-10
            "
          >
            {/* CLOSE */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-10 right-10 text-black text-4xl"
            >
              &times;
            </button>

            <div className="flex flex-col gap-8 text-black text-3xl">
              {NavItems.map((item) =>
                item.type === "dropdown" ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenDropdown((o) => !o)}
                      className="
                        flex justify-between items-center w-full
                        font-semibold text-[2rem]
                        hover:text-[#00569e]
                        transition
                      "
                    >
                      {item.label}
                      <ChevronDown
                        className={`transition-transform ${
                          openDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {openDropdown && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 ml-3 flex flex-col gap-3"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.link}
                              to={child.link}
                              className="
                                text-slate-600 text-[1.7rem]
                                hover:text-[#00569e]
                                transition
                              "
                              onClick={() => setOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href ?? "#"}
                    className="
                      font-semibold text-[2rem]
                      hover:text-[#00569e]
                      transition
                    "
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
