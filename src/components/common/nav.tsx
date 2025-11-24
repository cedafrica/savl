
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { ChevronDown } from "lucide-react";

const Nav = () => {
    const [open, setOpen] = useState(false);
    const [openApplication, setOpenApplication] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const toggleNav = () => {
        setOpen(!open);
    };

    // Close nav when route changes
    useEffect(() => {
        setOpen(false);
        setOpenApplication(false);
    }, [location.pathname]);

    useEffect(() => {
        if (open) {
            document.body.style.position = "fixed";
        } else {
            document.body.style.position = "static";
        }
    }, [open]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NavItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "About Us",
            href: "/about",
        },
        {
            label: "Services",
            href: "/services",
        },
        {
            label: "Projects",
            href: "/projects",
        },
        {
            label: "Partners",
            href: "/partnership",
        },
        {
            label: "Applications",
            href: "/",
            type: "dropdown",
            children: [
                {
                    label: "Houses of Worship",
                    link: "house-of-worship",
                },
                {
                    label: "Cafés & Restaurants",
                    link: "cafes-restaurants"
                },
                {
                    label: "Night Clubs & Lounges ",
                    link: "night-clubs-lounges"
                },
                {
                    label: "Large Congregations ",
                    link: "large-congregations"
                },
                {
                    label: "Hotels & Resorts",
                    link: "hotels-resorts"
                },
                {
                    label: "Auditoriums & Concert Halls",
                    link: "auditoriums-concert-halls"
                },
                {
                    label: "Concerts & Live Events",
                    link: "concerts-live-events"
                },
            ]
        },
        {
            label: "News",
            href: "/news",
        },
        {
            label: "Contact",
            href: "/contact",
        }, 
    ]
    return (
        <nav
  className={`
    fixed top-0 left-0 w-full z-50 transition-all duration-500
    ${scrolled ? "bg-black/30 backdrop-blur-2xl border-b border-white/10" : "bg-transparent border-b border-white/10"}
  `}
>
  <div className="max-w-[1500px] mx-auto px-8 sm:px-20 py-5 flex items-center justify-between">
    {/* LOGO */}
    <img src="/spectra-logo.svg" alt="logo" className="w-40 sm:w-56" />

    {/* DESKTOP NAV */}
    <ul className="hidden sm:flex items-center gap-12 text-white tracking-wide">
      {NavItems.map((item) => (
        <li key={item.label} className="relative group select-none">
          {item.type === "dropdown" ? (
            <>
              <button className="text-lg font-medium flex items-center gap-2 hover:opacity-70 transition">
                Application
                <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-4 transition-all duration-500 bg-white text-black rounded-2xl shadow-[0_12px_45px_-10px_rgba(0,0,0,0.45)] px-10 py-8 w-[320px]">
                <div className="flex flex-col gap-6">
                  {item.children.map((child, idx) => (
                    <a
                      key={idx}
                      href={`/application/${child.link}`}
                      className="text-[17px] font-semibold hover:text-neutral-600 transition"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link to={item.href} className="text-lg font-medium hover:opacity-70 transition">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>

    {/* MOBILE HAMBURGER */}
    <button
      onClick={toggleNav}
      className="sm:hidden z-50 w-10 h-10 flex flex-col justify-between relative"
    >
      <span className={`h-[3px] bg-white transition-all duration-500 origin-left ${open ? "rotate-45 translate-y-3" : ""}`}></span>
      <span className={`h-[3px] bg-white transition-all duration-500 ${open ? "opacity-0" : ""}`}></span>
      <span className={`h-[3px] bg-white transition-all duration-500 origin-left ${open ? "-rotate-45 -translate-y-3" : ""}`}></span>
    </button>
  </div>

  {/* MOBILE MENU OVERLAY */}
  <div
    className={`sm:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-md transform transition-transform duration-500 ease-in-out ${open ? "translate-x-0" : "translate-x-full"} flex flex-col overflow-y-auto`}
  >
    <ul className="flex flex-col gap-10 px-10 pt-32 text-white text-2xl tracking-wide">
      {NavItems.map((item, idx) => (
        <li key={item.label} className={`flex flex-col transition-all duration-500 delay-${idx * 75}`}>
          {item.type === "dropdown" ? (
            <>
              <button
                onClick={() => setOpenApplication(!openApplication)}
                className="flex items-center gap-3 text-white font-semibold text-3xl"
              >
                Application
                <ChevronDown className={`w-7 h-7 transition-transform duration-300 ${openApplication ? "rotate-180" : ""}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-500 ml-2 ${openApplication ? "mt-6 max-h-[1000px]" : "max-h-0 mt-0"}`}>
                <div className="flex flex-col gap-8 text-white/80 text-2xl">
                  {item.children.map((child, idx2) => (
                    <Link key={idx2} to={`/application/${child.link}`} className="hover:text-white transition">
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <Link to={item.href} className="text-white text-2xl font-semibold">
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  </div>
</nav>



    );
}

export default Nav;