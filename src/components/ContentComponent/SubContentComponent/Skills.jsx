import React from "react";
import { motion } from "framer-motion";

const Competences = () => {
  const competences = [
    {
      icon: "⚛️",
      title: "Front-end",
      description:
        "React.js · Tailwind CSS · JavaScript · HTML · CSS · Bootstrap · Java Swing",
    },
    {
      icon: "🧠",
      title: "Back-end & API",
      description:
        "Laravel · Node.js · Express.js · Python · Java · RESTful APIs",
    },
    {
      icon: "🗄️",
      title: "Bases de données",
      description: "MySQL · PostgreSQL · Conception de schémas · Optimisation des requêtes",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Design centré utilisateur · Maquettes interactives · Expérience intuitive",
    },
    {
      icon: "🚀",
      title: "Développement Full-Stack",
      description:
        "Intégration complète du front-end et back-end pour des applications performantes",
    },
    {
      icon: "🧰",
      title: "Outils & Gestion de projet",
      description: "Git · GitHub · Postman ",
    },
  ];

  return (
    <section
      id="competences"
      className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 text-gray-800 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full bg-white/40 backdrop-blur-md rounded-3xl shadow-xl p-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            Mes <span className="text-blue-700">Compétences</span>
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Passionnée par le développement web, je maîtrise plusieurs technologies 
            du front-end au back-end pour créer des applications modernes et performantes.
          </p>
        </motion.div>

        {/* Competences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {competences.map((competence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="bg-white/60 backdrop-blur-sm p-5 rounded-xl shadow hover:shadow-md transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-gradient-to-r from-green-300 to-blue-400 w-16 h-16 rounded-full flex items-center justify-center mb-3 shadow-sm">
                <span className="text-2xl">{competence.icon}</span>
              </div>
              <h3 className="font-semibold text-base text-gray-900 mb-2">
                {competence.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">
                {competence.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-gray-700 mb-3 text-base">
            Vous souhaitez collaborer ou en savoir plus sur mes compétences ?
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-green-400 text-white font-medium py-2 px-5 rounded-full hover:shadow-lg transition-all duration-300 text-sm"
          >
            <i className="fa-solid fa-comments text-sm"></i>
            Discutons de votre projet
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Competences;