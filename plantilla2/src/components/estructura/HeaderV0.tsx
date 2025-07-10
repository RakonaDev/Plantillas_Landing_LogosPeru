import Container from '../features/Container';
import Logo from "../../assets/logo1.png";
import { BsWhatsapp, BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs'; // Agrega los íconos de redes sociales que necesites
import { MdMenu } from 'react-icons/md';
import { motion } from 'motion/react';
import { useState } from 'react';
import { scrollToElement } from '../../logic/scrollToElement';

export default function HeaderV0() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú

  // --- Información de la empresa y redes sociales ---
  const companyInfo = {
    whatsappNumber: '51987654321', // ¡CAMBIA ESTE NÚMERO POR EL DE TU EMPRESA! (Ej: código de país + número)
    whatsappMessage: 'Hola! Estoy interesado en sus servicios.',
    facebookUrl: 'https://www.facebook.com/nombredeempresa', // ¡CAMBIA ESTO POR LA URL DE TU FACEBOOK!
    instagramUrl: 'https://www.instagram.com/nombredeempresa', // ¡CAMBIA ESTO POR LA URL DE TU INSTAGRAM!
    linkedinUrl: 'https://www.linkedin.com/company/nombredeempresa', // ¡CAMBIA ESTO POR LA URL DE TU LINKEDIN!
    // Puedes agregar más redes sociales aquí
  };
  // ----------------------------------------------------

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clickMenuItem = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className='w-full fixed top-0 z-50 py-2 bg-white text-black hover:from-transparent hover:via-transparent duration-300 transition-all shadow-lg'>
        <Container className='flex justify-between items-center'>
          <div className=''>
            <img src={Logo} alt="logo" className='w-20' />
          </div>
          <nav className='gap-3 items-center lg:flex hidden'>
            <button onClick={() => scrollToElement('#inicio', 100)} className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Inicio</button>
            <button onClick={() => scrollToElement('#nosotros', 100)} className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Nosotros</button>
            <button onClick={() => scrollToElement('#productos', 100)} className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Productos</button>
            <button onClick={() => scrollToElement('#servicios', 100)} className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Servicios</button>
            <button onClick={() => scrollToElement('#contacto', 100)} className='cursor-pointer Rubik-Font font-medium hover:text-primary duration-300 transition-all'>Contacto</button>
          </nav>
          <div className='flex gap-4 items-center'> {/* Contenedor para el botón de WhatsApp y los íconos de redes sociales */}
            {/* Botón de WhatsApp para desktop */}
            <a
              href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className='bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2 cursor-pointer hidden lg:flex gap-2 items-center transition-all duration-300'
            >
              <BsWhatsapp size={22} />
              <span>Contactar</span>
            </a>
            {/* Íconos de redes sociales para desktop */}
            <div className='hidden lg:flex gap-3 text-gray-700'>
              {companyInfo.facebookUrl && (
                <a href={companyInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className='hover:text-primary duration-300 transition-all'>
                  <BsFacebook size={22} />
                </a>
              )}
              {companyInfo.instagramUrl && (
                <a href={companyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className='hover:text-primary duration-300 transition-all'>
                  <BsInstagram size={22} />
                </a>
              )}
              {companyInfo.linkedinUrl && (
                <a href={companyInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className='hover:text-primary duration-300 transition-all'>
                  <BsLinkedin size={22} />
                </a>
              )}
              {/* Agrega más íconos de redes sociales aquí */}
            </div>
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
                  href={`https://wa.me/${companyInfo.whatsappNumber}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-4 py-2 cursor-pointer inline-flex gap-2 items-center transition-all duration-300"
                  onClick={clickMenuItem} // Cierra el menú al hacer clic
                >
                  <BsWhatsapp size={22} />
                  <span>Contactar</span>
                </a>
              </a>
              {/* Íconos de redes sociales para el menú responsive */}
              <div className='flex gap-5 mt-2 text-gray-700'>
                {companyInfo.facebookUrl && (
                  <a href={companyInfo.facebookUrl} target="_blank" rel="noopener noreferrer" className='hover:text-primary duration-300 transition-all' onClick={clickMenuItem}>
                    <BsFacebook size={25} />
                  </a>
                )}
                {companyInfo.instagramUrl && (
                  <a href={companyInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className='hover:text-primary duration-300 transition-all' onClick={clickMenuItem}>
                    <BsInstagram size={25} />
                  </a>
                )}
                {companyInfo.linkedinUrl && (
                  <a href={companyInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className='hover:text-primary duration-300 transition-all' onClick={clickMenuItem}>
                    <BsLinkedin size={25} />
                  </a>
                )}
                {/* Agrega más íconos de redes sociales aquí */}
              </div>
            </ul>
          </motion.div>
        )}
      </div>
    </div >
  );
}