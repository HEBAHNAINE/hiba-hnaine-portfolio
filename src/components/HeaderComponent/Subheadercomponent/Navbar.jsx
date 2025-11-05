import React, { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "competences" },
    { name: "Contact", href: "contact" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/hiba-hnaine-3a1a63350/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
    { href: "https://www.instagram.com/hebahnai_/", icon: "fa-brands fa-instagram", label: "Instagram" },
    { href: "https://github.com/HEBAHNAINE", icon: "fa-brands fa-github", label: "GitHub" },
    { href: "mailto:hnainehiba@gmail.com", icon: "fa-solid fa-envelope", label: "Email" },
  ];

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 text-white fixed top-0 left-0 z-50 bg-black/95 backdrop-blur-sm shadow-md">
      
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center space-x-2 cursor-pointer"
      >
        <a href="/" className="flex items-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-extrabold text-2xl">
            HNAINE
          </span>
          <span className="text-gray-200 ml-1 font-medium tracking-widest text-lg">
            HIBA
          </span>
        </a>
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="hidden lg:flex justify-center"
      >
        <ul className="flex space-x-10 text-base">
          {navitems.map((item, index) => (
            <li key={index} className="relative">
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={500}
                onSetActive={() => setActive(item.href)}
                className={`cursor-pointer transition-colors duration-300 ${
                  active === item.href ? "text-blue-400 font-semibold" : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {item.name}
              </Link>
              {active === item.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Social Icons */}
      <div className="hidden lg:flex items-center space-x-5 text-xl">
        {socialLinks.map((s, i) => (
          <a
            key={i}
            href={s.href}
            aria-label={s.label}
            className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            target={s.href.startsWith("http") ? "_blank" : "_self"}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : ""}
          >
            <i className={s.icon}></i>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div
        className="lg:hidden text-3xl text-blue-400 cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-95 z-40 flex flex-col items-center justify-center"
        >
          <ul className="flex flex-col items-center space-y-8 text-xl">
            {navitems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => {
                    setActive(item.href);
                    setIsOpen(false);
                  }}
                  className={`${
                    active === item.href ? "text-blue-400 font-semibold" : "text-gray-300"
                  } hover:text-blue-400 transition-colors duration-300`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="flex items-center space-x-6 text-2xl mt-8">
              {socialLinks.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  target={s.href.startsWith("http") ? "_blank" : "_self"}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : ""}
                >
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </ul>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
