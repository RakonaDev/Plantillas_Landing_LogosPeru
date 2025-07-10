
import { useState } from 'react'
import Logo from '../../assets/logo.webp'
import { scrollToElement } from '../../logic/scrollToElement'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-4 w-full z-50 px-4">
      <div className='w-full max-w-7xl mx-auto py-2 shadow-pers rounded-xl flex justify-between items-center bg-white px-4 md:px-9'>
        <img src={Logo} alt="logo" className="w-16 md:w-20 h-fit" />

        {/* Menu de hamburguesa para móvil */}
        <button 
          className="md:hidden flex flex-col space-y-1 w-6 h-6 justify-center items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-gray-800 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

        {/* Menu de navegación para desktop */}
        <ul className='hidden md:flex gap-6 items-center text-gray-700 font-medium'>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200" onClick={() => scrollToElement('#inicio')}>Inicio</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200" onClick={() => scrollToElement('#nosotros' , 100)}>Nosotros</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200" onClick={() => scrollToElement('#servicios', 100)}>Servicios</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors duration-200" onClick={() => scrollToElement('#contacto', 100)}>Contacto</li>
        </ul>

        {/* Menu móvil desplegable */}
        <div className={`absolute top-full left-4 right-4 mt-2 bg-white rounded-xl shadow-lg transition-all duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
        }`}>
          <ul className='flex flex-col py-4 px-6 space-y-4'>
            <li onClick={() => scrollToElement('#inicio')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0">
              Inicio
            </li>
            <li onClick={() => scrollToElement('#nosotros')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0">
              Nosotros
            </li>
            <li onClick={() => scrollToElement('#servicios')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0">
              Servicios
            </li>
            <li onClick={() => scrollToElement('#contacto')} className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors duration-200 py-2 border-b border-gray-100 last:border-b-0">
              Contacto
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
