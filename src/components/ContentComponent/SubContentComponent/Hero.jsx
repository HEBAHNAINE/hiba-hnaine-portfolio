import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../../../assets/images/me.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="w-full max-w-7xl px-5 sm:px-10 md:px-16 lg:px-20 py-16 md:py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* === TEXT === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6"
        >
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-[#CCCCCC]">
            <span className="block">Hiba</span>

            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF0080, #00FFFF)",
                fontWeight: "900",
              }}
            >
              Hnaine
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#CCCCCC]">
            💻 Développeuse Full Stack
          </h2>

          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 text-[#A3A3A3]">
            Passionnée par la création d’expériences web modernes, élégantes et performantes,
            avec un style futuriste et une touche neon.
          </p>

          {/* === BUTTONS === */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4">

            {/* Primary Button */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" })
              }
              className="font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full text-lg text-black flex items-center gap-3 justify-center"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF0080, #00FFFF)",
                boxShadow: "0 0 18px rgba(255, 0, 128, 0.6)",
              }}
            >
              <i className="fa-solid fa-paper-plane"></i>
              Commencer un projet
            </motion.button>

            {/* Secondary Button */}
            <motion.a
              whileHover={{
                scale: 1.08,
                borderColor: "#00FFFF",
                color: "#00FFFF",
                boxShadow: "0 0 18px rgba(0,255,255,0.4)",
              }}
              href="/CV_Hiba_Hnaine.pdf"
              download="CV_Hiba_Hnaine.pdf"
              className="font-bold py-3 sm:py-4 px-8 sm:px-10 rounded-full border-2 text-lg flex items-center gap-3 justify-center"
              style={{
                borderColor: "#FF008080",
                color: "#CCCCCC",
                backgroundColor: "rgba(255,255,255,0.03)",
              }}
            >
              <i className="fa-solid fa-file-arrow-down"></i>
              Télécharger CV📄
            </motion.a>
          </div>
        </motion.div>

        {/* === IMAGE === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">

            {/* IMAGE CARD */}
            <div
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-3xl"
              style={{
                backgroundColor: "#1A1A1A",
                border: "3px solid #FF008060",
                boxShadow: "0 0 22px #FF008060, inset 0 0 22px #00FFFF40",
              }}
            >
              <img
                src={profilePhoto}
                alt="Hiba Hnaine"
                className="w-full h-full object-cover"
              />
            </div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:-left-5 p-4 rounded-2xl backdrop-blur-md border shadow-lg"
              style={{
                backgroundColor: "#1A1A1AEE",
                borderColor: "#FF0080",
              }}
            >
              <div className="text-center">
                <div className="font-bold text-lg sm:text-xl text-[#CCCCCC]">Full Stack</div>
                <div className="text-sm text-[#A3A3A3]">Developer</div>
              </div>
            </motion.div>

            {/* AVAILABLE */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-5 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 p-3 rounded-full backdrop-blur-md border shadow-lg"
              style={{
                backgroundColor: "#1A1A1ACC",
                borderColor: "#00FFFF",
              }}
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{ backgroundColor: "#00FFFF" }}
                ></div>
                <span className="font-semibold text-[#CCCCCC] text-sm sm:text-base">
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
