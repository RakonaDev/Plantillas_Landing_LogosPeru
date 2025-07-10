
import { FullscreenBannerSlider } from '../components/features/SwiperBanner'
import ContactoSection from '../components/sections/ContactoSection'
import NosotrosSection from '../components/sections/NosotrosSection'
import ServiciosSection from '../components/sections/ServiciosSection'

export default function Inicio() {
  return (
    <div>
      <FullscreenBannerSlider />
      <NosotrosSection />
      <div className='bg-primary w-full py-10 flex flex-col gap-5 items-center px-2'>
        <h3 className='font-bold text-terciary text-4xl'>¿Listo para comenzar a viajar?</h3>
        <p className='text-white text-lg'>Convierte tus viajes en realidad. Contáctanos hoy y descubre cómo podemos ayudarte a disfrutar de tus vacaciones.</p>
        <button className='px-4 py-2 bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 rounded-xl text-white text-sm font-bold'>
          Contáctanos
        </button>
      </div>
      <ServiciosSection />
      <div>
        
      </div>
      <ContactoSection />
    </div>
  )
}
