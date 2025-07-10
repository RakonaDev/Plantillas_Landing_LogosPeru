import BannerSlider from "../components/features/SwiperBanner";
import ContactSection from "../components/sections/ContactoSection";
import NosotrosSection from "../components/sections/NosotrosSection";
import ServicesSection from "../components/sections/ServiciosSection";

export default function Inicio() {
  return (
    <div className="w-full">
      <BannerSlider />
      <NosotrosSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}
