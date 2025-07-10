// import React from 'react'
import Container from '../features/Container'

import Logo from "../../assets/logo1.png"
import { BsWhatsapp } from 'react-icons/bs'
import { MdMenu } from 'react-icons/md'
import { motion } from 'motion/react'
import { useState } from 'react'

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clickMenuItem = () => {
    setIsMenuOpen(false)
  }

  return (
    <div>
      <div className='w-full fixed top-0 z-50 py-2 bg-white text-black hover:from-transparent hover:via-transparent duration-300 transition-all shadow-lg'>
        <Container className='flex justify-between items-center'>
          <div className=''>
            <img src={Logo} alt="logo" className='w-20' />
          </div>
          <nav className='gap-3 items-center lg:flex hidden'>
            <a href='#inicio' className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Inicio</a>
            <a href='#nosotros' className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Nosotros</a>
            <a href='#productos' className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Productos</a>
            <a href='#servicios' className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Servicios</a>
            <a href='#contacto' className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Contacto</a>
          </nav>
          <div className='bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2 cursor-pointer hidden lg:flex gap-2 items-center transition-all duration-300'>
            <BsWhatsapp size={22} />
            <span>
              Contactar
            </span>
          </div>

          <div className='lg:hidden block'>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleMenu}
              className=' bg-quaternary text-white rounded-full p-2'
            >
              <MdMenu size={23} />
            </motion.button>
          </div>
        </Container>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className='lg:hidden bg-white shadow-md py-4 absolute w-full left-0 mt-2 border-t border-gray-200'
          >
            <ul className='flex flex-col items-center gap-4'>
              <a href='#inicio' onClick={clickMenuItem} className='cursor-pointer Rubik-Font font-medium text-gray-700 hover:text-primary duration-300 transition-all w-full text-center py-2'>Inicio</a>
              <a href='#nosotros' onClick={clickMenuItem} className='cursor-pointer Rubik-Font font-medium text-gray-700 hover:text-primary duration-300 transition-all w-full text-center py-2'>Nosotros</a>
              <a href='#productos' onClick={clickMenuItem} className='cursor-pointer Rubik-Font font-medium text-gray-700 hover:text-primary duration-300 transition-all w-full text-center py-2'>Productos</a>
              <a href='#servicios' onClick={clickMenuItem} className='cursor-pointer Rubik-Font font-medium text-gray-700 hover:text-primary duration-300 transition-all w-full text-center py-2'>Servicios</a>
              <a href='#contacto' onClick={clickMenuItem} className='cursor-pointer Rubik-Font font-medium text-gray-700 hover:text-primary duration-300 transition-all w-full text-center py-2'>Contacto</a>
              {/* Botón de Contactar en el menú responsive */}
              <a className="w-full text-center py-2">
                <a
                  href="https://wa.me/TU_NUMERO_DE_WHATSAPP?text=Hola! Estoy interesado en sus servicios." // ¡CAMBIA ESTO!
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2 cursor-pointer inline-flex gap-2 items-center transition-all duration-300"
                >
                  <BsWhatsapp size={22} />
                  <span>Contactar</span>
                </a>
              </a>
            </ul>
          </motion.div>
        )}
      </div>
    </div >
  )
}
