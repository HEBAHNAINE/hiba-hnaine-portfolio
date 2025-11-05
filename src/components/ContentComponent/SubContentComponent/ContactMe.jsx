import { motion } from "framer-motion";

export const ContactMe = () => {
  const informations = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Localisation",
      description: "Casablanca, Maroc",
      color: "from-green-400 to-green-500"
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      description: "hnainehiba@gmail.com",
      color: "from-blue-400 to-blue-500"
    },
    {
      icon: "fa-solid fa-phone",
      title: "Téléphone",
      description: "+212 7 78 24 69 97",
      color: "from-purple-400 to-purple-500"
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Disponibilité",
      description: "Ouverte aux opportunités",
      color: "from-orange-400 to-orange-500"
    },
  ];

  const socials = [
    { 
      icon: "fa-brands fa-github", 
      url: "HEBAHNAINEhttps://github.com/",
      color: "hover:bg-gray-800"
    },
    { 
      icon: "fa-brands fa-linkedin", 
      url: "https://www.linkedin.com/in/hiba-hnaine-3a1a63350/",
      color: "hover:bg-blue-600"
    },
    { 
      icon: "fa-brands fa-instagram", 
      url: "https://www.instagram.com/hebahnai_/",
      color: "hover:bg-pink-600"
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-cyan-50 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-green-400 to-blue-400"></div>
            <span className="text-green-600 font-semibold uppercase tracking-wider text-sm">Contact</span>
            <div className="w-12 h-0.5 bg-gradient-to-r from-blue-400 to-green-400"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Discutons de votre projet
            </span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Je suis toujours ravie d'échanger sur de nouvelles opportunités et collaborations passionnantes.
            N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-8"
          >
            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {informations.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <i className={`${info.icon} text-white text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg">{info.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{info.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Réseaux sociaux</h3>
              <div className="flex justify-center space-x-4">
                {socials.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`bg-gray-100 ${social.color} text-gray-700 p-4 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:text-white`}
                  >
                    <i className={`${social.icon} text-2xl`}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-green-500 via-blue-500 to-cyan-500 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
              </div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-paper-plane text-3xl text-white"></i>
                </div>
                
                <h3 className="text-3xl font-bold mb-4">Prête à commencer ?</h3>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Envoyez-moi un message et discutons de la manière dont nous pouvons travailler ensemble sur votre prochain projet.
                </p>
                
                <motion.a
                  href="mailto:hnainehiba@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white text-green-600 font-bold py-4 px-8 rounded-full hover:shadow-2xl transition-all duration-300 shadow-lg hover:bg-gray-50"
                >
                  <i className="fa-solid fa-envelope-open-text"></i>
                  Démarrer la conversation
                </motion.a>
                
                <div className="mt-6 flex items-center justify-center gap-4 text-white/80">
                  <i className="fa-solid fa-clock"></i>
                  <span className="text-sm">Réponse sous 24h</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-gray-900 text-lg">Vous avez une question spécifique ?</h4>
                <p className="text-gray-600">Contactez-moi directement par téléphone ou email</p>
              </div>
              <div className="flex gap-4">
                <motion.a
                  href="tel:+212778246997"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  <i className="fa-solid fa-phone"></i>
                  Appeler
                </motion.a>
                <motion.a
                  href="mailto:hnainehiba@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all duration-300 shadow-md"
                >
                  <i className="fa-solid fa-envelope"></i>
                  Email
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};