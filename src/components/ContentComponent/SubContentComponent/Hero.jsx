import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../../../assets/images/me.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      <div className="w-full max-w-7xl px-6 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20 grid lg:grid-cols-2 gap-12 items-center mx-auto">

        {/* === TEXT === */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-8"
        >
          <h1
            className="mt-10 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            style={{ color: "#CCCCCC" }}
          >
            <span className="block">Hiba</span>

            {/* Gradient Text */}
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

          <h2
            className="text-3xl md:text-4xl font-semibold"
            style={{ color: "#CCCCCC" }}
          >
            💻 Développeuse Full Stack
          </h2>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0"
            style={{ color: "#A3A3A3" }}
          >
            Passionnée par la création d’expériences web modernes,
            élégantes et performantes, avec un style futuriste et une touche neon.
          </p>

          {/* === BUTTONS === */}
          <div className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center lg:justify-start pt-4">

            {/* Primary Button – Gradient */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="font-bold py-4 px-10 rounded-full transition-all duration-300 flex items-center gap-3 justify-center text-lg text-black"
              style={{
                backgroundImage: "linear-gradient(90deg, #FF0080, #00FFFF)",
                boxShadow: "0 0 18px rgba(255, 0, 128, 0.6)",
              }}
            >
              <i className="fa-solid fa-paper-plane"></i>
              Commencer un projet
            </motion.button>

            {/* Secondary Button – Outline neon */}
            <motion.a
              whileHover={{
                scale: 1.08,
                borderColor: "#00FFFF",
                color: "#00FFFF",
                boxShadow: "0 0 18px rgba(0,255,255,0.4)",
              }}
              href="/CV_Hiba_Hnaine.pdf"
              download="CV_Hiba_Hnaine.pdf"
              className="font-bold py-4 px-10 rounded-full border-2 transition-all duration-300 flex items-center gap-3 justify-center text-lg"
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

        {/* === IMAGE SECTION === */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center items-center"
        >
          <div className="relative">

            {/* IMAGE CONTAINER */}
            <div
              className="relative h-80 w-80 md:h-[24rem] md:w-[24rem] rounded-3xl overflow-hidden backdrop-blur-md shadow-3xl"
              style={{
                backgroundColor: "#1A1A1A",
                border: "3px solid #FF008060",
                boxShadow:
                  "0 0 25px #FF008060, 0 0 25px #00FFFF40 inset",
              }}
            >
              <img
                src={profilePhoto}
                alt="Hiba Hnaine"
                className="h-full w-full object-cover"
              />
            </div>

            {/* BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="absolute -bottom-5 -left-5 rounded-2xl p-5 shadow-lg backdrop-blur-md border"
              style={{
                backgroundColor: "#1A1A1AEE",
                borderColor: "#FF0080",
              }}
            >
              <div className="text-center">
                <div
                  className="font-bold text-xl"
                  style={{ color: "#CCCCCC" }}
                >
                  Full Stack
                </div>
                <div
                  className="text-sm"
                  style={{ color: "#A3A3A3" }}
                >
                  Developer
                </div>
              </div>
            </motion.div>

            {/* AVAILABILITY */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="absolute -top-5 -right-5 rounded-full p-4 shadow-lg backdrop-blur-md border"
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
                <span
                  className="font-semibold"
                  style={{ color: "#CCCCCC" }}
                >
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
