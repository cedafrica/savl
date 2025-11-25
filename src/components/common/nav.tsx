import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [openApplication, setOpenApplication] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const NavItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Partners", href: "/partnership" },
    {
      label: "Applications",
      type: "dropdown",
      children: [
        { label: "Houses of Worship", link: "house-of-worship" },
        { label: "Cafés & Restaurants", link: "cafes-restaurants" },
        { label: "Night Clubs & Lounges", link: "night-clubs-lounges" },
        { label: "Large Congregations", link: "large-congregations" },
        { label: "Hotels & Resorts", link: "hotels-resorts" },
        { label: "Auditoriums & Concert Halls", link: "auditoriums-concert-halls" },
        { label: "Concerts & Live Events", link: "concerts-live-events" },
      ],
    },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black/60"
        }`}
      >
        <div className="max-w-[1500px] mx-auto px-8 sm:px-20 py-5 flex items-center justify-between relative">
          {/* Logo */}
          <img
            src="/spectra-logo.svg"
            alt="logo"
            className="w-40 sm:w-56 transition-all duration-300 hover:scale-105"
          />

          {/* Desktop Menu */}
          <ul className="hidden sm:flex items-center gap-12 text-white tracking-wide">
            {NavItems.map((item) =>
              item.type === "dropdown" ? (
                <li key={item.label} className="relative group select-none">
                  <button className="text-lg font-medium flex items-center gap-2 hover:text-gray-300 transition duration-300">
                    {item.label}
                    <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                  {/* Dropdown */}
                  <div className="absolute left-0 top-full mt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 bg-white text-black rounded-xl shadow-lg px-6 py-4 w-64">
                    <div className="flex flex-col gap-3">
                      {item.children.map((child) => (
                        <a
                          key={child.link}
                          href={`/application/${child.link}`}
                          className="hover:text-gray-700 font-semibold transition duration-200"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-lg font-medium hover:text-gray-300 transition duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="sm:hidden z-[10001] relative w-10 h-10 flex flex-col justify-between items-center"
          >
            {/* Hamburger to X animation */}
            <span
              className={`h-[3px] w-full bg-white block transition-all duration-300 ${
                open ? "rotate-45 translate-y-2.5" : ""
              }`}
            />
            <span
              className={`h-[3px] w-full bg-white block transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[3px] w-full bg-white block transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Fullscreen */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full z-[10000] bg-black/95 backdrop-blur-md transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } flex flex-col`}
      >
        {/* Optional: Close button on top-right */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center z-[10001]"
        >
          <span className="text-white text-3xl font-bold">&times;</span>
        </button>

        <div className="px-8 pt-32 flex flex-col gap-8 text-white text-2xl">
          {NavItems.map((item) => (
            <div key={item.label} className="flex flex-col">
              {item.type === "dropdown" ? (
                <>
                  <button
                    onClick={() => setOpenApplication(!openApplication)}
                    className="flex justify-between items-center font-semibold w-full py-2 hover:text-gray-300 transition duration-300"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-6 h-6 transition-transform ${
                        openApplication ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ml-2 ${
                      openApplication ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-2">
                      {item.children.map((child) => (
                        <a
                          key={child.link}
                          href={`/application/${child.link}`}
                          className="text-white/80 hover:text-white py-1 transition duration-200"
                          onClick={() => setOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <a
                  href={item.href}
                  className="py-2 font-semibold hover:text-gray-300 transition duration-300"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;
