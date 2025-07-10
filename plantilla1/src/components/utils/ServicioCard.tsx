import { FaWhatsapp } from "react-icons/fa6";
import type { ServicioData } from "../../lib/serviciosData";


export default function ServicioCard({ servicio, index }: { servicio: ServicioData, index: number }) {
  return (
    <div className="w-full flex gap-10 items-center lg:flex-row flex-col">
      {
        index % 2 === 0 ? (
          <>
            <div className="w-full lg:w-1/2">
              <img src={servicio.imagen} alt="servicio" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="w-full lg:w-1/2 space-y-6 text-white">
              <h3 className="font-ConstellationTLPro-Bold text-xl md:text-2xl lg:text-3xl text-quaternary">{servicio.titulo}</h3>
              <p className="text-base font-sans">{servicio.descripcion}</p>
              <a href="#" className="px-4 py-2 bg-green-500 hover:bg-green-700 duration-300 transition-colors text-white rounded-3xl w-fit font-medium flex gap-2 items-center">
                <FaWhatsapp size={25} />
                Contactar al WhatsApp
              </a>
            </div>
          </>
        ) : (
          <div className="flex flex-col-reverse lg:flex-row gap-10 items-center">
            <div className="w-full lg:w-1/2 space-y-6 text-white flex flex-col items-end ">
              <h3 className="font-ConstellationTLPro-Bold text-xl md:text-2xl lg:text-3xl text-quaternary text-end">{servicio.titulo}</h3>
              <p className="text-base font-sans text-end">{servicio.descripcion}</p>
              <a href="#" className="px-4 py-2 bg-green-500 text-white hover:bg-green-700 duration-300 transition-colors rounded-3xl w-fit font-medium flex gap-2 items-center">
                <FaWhatsapp size={25} />
                Contactar al WhatsApp
              </a>
            </div>
            <div className="w-full lg:w-1/2">
              <img src={servicio.imagen} alt="servicio" className="w-full h-full object-cover rounded-2xl" />
            </div>
          </div>
        )
      }
    </div>
  )
}
