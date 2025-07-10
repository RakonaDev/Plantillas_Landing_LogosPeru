
import HeroBanner from '../components/sections/BannerSection'
import ContactSection from '../components/sections/ContactoSection'
import NosotrosSection from '../components/sections/NosotrosSection'
import PropertiesSection from '../components/sections/PropiedadesSection'
import ServicesSection from '../components/sections/ServiciosSection'

export default function Inicio() {
  return (
    <>
      <HeroBanner />
      <NosotrosSection />
      <ServicesSection />
      <PropertiesSection />
      <ContactSection />
    </>
  )
}
