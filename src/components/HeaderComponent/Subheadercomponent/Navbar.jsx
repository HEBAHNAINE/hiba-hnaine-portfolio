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
      className="w-full flex justify-between items-center px-6 md:px-12 py-4 
                 fixed top-0 left-0 z-50 
                 bg-[#000000]/95 backdrop-blur-xl 
                 border-b border-[#1A1A1A]"
    >

      {/* LOGO */}
      <motion.a 
        href="#home"
        whileHover={{ scale: 1.05 }} 
        className="flex items-center gap-2"
      >
        <div className="w-8 h-8 bg-gradient-to-br from-[#FF0080] to-[#00FFFF] rounded-lg shadow-[0_0_12px_#FF0080] flex items-center justify-center">
          <span className="text-black font-bold text-sm">H</span>
        </div>

        <div className="flex flex-col">
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
            HNAINE
          </span>
          <span className="text-[#CCCCCC] text-xs tracking-widest -mt-1">
            HIBA
          </span>
        </div>
      </motion.a>

      {/* DESKTOP NAV */}
      <div className="hidden lg:flex">
        <ul className="flex space-x-8 text-sm font-medium">
          {navitems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.href}
                spy={true}
                smooth={true}
                duration={600}
                offset={-80}
                onSetActive={() => setActive(item.href)}
                className={`cursor-pointer flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
                    ${
                      active === item.href
                        ? "text-[#FFFFFF] border border-[#FF0080] bg-gradient-to-r from-[#FF0080]/20 to-[#00FFFF]/20 shadow-[0_0_10px_#FF0080]"
                        : "text-[#CCCCCC] hover:text-white hover:bg-[#1A1A1A]"
                    }`}
              >
                <i className={`fa-solid ${item.icon} text-xs`}></i>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* SOCIAL ICONS */}
      <div className="hidden lg:flex items-center space-x-3">
        {socialLinks.map((s, i) => (
          <motion.a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            key={i}
            whileHover={{ scale: 1.1 }}
            className="w-9 h-9 bg-[#1A1A1A] text-[#CCCCCC] 
                       rounded-lg flex items-center justify-center 
                       hover:text-white hover:shadow-[0_0_10px_#FF0080] 
                       transition-all duration-300"
          >
            <i className={`${s.icon} text-sm`}></i>
          </motion.a>
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <motion.button
        className="lg:hidden w-10 h-10 bg-[#1A1A1A] text-[#CCCCCC] rounded-lg flex items-center justify-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </motion.button>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed top-0 right-0 h-full w-80 
                         bg-[#0A0A0A] border-l border-[#1A1A1A] 
                         shadow-2xl z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Header */}
              <div className="p-6 border-b border-[#1A1A1A] flex justify-between items-center bg-[#0A0A0A]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#FF0080] to-[#00FFFF] rounded-xl flex items-center justify-center">
                    <span className="text-black font-bold">H</span>
                  </div>
                  <span className="text-white font-bold">Menu</span>
                </div>

                <button
                  onClick={closeMenu}
                  className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-[#CCCCCC]"
                >
                  <i className="fa-solid fa-xmark text-sm"></i>
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 p-6 space-y-2 bg-[#0A0A0A]">
                {navitems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      to={item.href}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      onClick={closeMenu}
                      className="flex items-center gap-4 w-full px-4 py-3 
                                rounded-xl text-[#CCCCCC] hover:bg-[#1A1A1A] 
                                hover:text-white transition-all border border-transparent hover:border-[#FF0080]/30"
                    >
                      <i className={`fa-solid ${item.icon} text-sm`}></i>
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Social Icons in Mobile Menu */}
              <div className="p-6 border-t border-[#1A1A1A] bg-[#0A0A0A]">
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((s, i) => (
                    <motion.a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.label}
                      key={i}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-[#1A1A1A] text-[#CCCCCC] 
                                 rounded-lg flex items-center justify-center 
                                 hover:text-white hover:shadow-[0_0_8px_#FF0080] 
                                 transition-all duration-300"
                    >
                      <i className={`${s.icon} text-base`}></i>
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