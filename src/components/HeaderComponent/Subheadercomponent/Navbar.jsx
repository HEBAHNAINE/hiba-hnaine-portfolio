import React, { useState, useCallback } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { name: "Home", href: "home", icon: "fa-house" },
    { name: "About", href: "about", icon: "fa-user" },
    { name: "Projects", href: "projects", icon: "fa-briefcase" },
    { name: "Skills", href: "competences", icon: "fa-code" },
    { name: "Contact", href: "contact", icon: "fa-envelope" },
  ];

  const socialLinks = [
    { href: "https://www.linkedin.com/in/hiba-hnaine-3a1a63350/", icon: "fa-brands fa-linkedin", label: "LinkedIn" },
    { href: "https://www.instagram.com/hebahnai_/", icon: "fa-brands fa-instagram", label: "Instagram" },
    { href: "https://github.com/HEBAHNAINE", icon: "fa-brands fa-github", label: "GitHub" },
    { href: "mailto:hnainehiba@gmail.com", icon: "fa-solid fa-envelope", label: "Email" },
  ];

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-between items-center px-6 md:px-12 py-4 text-white fixed top-0 left-0 z-50 bg-blue-900 shadow-2xl border-b border-blue-700"
    >
      
      {/* Logo */}
      <motion.div 
        className="flex items-center space-x-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-blue-900 font-bold text-sm">H</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-xl tracking-tight">
              HNAINE
            </span>
            <span className="text-blue-200 text-xs font-medium tracking-wider">
              HIBA
            </span>
          </div>
        </a>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex justify-center">
        <ul className="flex space-x-8 text-sm font-medium">
          {navitems.map((item, index) => (
            <li key={index} className="relative">
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                onSetActive={() => setActive(item.href)}
                className={`cursor-pointer transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg ${
                  active === item.href 
                    ? "text-white bg-blue-700" 
                    : "text-blue-200 hover:text-white hover:bg-blue-800"
                }`}
              >
                <i className={`fa-solid ${item.icon} text-xs`}></i>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Social Icons */}
      <div className="hidden lg:flex items-center space-x-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-xl flex items-center justify-center text-white border border-blue-600 transition-all duration-300"
          >
            <i className={social.icon}></i>
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden w-12 h-12 bg-blue-800 hover:bg-blue-700 rounded-xl flex items-center justify-center text-white border border-blue-600 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark text-lg"></i>
        ) : (
          <i className="fa-solid fa-bars text-lg"></i>
        )}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black z-40"
              onClick={closeMenu}
            />

            {/* Menu Mobile */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-blue-900 shadow-2xl border-l border-blue-700 z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-blue-700 bg-blue-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-blue-900 font-bold">H</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold">Navigation</span>
                  </div>
                </div>
                
                <button
                  onClick={closeMenu}
                  className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 flex flex-col space-y-2 p-6 bg-blue-900">
                {navitems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    spy={true}
                    smooth={true}
                    duration={600}
                    offset={-80}
                    onClick={closeMenu}
                    className={`flex items-center gap-4 w-full px-4 py-4 rounded-xl transition-all duration-300 ${
                      active === item.href
                        ? "bg-blue-700 text-white"
                        : "bg-blue-800 text-blue-200 hover:bg-blue-700 hover:text-white"
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} w-5 text-center`}></i>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 border-t border-blue-700 bg-blue-800">
                <p className="text-blue-200 text-sm mb-4 text-center">Réseaux sociaux</p>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-12 h-12 bg-blue-700 hover:bg-blue-600 rounded-xl flex items-center justify-center text-white border border-blue-600 transition-all duration-300"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;