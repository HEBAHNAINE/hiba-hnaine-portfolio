import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../../../assets/images/me.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 overflow-hidden"
    >
      {/* === Container Principal === */}
      <div className="w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 py-10 md:py-16 grid lg:grid-cols-2 gap-10 items-center justify-center mx-auto">
        {/* === Texte principal === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <h1 className=" mt-20 text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
            <span className="block">Hiba</span>
            <span className="block text-blue-700">Hnaine</span>
          </h1>

          <h2 className="text-3xl md:text-4xl text-gray-800 font-semibold">
            💻 Développeuse Full Stack
          </h2>

          <p className="text-gray-700 text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Passionnée par le développement web, je crée des expériences
            digitales modernes et intuitives, alliant créativité, performance et
            sens du détail pour donner vie à des projets uniques et inspirants.
            👩‍💻
          </p>

          {/* === Boutons === */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold py-4 px-10 rounded-full hover:shadow-2xl transition-all duration-300 flex items-center gap-3 justify-center text-lg"
            >
              <i className="fa-solid fa-paper-plane"></i>
              Commencer un projet
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/CV_Hiba_Hnaine.pdf"
              download="CV_Hiba_Hnaine.pdf"
              className="bg-white/90 backdrop-blur-md border-2 border-blue-600 text-blue-700 font-bold py-4 px-10 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-3 justify-center text-lg"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              Télécharger CV📄
            </motion.a>
          </div>
        </motion.div>

        {/* === Image Section === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <div className="relative h-80 w-80 md:h-[24rem] md:w-[24rem] rounded-3xl overflow-hidden border-4 border-white/70 shadow-3xl bg-white/30 backdrop-blur-md">
              <img
                src={profilePhoto}
                alt="Hiba Hnaine"
                className="h-full w-full object-cover"
              />
            </div>

            {/* === Floating Badge === */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-5 -left-5 bg-white/90 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/70"
            >
              <div className="text-center">
                <div className="text-blue-600 font-bold text-xl">Full Stack</div>
                <div className="text-gray-600 text-base">Developer</div>
              </div>
            </motion.div>

            {/* === Availability Indicator === */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-5 -right-5 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg border border-white/70"
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-600 text-base font-semibold">
                  Disponible
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
