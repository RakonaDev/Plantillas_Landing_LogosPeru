// import React from 'react'
import { FaCheck, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa6"
import LogoFooter from "../../assets/logoFooter.webp"
import { scrollToElement } from "../../logic/scrollToElement"
import Container from "../utils/Container"
import LogosPeruFooter from "../../assets/logosPeru.webp"
import { serviciosData } from "../../lib/serviciosData"

export default function Footer() {
  return (
    <div className="w-full">
      <footer className="w-full bg-red-800 py-4">
        <Container className="flex lg:flex-row flex-col gap-5 justify-between">
          <div className="w-full lg:w-1/4 flex max-lg:justify-center">
            <img src={LogoFooter} alt="logo" className="w-32 h-fit" />
          </div>
          <div className="w-full lg:w-1/4 flex max-lg:justify-center flex-col gap-4">
            <h4 className="font-ConstellationTLPro-Bold text-xl text-center text-white">Servicios</h4>
            <ul className="space-y-4">
              {
                serviciosData.map((data, index) => {
                  return (
                    <li key={index} onClick={() => scrollToElement('servicios')} className="text-white transition-colors tracking-wider cursor-pointer flex gap-2 items-center">
                      <FaCheck size={20} />
                      {data.titulo}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="w-full lg:w-1/4 flex text-white flex-col gap-4 ">
            <h4 className="font-ConstellationTLPro-Bold text-xl text-center text-white">HORIZON TRANSPORT</h4>
            <ul className="flex flex-col gap-4 items-center">
              <li onClick={() => scrollToElement('inicio')} className="transition-colors tracking-wider cursor-pointer">Inicio</li>
              <li onClick={() => scrollToElement('nosotros')} className=" transition-colors tracking-wider cursor-pointer">Nosotros</li>
              <li onClick={() => scrollToElement('servicios')} className=" transition-colors tracking-wider cursor-pointer">Servicios</li>
              <li onClick={() => scrollToElement('contacto')} className=" transition-colors tracking-wider cursor-pointer">Contacto</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 flex text-white flex-col gap-4">
            <h4 className="font-ConstellationTLPro-Bold text-xl text-center text-white">Nuestras Redes</h4>
            <nav className="w-full flex flex-wrap gap-3 justify-center">
              <a href="#" className='p-3 bg-black text-quaternary rounded-full hover:bg-quaternary hover:text-black duration-300 transition-colors'>
                <FaFacebookF size={23} />
              </a>

              <a href="#" className='p-3 bg-black text-quaternary rounded-full hover:bg-quaternary hover:text-black duration-300 transition-colors'>
                <FaInstagram size={23} />
              </a>

              <a href="#" className='p-3 bg-black text-quaternary rounded-full hover:bg-quaternary hover:text-black duration-300 transition-colors'>
                <FaYoutube size={23} />
              </a>
            </nav>

            <h4 className="font-ConstellationTLPro-Bold text-xl text-center text-white">Contáctanos</h4>
            <div className="w-full flex gap-3 justify-center">
              <a href="#" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-3xl w-fit font-medium flex gap-2 items-center duration-300 transition-colors">
                <FaWhatsapp size={25} />
                Contactar al WhatsApp
              </a>
            </div>
          </div>
        </Container>
      </footer>
      <div className="w-full py-2 bg-red-950 text-white flex justify-center gap-3">
        <p>Horizon Transport. Todos los Derechos Reservados 2025</p><a href='https://logosperu.com.pe/' className="text-center flex gap-2 items-center">Realizado por LogosPerú <img src={LogosPeruFooter} alt="logo" className="w-auto h-4" /></a>
      </div>
    </div>
  )
}
