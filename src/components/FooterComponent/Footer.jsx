import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Copyright */}
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black font-medium text-sm mb-4 md:mb-0"
          >
            © {currentYear} <span className="font-semibold">Hiba Hanine</span>. All rights reserved.
          </motion.p>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex space-x-5"
          >
            {[
              { icon: "fa-brands fa-github", url: "https://github.com/HEBAHNAINE", label: "GitHub" },
              { icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/hiba-hnaine-3a1a63350/#", label: "LinkedIn" },
              { icon: "fa-solid fa-envelope", url: "mailto:hnainehiba@gmail.com", label: "Email" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="text-black hover:scale-110 transform transition-transform duration-300"
              >
                <i className={`${social.icon} text-xl`}></i>
              </a>
            ))}
          </motion.div>

          {/* Back to Top */}
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden md:flex items-center text-black hover:opacity-80 transition-opacity duration-300 mt-4 md:mt-0"
          >
            <span className="text-sm mr-2">Back to top</span>
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </motion.button>
        </div>

        {/* Additional Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-6 pt-6 border-t border-white/40"
        >
          <p className="text-sm font-medium text-black">
            Built with passion using React & TailwindCSS 💻
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
