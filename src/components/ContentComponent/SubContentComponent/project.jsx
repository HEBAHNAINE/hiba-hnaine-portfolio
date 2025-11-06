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
      className="min-h-screen bg-black text-[#CCCCCC] flex items-center justify-center px-6 py-20"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Mes{" "}
            <span className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
              Projets
            </span>
          </h1>

          <p className="text-[#CCCCCC] text-lg max-w-2xl mx-auto">
            Découvrez une sélection de mes réalisations full stack, alliant créativité et performance.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {data.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] rounded-2xl shadow-xl overflow-hidden flex flex-col border border-[#333]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="absolute top-3 right-3 bg-gradient-to-r from-[#FF0080] to-[#00FFFF] text-black text-xs px-2 py-1 rounded-full z-10 shadow-md">
                  {project.year}
                </div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    className="w-full h-40 object-cover"
                    src={project.image}
                    alt={project.title}
                  />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#FFFFFF] mb-2">
                  {project.title}
                </h3>

                <p className="text-[#CCCCCC] mb-3 text-sm leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold mb-2">Technologies Utilisées</h4>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-black/40 text-[#CCCCCC] text-xs rounded-full border border-[#333]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.frontend && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-black bg-gradient-to-r from-[#FF0080] to-[#00FFFF] px-3 py-2 rounded-full flex-1 justify-center shadow-lg min-w-0"
                    >
                      <i className="fa-brands fa-github text-xs"></i>
                      <span className="truncate">Frontend</span>
                    </motion.a>
                  )}

                  {project.backend && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-black bg-gradient-to-r from-[#FF0080] to-[#00FFFF] px-3 py-2 rounded-full flex-1 justify-center shadow-lg min-w-0"
                    >
                      <i className="fa-brands fa-github text-xs"></i>
                      <span className="truncate">Backend</span>
                    </motion.a>
                  )}

                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-black bg-gradient-to-r from-[#FF0080] to-[#00FFFF] px-3 py-2 rounded-full flex-1 justify-center shadow-lg min-w-0"
                    >
                      <i className="fa-brands fa-github text-xs"></i>
                      <span className="truncate">Code Source</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
