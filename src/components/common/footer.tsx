import MaxContainer from "./max-container";
import { Link } from "react-router-dom";
import { Mail, Instagram, Linkedin, Youtube, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* SUBTLE LUXURY BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-black" />
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_20%,white,transparent_40%)]" />

      <MaxContainer className="relative z-10 pt-28 pb-16 px-6 sm:px-8 lg:px-0">


        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-20 mb-24">

          {/* BRAND BLOCK */}
          <div className="lg:col-span-2">
            <img
              src="/spectra-logo.svg"
              alt="Spectra AVL"
              className="w-[18rem] mb-8 opacity-90"
            />

            <p className="text-gray-400 text-[1.6rem] leading-relaxed max-w-[42rem]">
              Spectra AVL designs and delivers refined audiovisual environments
              through precision engineering, world-class technology, and a deep
              understanding of space, sound, and experience.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <Link
                  key={i}
                  to="#"
                  className="
                    group w-12 h-12 rounded-full
                    border border-white/15
                    flex items-center justify-center
                    hover:border-white/40
                    transition-all duration-300
                  "
                >
                  <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="text-[1.6rem] tracking-wider uppercase text-white/80 mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Services", link: "/services" },
                { name: "Projects", link: "/projects" },
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.link}
                    className="
                      text-gray-400 text-[1.5rem]
                      hover:text-white
                      inline-flex items-center gap-2
                      transition-colors
                    "
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[1.6rem] tracking-wider uppercase text-white/80 mb-6">
              Expertise
            </h3>
            <ul className="space-y-4">
              {[
                "Audio Systems",
                "Video & Projection",
                "Architectural Lighting",
                "System Integration",
                "Performance Calibration",
              ].map((service, i) => (
                <li
                  key={i}
                  className="text-gray-400 text-[1.5rem] hover:text-white transition-colors"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[1.6rem] tracking-wider uppercase text-white/80 mb-6">
              Contact
            </h3>

            <Link
              to="mailto:projects@savl.pro"
              className="
                inline-flex items-center gap-3
                text-gray-300 text-[1.5rem]
                hover:text-white transition-colors
              "
            >
              <Mail className="w-5 h-5" />
              projects@savl.pro
            </Link>

            <p className="mt-6 text-gray-500 text-[1.4rem] max-w-[26rem] leading-relaxed">
              Available for select projects, partnerships, and consultations.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-gray-500 text-[1.4rem]">
          <p>
            © {new Date().getFullYear()} Spectra AVL. All rights reserved.
          </p>

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
