// import React from 'react'
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6"
import LogoFooter from "../../assets/logoFooter.webp"
import { scrollToElement } from "../../logic/scrollToElement"
import Container from "../utils/Container"
import LogosPeruFooter from "../../assets/logosPeruFooter.png"

export default function Footer() {
  return (
    <div className="w-full">
      <footer className="w-full bg-red-800 py-4">
        <Container className="flex lg:flex-row flex-col gap-5 justify-between items-center">
          <div className="w-full lg:w-1/3 flex max-lg:justify-center">
            <img src={LogoFooter} alt="logo" className="w-32 h-auto" />
          </div>
          <div className="w-full lg:w-1/3 flex text-white flex-col gap-4 ">
            <h4 className="font-ConstellationTLPro-Bold text-2xl text-center text-white">HORIZON TRANSPORT</h4>
            <ul className="flex flex-col gap-4 items-center">
              <li onClick={() => scrollToElement('inicio')} className="transition-colors tracking-wider cursor-pointer">INICIO</li>
              <li onClick={() => scrollToElement('nosotros')} className=" transition-colors tracking-wider cursor-pointer">NOSOTROS</li>
              <li onClick={() => scrollToElement('servicios')} className=" transition-colors tracking-wider cursor-pointer">SERVICIOS</li>
              <li onClick={() => scrollToElement('contacto')} className=" transition-colors tracking-wider cursor-pointer">CONTACTO</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 flex text-white flex-col gap-4">
            <h4 className="font-ConstellationTLPro-Bold text-2xl text-center text-white">Nuestras Redes</h4>
            <nav className="w-full flex flex-wrap gap-3 justify-center">
              <a href="#" className='p-1 bg-black text-quaternary rounded-full'>
                <FaFacebookF size={23} />
              </a>

              <a href="#" className='p-1 bg-black text-quaternary rounded-full'>
                <FaInstagram size={23} />
              </a>

              <a href="#" className='p-1 bg-black text-quaternary rounded-full'>
                <FaYoutube size={23} />
              </a>
            </nav>

            <h4 className="font-ConstellationTLPro-Bold text-2xl text-center text-white">Contáctanos</h4>
            <div className="w-full flex gap-3 justify-center">
              <a href="#" className="px-4 py-2 bg-green-500 text-white rounded-3xl w-fit font-medium flex gap-2 items-center">
                <FaWhatsapp size={25} />
                Contactar al WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </footer>
      <div className="w-full py-2 bg-black text-white flex justify-center gap-3">
        <p>Horizon Transport. Todos los Derechos Reservados 2025</p><a href='https://logosperu.com.pe/' className="text-center flex gap-2 items-center">Realizado por LogosPerú <img src={LogosPeruFooter} alt="logo" className="w-auto h-4" /></a>
      </div>
    </div>
  )
}
