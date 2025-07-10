
import { useState } from 'react';
import Logo from '../../assets/logo.png'
import { AnimatePresence, motion } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function scrollToElement(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 py-3"
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
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Inicio
            </motion.button>
            <motion.button
              onClick={() => scrollToElement(`#nosotros`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Nosotros
            </motion.button>
          </nav>

          {/* Logo centrado */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
          >
            <img src={Logo} alt="logo" className="h-20" />
          </motion.div>

          {/* Navegación derecha */}
          <nav className="flex space-x-8">
            <motion.button
              onClick={() => scrollToElement(`#servicios`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Servicios
            </motion.button>
            <motion.button
              onClick={() => scrollToElement(`#contacto`)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
            >
              Contacto
            </motion.button>
          </nav>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center justify-between h-16">
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
                  y: isMenuOpen ? 8 : 0
                }}
                className="w-6 h-0.5 bg-current mb-1.5 origin-center transition-all duration-300"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1
                }}
                className="w-6 h-0.5 bg-current mb-1.5 transition-all duration-300"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0
                }}
                className="w-6 h-0.5 bg-current origin-center transition-all duration-300"
              />
            </div>
          </motion.button>

          {/* Logo centrado en mobile */}
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex-shrink-0"
          >
            <img src={Logo} alt="logo" className="h-20" />
          </motion.div>

          {/* Espacio para mantener el logo centrado */}
          <div className="w-6"></div>
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
              <motion.a
                href="#inicio"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </motion.a>
              <motion.a
                href="#nosotros"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Nosotros
              </motion.a>
              <motion.a
                href="#servicios"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </motion.a>
              <motion.a
                href="#contacto"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="block text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
