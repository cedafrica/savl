import MaxContainer from "./max-container";
import { Link } from "react-router-dom";
import { Mail, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-black 
        text-white 
        pt-24 pb-16 
      "
    >
      <MaxContainer>
        {/* GRID */}
        <div className="
          grid sm:grid-cols-4 grid-cols-2 
          gap-y-20 sm:gap-y-0 
          gap-x-10 sm:gap-x-20
        ">

          {/* LOGO + DESCRIPTION */}
          <div className="max-w-[32rem]">
            <img
              src="/spectra-logo.svg"
              alt="Spectra AVL"
              className="w-[16rem] sm:w-[20rem] mb-6 opacity-90"
            />

            <p className="text-[1.5rem] sm:text-[1.7rem] text-gray-400 leading-relaxed">
              Crafting immersive audiovisual environments through precision engineering, world-class technology, and refined spatial design.
            </p>

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="
                    w-12 h-12 rounded-full 
                    bg-white/5 border border-white/10 
                    flex items-center justify-center 
                    hover:bg-white/10 hover:scale-105 
                    transition-all duration-300
                  "
                >
                  <Icon className="w-5 h-5 text-gray-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="
              text-[1.8rem] sm:text-[2rem] 
              font-semibold mb-6 tracking-wide 
              text-white
            ">
              Quick Links
            </h2>

            <ul className="space-y-3">
              {[
                { name: "Home", link: "#" },
                { name: "About Us", link: "/about" },
                { name: "Services", link: "#" },
                { name: "Projects", link: "#" },
                { name: "Brands", link: "#" },
                { name: "Contact", link: "#" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.link}
                    className="
                      text-gray-400 text-[1.5rem] sm:text-[1.7rem] 
                      hover:text-white transition-colors duration-300
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h2 className="
              text-[1.8rem] sm:text-[2rem] 
              font-semibold mb-6 tracking-wide 
              text-white
            ">
              Our Services
            </h2>

            <ul className="space-y-3">
              {[
                "Video & Projection",
                "Audio Systems",
                "Lighting Solutions",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="
                    text-gray-400 text-[1.5rem] sm:text-[1.7rem] 
                    hover:text-white transition-colors duration-300
                  "
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="
              text-[1.8rem] sm:text-[2rem] 
              font-semibold mb-6 tracking-wide 
              text-white
            ">
              Get in Touch
            </h2>

            <Link
              to="#"
              className="
                text-gray-300 text-[1.5rem] sm:text-[1.7rem] 
                hover:text-white transition-colors 
                flex items-center gap-3
              "
            >
              <Mail className="w-5 h-5" />
              projects@savl.pro
            </Link>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-[1px] bg-white/10 mt-20 mb-6"></div>

        {/* COPYRIGHT ROW */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-[1.4rem] sm:text-[1.5rem] gap-4">
          <p>© {new Date().getFullYear()} Spectra AVL. All Rights Reserved.</p>

          <div className="flex gap-8">
            <Link to="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </MaxContainer>
    </footer>
  );
};

export default Footer;
