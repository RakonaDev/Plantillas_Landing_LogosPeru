
import { FaWhatsapp } from 'react-icons/fa6'
import type { CarrosData } from '../../lib/carrosData'
import { PiMoney } from 'react-icons/pi'

export default function CarroCard({ carro }: { carro: CarrosData }) {
  return (
    <div className='max-w-sm w-full border-2 h-full border-neutral-800 group rounded-2xl p-3 hover:border-neutral-500 duration-300 transition-all'>
      <div>
        <img src={carro.imagen} alt="" className='w-full h-[15rem] object-cover' />
      </div>

      <div className='w-full space-y-5'>
        <h3 className='font-ConstellationTLPro-Bold text-xl md:text-2xl lg:text-3xl text-center text-secondary'>{carro.nombre}</h3>
        <p className='text-center text-base font-sans text-white line-clamp-5'>{carro.descripcion}</p>
      </div>

      <div className='border-t-2 border-neutral-800 pt-4 mt-5 group-hover:border-neutral-500 duration-300 transition-all flex gap-2 justify-evenly flex-wrap'>
        <a href="#" className='flex gap-2 items-center text-sm font-medium px-4 py-2 text-white bg-green-700 rounded-2xl w-fit hover:bg-green-800 duration-300 transition-colors'>
          <FaWhatsapp size={20} />
          Más información
        </a>
        <div className='bg-quaternary text-white py-2 px-4 rounded-2xl w-fit font-medium flex gap-2 items-center cursor-default hover:bg-neutral-900 duration-300 transition-colors'>
          <PiMoney size={20} />
          <span>S/. {carro.precioPorDia} x Día</span>
        </div>
      </div>
    </div>
  )
}
