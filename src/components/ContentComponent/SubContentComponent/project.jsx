import { motion } from "framer-motion";
import marcheBio from "../../../assets/images/laravel.png";
import javaApp from "../../../assets/images/swing.png";

const Projects = () => {
  const data = [
    {
      title: "Marché Bio – Plateforme E-commerce",
      description:
        "Application web complète de vente de fruits et légumes locaux. Les clients peuvent parcourir les produits, passer des commandes et contacter directement les producteurs. Backend en Laravel et frontend en React.",
      image: marcheBio,
      technologies: ["React.js", "Laravel", "MySQL", "Bootstrap"],
      frontend: "https://github.com/HEBAHNAINE/Marche-Bio", 
      backend: "https://github.com/HEBAHNAINE/backend--March-Bio", 
      year: "2025",
    },
    {
      title: "Application de Gestion des Employés et Congés",
      description:
        "Application desktop développée en Java Swing pour la gestion complète des employés et des congés. Inclut les fonctionnalités CRUD, l'authentification et la génération de rapports.",
      image: javaApp,
      technologies: ["Java", "Swing", "MySQL"],
      github: "https://github.com/Mouabbad/java-project", 
      year: "2025",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-blue-300 text-gray-800 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Mes <span className="text-blue-600">Projets</span>
          </h1>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations où j'ai mis en œuvre 
            mes compétences en développement full stack.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 group-hover:border-white/80 overflow-hidden h-full flex flex-col">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-green-400 text-white text-sm px-3 py-1 rounded-full z-10 shadow-lg">
                    {project.year}
                  </div>
                  <img
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-5">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      Technologies Utilisées
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 text-xs rounded-full border border-white/50 shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.frontend && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.frontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-green-400 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                      >
                        <i className="fa-brands fa-github"></i>
                        Frontend
                      </motion.a>
                    )}

                    {project.backend && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.backend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-green-400 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                      >
                        <i className="fa-brands fa-github"></i>
                        Backend
                      </motion.a>
                    )}

                    {project.github && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-white bg-gradient-to-r from-blue-500 to-green-400 px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                      >
                        <i className="fa-brands fa-github"></i>
                        Code Source
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;