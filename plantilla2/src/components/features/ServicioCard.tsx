import type { Servicio } from "../../lib/serviciosData";


export default function ServicioCard({ servicio }: { servicio: Servicio }) {
  return (
    <div className="max-w-[17rem] w-full min-w-[13rem] hover:scale-105 transition-all duration-300 cursor-default">
      <div className="w-full">
        <img src={servicio.imagen} alt={servicio.nombre} className="w-full rounded-t-xl" />
      </div>
      <div className="flex flex-col gap-3 p-5 bg-white rounded-b-xl">
        <h3 className="text-xl font-bold text-primary Rubik-Font w-full h-16">{servicio.nombre}</h3>
        <p className="text-sm text-black">{servicio.descripcion}</p>
      </div>
    </div>
  )
}
