import React from "react";
import { motion } from "framer-motion";
import com from "../../../assets/images/com.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-[#CCCCCC] flex flex-col items-center justify-center px-8 py-24"
    >
      {/* === Centered Title === */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-5xl md:text-6xl font-bold mb-16 text-center"
      >
        À <span className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">Propos</span>
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
          <p className="text-[#CCCCCC] text-xl leading-relaxed text-justify">
            Je suis{" "}
            <span className="font-semibold bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
              Hiba Hnaine
            </span>
            , développeuse passionnée par le web moderne.
            Je crée des solutions intuitives, performantes et élégantes
            en alliant créativité et précision technique.
          </p>

          <div className="space-y-5 pt-4">
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
                className="flex items-center gap-3"
              >
                <div className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] w-7 h-7 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-black text-sm"></i>
                </div>
                <span className="text-[#CCCCCC] text-lg">{item}</span>
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
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0080] to-[#00FFFF] text-black font-semibold py-4 px-10 rounded-full hover:shadow-[0_0_25px_#FF0080] transition-all duration-300"
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
            <div className="absolute -inset-6 bg-gradient-to-r from-[#FF0080] to-[#00FFFF] rounded-3xl opacity-30 blur-2xl"></div>

            <div className="relative h-[30rem] w-[30rem] rounded-3xl overflow-hidden border-4 border-[#1A1A1A] shadow-2xl bg-[#1A1A1A]">
              <img
                src={com}
                alt="Hiba Hnaine"
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
