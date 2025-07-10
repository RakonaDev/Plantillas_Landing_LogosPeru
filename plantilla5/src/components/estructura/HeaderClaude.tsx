import { useState } from 'react'
import { Phone, Mail, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { scrollToElement } from '../../logic/scrollToElement'
import Logo from '../../assets/logo.webp'

export default function HeaderClaude() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Información de contacto (puedes cambiar estos valores)
  const contactInfo = {
    phone: '+51 987 654 321',
    email: 'contacto@empresa.com',
    social: {
      facebook: 'https://facebook.com/tuempresa',
      instagram: 'https://instagram.com/tuempresa',
      twitter: 'https://twitter.com/tuempresa',
      linkedin: 'https://linkedin.com/company/tuempresa'
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* Barra superior con información de contacto */}
      <div className="w-full bg-gray-800 text-white py-2 px-4" id='inicio'>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-2 sm:mb-0">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-blue-300 transition-colors">
                {contactInfo.phone}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-blue-300 transition-colors">
                {contactInfo.email}
              </a>
            </div>
          </div>
          
          {/* Redes sociales */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-gray-300">Síguenos:</span>
            <div className="flex gap-2">
              <a 
                href={contactInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a 
                href={contactInfo.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href={contactInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a 
                href={contactInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal con navegación */}
      <header className="fixed top-3 md:top-6 lg:top-10 w-full z-50 px-4">
        <div className='w-full max-w-7xl mx-auto py-3 shadow-lg rounded-xl flex justify-between border-2 border-gray-300 items-center bg-white px-4 md:px-9'>
          {/* Logo */}
          <img src={Logo} alt="logo" className="w-16 md:w-20 h-fit" />

          {/* Menu de hamburguesa para móvil */}
          <button 
            className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center items-center z-60"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>

          {/* Menu de navegación para desktop */}
          <nav className='hidden md:flex'>
            <ul className='flex gap-8 items-center text-gray-700 font-medium'>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" onClick={() => scrollToElement('#inicio')}>
                Inicio
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" onClick={() => scrollToElement('#nosotros', 100)}>
                Nosotros
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" onClick={() => scrollToElement('#servicios', 100)}>
                Servicios
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 px-3 rounded-md hover:bg-blue-50" onClick={() => scrollToElement('#contacto', 100)}>
                Contacto
              </li>
            </ul>
          </nav>

          {/* Botón de contacto rápido para desktop */}
          <div className="hidden md:flex items-center gap-3 bg-primary button rounded-lg px-6 py-3 text-white">
            <a 
              href={`tel:${contactInfo.phone}`}
              className="transition-colors duration-200 flex items-center gap-2 font-medium"
            >
              <Phone size={23} />
              {
                contactInfo.phone
              }
            </a>
            <span className='font-medium text-lg'>
              <a href={`tel:${contactInfo.phone}`}>Llamar</a>
            </span>
          </div>
        </div>

        {/* Menu móvil desplegable */}
        <div className={`absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
        }`}>
          <nav className="py-4">
            <ul className='flex flex-col px-6 space-y-2'>
              <li onClick={() => {scrollToElement('#inicio'); setIsMenuOpen(false)}} 
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-3 px-3 rounded-md hover:bg-blue-50">
                Inicio
              </li>
              <li onClick={() => {scrollToElement('#nosotros', 100); setIsMenuOpen(false)}} 
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-3 px-3 rounded-md hover:bg-blue-50">
                Nosotros
              </li>
              <li onClick={() => {scrollToElement('#servicios', 100); setIsMenuOpen(false)}} 
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-3 px-3 rounded-md hover:bg-blue-50">
                Servicios
              </li>
              <li onClick={() => {scrollToElement('#contacto', 100); setIsMenuOpen(false)}} 
                  className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-3 px-3 rounded-md hover:bg-blue-50">
                Contacto
              </li>
            </ul>
            
            {/* Información de contacto en móvil */}
            <div className="border-t border-gray-100 mt-4 pt-4 px-6">
              <div className="flex flex-col gap-3">
                <a href={`tel:${contactInfo.phone}`} 
                   className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors py-2">
                  <Phone size={18} />
                  <span>{contactInfo.phone}</span>
                </a>
                <a href={`mailto:${contactInfo.email}`} 
                   className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors py-2">
                  <Mail size={18} />
                  <span>{contactInfo.email}</span>
                </a>
                
                {/* Redes sociales en móvil */}
                <div className="flex items-center gap-4 pt-2">
                  <span className="text-sm text-gray-500">Redes:</span>
                  <div className="flex gap-3">
                    <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-blue-600 transition-colors">
                      <Facebook size={20} />
                    </a>
                    <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-pink-500 transition-colors">
                      <Instagram size={20} />
                    </a>
                    <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-blue-400 transition-colors">
                      <Twitter size={20} />
                    </a>
                    <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" 
                       className="text-gray-600 hover:text-blue-700 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}