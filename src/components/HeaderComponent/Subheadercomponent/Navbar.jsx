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
      className="w-full flex justify-between items-center px-6 md:px-12 py-4 text-gray-800 fixed top-0 left-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200"
    >
      
      {/* Logo */}
      <motion.div 
        className="flex items-center space-x-2 cursor-pointer"
        whileHover={{ scale: 1.05 }}
      >
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-gray-900 font-bold text-xl tracking-tight">
              HNAINE
            </span>
            <span className="text-gray-500 text-xs font-medium tracking-wider">
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
                    ? "text-emerald-600 bg-emerald-50 border border-emerald-200" 
                    : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50"
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
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ scale: 1.1, y: -2 }}
            className="w-9 h-9 bg-gray-100 hover:bg-emerald-50 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 border border-gray-200 hover:border-emerald-200 transition-all duration-300"
          >
            <i className={`${social.icon} text-sm`}></i>
          </motion.a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-600 border border-gray-200 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <i className="fa-solid fa-xmark"></i>
        ) : (
          <i className="fa-solid fa-bars"></i>
        )}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Menu Mobile */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl border-l border-gray-200 z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">H</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-bold">Menu</span>
                    <span className="text-gray-500 text-xs">Navigation</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600"
                >
                  <i className="fa-solid fa-xmark text-sm"></i>
                </motion.button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 flex flex-col space-y-1 p-6 bg-white">
                {navitems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      spy={true}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={closeMenu}
                      className={`flex items-center gap-4 w-full px-4 py-3 rounded-xl transition-all duration-300 ${
                        active === item.href
                          ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <i className={`fa-solid ${item.icon} w-5 text-center text-sm`}></i>
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-600 text-sm mb-4 text-center">Me suivre</p>
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="w-10 h-10 bg-white hover:bg-emerald-50 rounded-lg flex items-center justify-center text-gray-600 hover:text-emerald-600 border border-gray-200 hover:border-emerald-200 transition-all duration-300 shadow-sm"
                    >
                      <i className={`${social.icon} text-sm`}></i>
                    </motion.a>
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