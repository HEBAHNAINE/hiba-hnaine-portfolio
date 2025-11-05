import React from "react";
import { motion } from "framer-motion";
import com from "../../../assets/images/com.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 text-gray-800 flex flex-col items-center justify-center px-8 py-24"
    >
      {/* === Centered Title === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-16 text-center"
      >
        À <span className="text-blue-700">Propos</span>
      </motion.h1>

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-center gap-20">
        {/* === Text Content === */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 space-y-8"
        >
          <p className="text-gray-700 text-xl leading-relaxed text-justify">
            Je suis{" "}
            <span className="font-semibold text-blue-700">Hiba Hnaine</span>,
            développeuse passionnée par le web et les technologies modernes.
            J'aime concevoir des solutions innovantes, esthétiques et
            performantes qui allient créativité et sens du détail. Mon objectif
            est de transformer des idées en expériences numériques fluides et
            intuitives, centrées sur l'utilisateur.
          </p>

          <div className="space-y-5 pt-4">
            {[
              "Développement Full Stack et intégration front-back harmonieuse",
              "Création d’interfaces modernes, fluides et responsives",
              "Mise en place d’architectures fiables et performantes",
              "Amélioration continue de l’expérience utilisateur",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="bg-gradient-to-r from-green-400 to-blue-500 w-7 h-7 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-white text-sm"></i>
                </div>
                <span className="text-gray-700 text-lg">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="pt-6"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/CV_Hiba_Hnaine.pdf"
              download="CV_Hiba_Hnaine.pdf"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-green-400 text-white font-semibold py-4 px-10 rounded-full hover:shadow-xl transition-all duration-300"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              Télécharger mon CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* === Image Section === */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2 flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl opacity-25 blur-2xl"></div>
            <div className="relative h-[30rem] w-[30rem] rounded-3xl overflow-hidden border-4 border-white/60 shadow-2xl bg-white/20 backdrop-blur-sm">
              <img
                src={com}
                alt="Hiba Hnaine"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
