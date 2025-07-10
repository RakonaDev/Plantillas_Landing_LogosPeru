
import { motion } from 'framer-motion';
import { BiMailSend, BiMapPin, BiPhone } from 'react-icons/bi';
import { BsArrowUp, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import LogoFooter from "../../assets/logoFooter.webp"
import LogosPeru from "../../assets/logosPeru.webp"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  function scrollToElement(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const socialLinks = [
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: BsTwitter, href: '#', label: 'Twitter' },
    { icon: BsInstagram, href: '#', label: 'Instagram' },
    { icon: BsLinkedin, href: '#', label: 'LinkedIn' }
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' }
  ];

  const services = [
    { name: 'Asesoría personalizada y cercana', href: '#servicios' },
    { name: 'Amplia variedad de destinos y experiencias', href: '#servicios' },
    { name: 'Seguridad y respaldo garantizado', href: '#servicios' },
    { name: 'Precios competitivos con calidad', href: '#servicios' }
  ];

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className="relative bg-gradient-to-br from-[#205781] via-[#2a6b94] to-[#205781] text-white overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#4F959D] rounded-full blur-3xl -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#98D2C0] rounded-full blur-3xl translate-x-48 translate-y-48"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#F6F8D5] rounded-full blur-3xl opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      {/* Botón scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-6 right-6 bg-[#4F959D] hover:bg-[#98D2C0] p-3 rounded-full shadow-lg transition-colors duration-300 z-10"
      >
        <BsArrowUp size={20} />
      </motion.button>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contenido principal del footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          {/* Información de la empresa */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.h3
              className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#F6F8D5] to-[#98D2C0] bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              <img src={LogoFooter} alt="logo" className="h-32" />
            </motion.h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Creamos experiencias digitales excepcionales que conectan marcas con sus audiencias de manera significativa.
            </p>

            {/* Información de contacto */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center space-x-3 text-gray-200"
                whileHover={{ x: 5, color: '#98D2C0' }}
              >
                <BiMailSend size={18} />
                <span>info@tuempresa.com</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-200"
                whileHover={{ x: 5, color: '#98D2C0' }}
              >
                <BiPhone size={18} />
                <span>+1 (555) 123-4567</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 text-gray-200"
                whileHover={{ x: 5, color: '#98D2C0' }}
              >
                <BiMapPin size={18} />
                <span>Lima, Perú</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#F6F8D5]">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index}>
                  <motion.button
                    onClick={() => scrollToElement(link.href)}
                    className="text-gray-200 hover:text-[#98D2C0] transition-colors duration-300 block"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#F6F8D5]">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li key={index} onClick={() => scrollToElement(service.href)}>
                  <motion.button
                    className="text-gray-200 hover:text-[#98D2C0] transition-colors duration-300 block text-start"
                    whileHover={{ x: 5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {service.name}
                  </motion.button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Redes sociales y newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold mb-6 text-[#F6F8D5]">Síguenos</h4>

            {/* Redes sociales */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="bg-[#4F959D] hover:bg-[#98D2C0] p-3 rounded-full transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria animada */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-[#98D2C0] to-transparent mb-8"
        ></motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm"
        >
          <div className="flex items-center space-x-1 mb-4 md:mb-0">
            <span>© 2025 Traveling. Todos los derechos reservados.</span>
          </div>
          <div className="flex space-x-6">
            <motion.a
              href="#"
              className="text-white flex gap-2 items-center text-sm mb-4 md:mb-0 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <span>Realizado por </span>
              <span> <img src={LogosPeru} alt="w" className="w-5" /> </span>
            </motion.a>

          </div>
        </motion.div>
      </div>

      {/* Onda decorativa en la parte superior */}
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white opacity-10"
          ></path>
        </svg>
      </div>
    </motion.footer>
  );
};

export default Footer;