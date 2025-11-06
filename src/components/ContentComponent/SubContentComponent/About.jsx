import React from "react";
import { motion } from "framer-motion";
import com from "../../../assets/images/com.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-[#CCCCCC] flex flex-col items-center justify-center px-6 sm:px-10 py-24"
    >
      {/* === TITLE === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-16 text-center"
      >
        À{" "}
        <span className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
          Propos
        </span>
      </motion.h1>

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20">

        {/* === TEXT === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8 text-center lg:text-left"
        >
          <p className="text-[#CCCCCC] text-lg sm:text-xl leading-relaxed">
            Je suis{" "}
            <span className="font-semibold bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
              Hiba Hnaine
            </span>
            , développeuse passionnée par le web moderne.
            Je crée des solutions intuitives, performantes et élégantes
            en alliant créativité et précision technique.
          </p>

          {/* === CHECK LIST === */}
          <div className="space-y-4 sm:space-y-5 pt-2">
            {[
              "Développement Full Stack et intégration front-back fluide",
              "Création d’interfaces modernes et ultra responsives",
              "Mise en place d’architectures performantes",
              "Amélioration continue de l’expérience utilisateur",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3 justify-center lg:justify-start"
              >
                <div className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-black text-xs sm:text-sm"></i>
                </div>
                <span className="text-[#CCCCCC] text-base sm:text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

          {/* === BUTTON === */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/CV_Hiba_Hnaine.pdf"
              download="CV_Hiba_Hnaine.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0080] to-[#00FFFF] text-black font-semibold py-3 sm:py-4 px-8 sm:px-10 rounded-full transition-all duration-300"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#FF0080] to-[#00FFFF] rounded-3xl opacity-30 blur-2xl"></div>

            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] rounded-3xl overflow-hidden border-4 border-[#1A1A1A] shadow-2xl bg-[#1A1A1A]">
              <img
                src={com}
                alt="Hiba Hnaine"
                className="w-full h-full object-cover opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
