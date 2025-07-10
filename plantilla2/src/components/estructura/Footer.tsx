import Container from "../features/Container";

import LogoFooter from "../../assets/logoFooter.webp"
import { serviciosData } from "../../lib/serviciosData";
import { productosData } from "../../lib/productosData";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6";
import LogosPeru from "../../assets/logosPeru.webp"

export default function Footer() {
  return (
    <div className='w-full pb-3 pt-6 bg-orange-800'>
      <Container className="grid gap-4 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-items-center">
        <div className="w-full">
          <img src={LogoFooter} alt="" className="w-[9rem]" />
        </div>
        <div className="w-full text-white space-y-4">
          <h4 className="Rubik-Font lg:text-xl md:text-lg font-bold">Servicios</h4>
          <ul className="space-y-5">
            {
              serviciosData.map((servicio) => {
                return (
                  <li key={servicio.id} className="flex gap-2 items-center">
                    <p className="text-white">- {servicio.nombre}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="w-full text-white space-y-4">
          <h4 className="Rubik-Font lg:text-xl md:text-lg font-bold">Productos</h4>
          <ul className="space-y-5">
            {
              productosData.slice(0, 5).map((producto) => {
                return (
                  <li key={producto.id} className="flex gap-2 items-center">
                    <p className="text-white">{producto.nombre}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="w-full text-white space-y-4">
          <h4 className="Rubik-Font lg:text-xl md:text-lg font-bold">Redes</h4>
          <nav className="flex gap-4">
            <a href="#">
              <FaFacebook size={24} />
            </a>
            <a href="#">
              <FaInstagram size={24} />
            </a>
            <a href="#">
              <FaYoutube size={24} />
            </a>
          </nav>

        </div>
      </Container>
      <Container>
        <hr className="w-full border border-orange-950 mt-6 mb-3" />
        <div className="flex justify-between gap-3 text-white lg:flex-row flex-col">
          <p>Copyright © 2025 Ferretería Monte. Todos los derechos reservados.</p>
          <p className="flex gap-2 items-center">Desarrollador por <a href="https://logosperu.com.pe/"><img src={LogosPeru} alt="logosPeru" className="w-5" /></a></p>
        </div>
      </Container>
    </div>
  )
}
