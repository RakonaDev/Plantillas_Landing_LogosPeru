

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Phone, Mail, Facebook, Instagram, Twitter, MapPin } from "lucide-react"
import Logo from '../../assets/logo.png'
import { BsWhatsapp } from "react-icons/bs"

export default function Headerv0() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  function scrollToElement(id: string) {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppClick = () => {
    // Reemplaza con tu número de WhatsApp
    const phoneNumber = "1234567890"
    const message = "Hola, me gustaría obtener más información sobre sus servicios."
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      {/* Barra superior de contacto */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-primary text-white py-2 hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Información de contacto */}
            <div className="flex items-center space-x-6">
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+1 (234) 567-890</span>
              </motion.a>
              <motion.a
                href="mailto:info@empresa.com"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@travelagency.com</span>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Ciudad, País</span>
              </motion.div>
            </div>

            {/* Redes sociales */}
            <div className="flex items-center space-x-4">
              <motion.a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-blue-200 transition-colors"
              >
                <Facebook size={20}  />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-blue-200 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-blue-200 transition-colors"
              >
                <Twitter size={20}  />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Header principal */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 py-6"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-between h-16">
            {/* Navegación izquierda */}
            <nav className="flex space-x-8">
              <motion.button
                onClick={() => scrollToElement(`#inicio`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Inicio
              </motion.button>
              <motion.button
                onClick={() => scrollToElement(`#nosotros`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Nosotros
              </motion.button>
            </nav>

            {/* Logo centrado */}
            <motion.div whileHover={{ scale: 1.1 }}>
              <img src={Logo || "/placeholder.svg"} alt="logo" className="h-20" />
            </motion.div>

            {/* Navegación derecha */}
            <nav className="flex space-x-8">
              <motion.button
                onClick={() => scrollToElement(`#servicios`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Servicios
              </motion.button>
              <motion.button
                onClick={() => scrollToElement(`#contacto`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
              >
                Contacto
              </motion.button>
            </nav>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Barra de contacto móvil */}
            <div className="flex items-center justify-between py-2 border-b border-gray-100 mb-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <motion.a href="tel:+1234567890" whileHover={{ scale: 1.05 }} className="flex items-center space-x-1">
                  <Phone className="h-3 w-3" />
                  <span className="hidden sm:inline">+1 (234) 567-890</span>
                </motion.a>
                <motion.a
                  href="mailto:info@empresa.com"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-1"
                >
                  <Mail className="h-3 w-3" />
                  <span className="hidden sm:inline">Email</span>
                </motion.a>
              </div>

              {/* Redes sociales móvil */}
              <div className="flex items-center space-x-3">
                <motion.a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Facebook className="h-4 w-4" />
                </motion.a>
                <motion.a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Instagram className="h-4 w-4" />
                </motion.a>
              </div>
            </div>

            {/* Header móvil principal */}
            <div className="flex items-center justify-between h-16">
              {/* Botón hamburguesa */}
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={toggleMenu}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? 45 : 0,
                      y: isMenuOpen ? 8 : 0,
                    }}
                    className="w-6 h-0.5 bg-current mb-1.5 origin-center transition-all duration-300"
                  />
                  <motion.span
                    animate={{
                      opacity: isMenuOpen ? 0 : 1,
                    }}
                    className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"
                  />
                  <motion.span
                    animate={{
                      rotate: isMenuOpen ? -45 : 0,
                      y: isMenuOpen ? -8 : 0,
                    }}
                    className="w-6 h-0.5 bg-current origin-center transition-all duration-300"
                  />
                </div>
              </motion.button>

              {/* Logo centrado en mobile */}
              <motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
                <img src={Logo || "/placeholder.svg"} alt="logo" className="h-16" />
              </motion.div>

              {/* Espacio para mantener el logo centrado */}
              <div className="w-6"></div>
            </div>
          </div>
        </div>

        {/* Menu móvil */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-4 py-6 space-y-4">
                <motion.button
                  onClick={() => {
                    scrollToElement("#inicio")
                    setIsMenuOpen(false)
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
                >
                  Inicio
                </motion.button>
                <motion.button
                  onClick={() => {
                    scrollToElement("#nosotros")
                    setIsMenuOpen(false)
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
                >
                  Nosotros
                </motion.button>
                <motion.button
                  onClick={() => {
                    scrollToElement("#servicios")
                    setIsMenuOpen(false)
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
                >
                  Servicios
                </motion.button>
                <motion.button
                  onClick={() => {
                    scrollToElement("#contacto")
                    setIsMenuOpen(false)
                  }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="block w-full text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors duration-200"
                >
                  Contacto
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Botón flotante de WhatsApp */}
      <motion.button
        onClick={handleWhatsAppClick}
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          delay: 1,
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{
          scale: 1.1,
          boxShadow: "0 10px 25px rgba(37, 211, 102, 0.3)",
        }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-colors duration-200"
        aria-label="Contactar por WhatsApp"
      >
        <BsWhatsapp size={30} />

        {/* Indicador de pulso */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-green-500 rounded-full -z-10"
        />
      </motion.button>
      
    </>
  )
}
