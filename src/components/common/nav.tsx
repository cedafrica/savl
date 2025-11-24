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

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Navbar scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-500 ${
        scrolled
          ? "bg-black/30 backdrop-blur-2xl border-b border-white/10"
          : "bg-black/20 sm:bg-transparent border-b border-white/10"
      }`}
    >
      <div className="max-w-[1500px] mx-auto px-8 sm:px-20 py-5 flex items-center justify-between relative">
        {/* Logo */}
        <img src="/spectra-logo.svg" alt="logo" className="w-40 sm:w-56" />

        {/* Desktop Menu */}
        <ul className="hidden sm:flex items-center gap-12 text-white tracking-wide">
          {NavItems.map((item) =>
            item.type === "dropdown" ? (
              <li key={item.label} className="relative group select-none">
                <button className="text-lg font-medium flex items-center gap-2 hover:opacity-70 transition">
                  Applications
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="absolute left-0 top-full mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-4 group-hover:translate-y-0 transition-all duration-500 bg-white text-black rounded-2xl shadow-lg px-6 py-6 w-[320px]">
                  <div className="flex flex-col gap-4">
                    {item.children.map((child) => (
                      <a
                        key={child.link}
                        href={`/application/${child.link}`}
                        className="font-semibold hover:text-neutral-600 transition"
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
                  className="text-lg font-medium hover:opacity-70 transition"
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
          className="sm:hidden z-[10000] relative w-10 h-10 flex flex-col justify-between"
        >
          <span
            className={`h-[3px] w-full bg-white block transition-all duration-500 origin-left ${
              open ? "rotate-45 translate-y-3" : ""
            }`}
          />
          <span
            className={`h-[3px] w-full bg-white block transition-all duration-500 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-[3px] w-full bg-white block transition-all duration-500 origin-left ${
              open ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full h-full z-[9998] bg-black/95 backdrop-blur-md transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        } flex flex-col overflow-y-auto`}
      >
        <ul className="flex flex-col gap-10 px-10 pt-32 text-white text-2xl tracking-wide">
          {NavItems.map((item) => (
            <li key={item.label} className="flex flex-col transition-all">
              {item.type === "dropdown" ? (
                <>
                  <button
                    onClick={() => setOpenApplication(!openApplication)}
                    className="flex items-center gap-3 font-semibold"
                  >
                    Applications
                    <ChevronDown
                      className={`w-7 h-7 transition-transform ${
                        openApplication ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ml-2 ${
                      openApplication ? "mt-4 max-h-[1000px]" : "max-h-0"
                    }`}
                  >
                    <div className="flex flex-col gap-4 text-white/80 text-2xl">
                      {item.children.map((child) => (
                        <a
                          key={child.link}
                          href={`/application/${child.link}`}
                          className="hover:text-white transition"
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
                  className="text-white text-2xl font-semibold"
                >
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
