import { motion } from "framer-motion";

export const ContactMe = () => {
  const informations = [
    {
      icon: "fa-solid fa-location-dot",
      title: "Localisation",
      description: "Casablanca, Maroc",
      color: "from-[#FF0080] to-[#00FFFF]"
    },
    {
      icon: "fa-solid fa-envelope",
      title: "Email",
      description: "hnainehiba@gmail.com",
      color: "from-[#FF0080] to-[#00FFFF]"
    },
    {
      icon: "fa-solid fa-phone",
      title: "Téléphone",
      description: "+212 7 78 24 69 97",
      color: "from-[#FF0080] to-[#00FFFF]"
    },
    {
      icon: "fa-solid fa-briefcase",
      title: "Disponibilité",
      description: "Ouverte aux opportunités",
      color: "from-[#FF0080] to-[#00FFFF]"
    },
  ];

  const socials = [
    { 
      icon: "fa-brands fa-github", 
      url: "https://github.com/HEBAHNAINE",
      name: "GitHub",
      color: "hover:bg-[#FF008033]"
    },
    { 
      icon: "fa-brands fa-linkedin", 
      url: "https://www.linkedin.com/in/hiba-hnaine-3a1a63350/",
      name: "LinkedIn",
      color: "hover:bg-[#00FFFF33]"
    },
    { 
      icon: "fa-brands fa-instagram", 
      url: "https://www.instagram.com/hebahnai_/",
      name: "Instagram",
      color: "hover:bg-[#FF008033]"
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-[#CCCCCC] flex items-center justify-center px-6 py-20"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#FF0080] to-[#00FFFF] bg-clip-text text-transparent">
              Discutons de votre projet
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Toujours ravie d'échanger sur des collaborations passionnantes.
            N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* LEFT — Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-8"
          >
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
                  <div className="bg-[#1A1A1A] rounded-2xl p-6 shadow-lg 
                                  border border-[#2a2a2a] hover:shadow-[0_0_15px_#FF008033] 
                                  transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-r ${info.color} p-3 rounded-xl shadow-md`}>
                        <i className={`${info.icon} text-black text-lg`}></i>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-2 text-lg">
                          {info.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Social Neon Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="bg-[#1A1A1A] border border-[#2a2a2a] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">

              <div className="relative z-10 text-center">

                <div className="w-20 h-20 bg-gradient-to-r from-[#FF0080] to-[#00FFFF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <i className="fa-solid fa-share-nodes text-3xl text-black"></i>
                </div>

                <h3 className="text-3xl font-bold mb-4">Réseaux sociaux</h3>

                <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                  Retrouvez-moi sur mes réseaux pour suivre mes projets.
                </p>

                {/* Socials */}
                <div className="flex justify-center space-x-6 mb-8">
                  {socials.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -5 }}
                      className={`bg-[#222] p-4 rounded-xl text-white border border-[#333] 
                                 hover:shadow-[0_0_15px_#FF008055] transition-all duration-300 ${social.color}`}
                    >
                      <i className={`${social.icon} text-2xl`}></i>
                    </motion.a>
                  ))}
                </div>

                {/* Names */}
                <div className="flex justify-center space-x-8 text-gray-400 text-sm">
                  {socials.map((social, index) => (
                    <span key={index} className="font-medium">
                      {social.name}
                    </span>
                  ))}
                </div>

                {/* Email CTA */}
                <motion.a
                  href="mailto:hnainehiba@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#FF0080] to-[#00FFFF]
                             text-black font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl 
                             transition-all duration-300 mt-6"
                >
                  <i className="fa-solid fa-envelope"></i>
                  Envoyer un email
                </motion.a>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
