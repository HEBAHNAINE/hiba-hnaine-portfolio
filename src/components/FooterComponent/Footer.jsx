import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-10 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* COPYRIGHT */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#CCCCCC] text-sm mb-4 md:mb-0"
          >
            © {currentYear}{" "}
            <span className="font-semibold bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
              Hiba Hanine
            </span>
            . All rights reserved.
          </motion.p>

          {/* SOCIAL LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {[
              {
                icon: "fa-brands fa-github",
                url: "https://github.com/HEBAHNAINE",
              },
              {
                icon: "fa-brands fa-linkedin",
                url: "https://www.linkedin.com/in/hiba-hnaine-3a1a63350/",
              },
              {
                icon: "fa-solid fa-envelope",
                url: "mailto:hnainehiba@gmail.com",
              },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                whileHover={{ scale: 1.2 }}
                className="text-[#CCCCCC] hover:text-white transition-all"
              >
                <i
                  className={`${social.icon} text-xl hover:drop-shadow-[0_0_10px_#FF0080]`}
                ></i>
              </motion.a>
            ))}
          </motion.div>

          {/* SCROLL TO TOP */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="hidden md:flex items-center text-[#CCCCCC] hover:text-white transition-all mt-4 md:mt-0"
          >
            <span className="text-sm mr-2">Back to top</span>
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </motion.button>
        </div>

        {/* BOTTOM TEXT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8 pt-6 border-t border-[#222]"
        >
          <p className="text-sm text-[#CCCCCC]">
            Built with ❤️ using{" "}
            <span className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent font-semibold">
              React & TailwindCSS
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
