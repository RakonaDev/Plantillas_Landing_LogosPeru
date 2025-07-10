
import { Swiper, SwiperSlide } from "swiper/react"
import Banner1 from "../../assets/images/banner/banner1.webp"
import Banner2 from "../../assets/images/banner/banner2.webp"
import Banner3 from "../../assets/images/banner/banner3.webp"
import Banner4 from "../../assets/images/banner/banner4.webp"
import Banner5 from "../../assets/images/banner/banner5.webp"
import { Autoplay } from "swiper/modules"
import 'swiper/swiper-bundle.css'
import Container from "../features/Container"
import { motion } from "framer-motion"
import { redirectToElement } from "../../logic/redirectToElement"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"

interface BannerInterface {
  img: string
  title: string
  slogan: string
  id: string
  tituloLink: string
}


const bannerData: BannerInterface[] = [
  {
    img: Banner1,
    title: "Ferretería y Soluciones Integrales El Buen Constructor",
    slogan: "Todo lo que necesitas para construir, reparar y mejorar tu mundo",
    id: "productos",
    tituloLink: "Ver Productos"
  },
  {
    img: Banner2,
    title: "Centro de Herramientas y Materiales La Fuerza del Hogar",
    slogan: "Tu mejor aliado en cada proyecto, desde el primer clavo hasta el último detalle",
    id: "servicios",
    tituloLink: "Ver Servicios"
  },
  {
    img: Banner3,
    title: "Ferretería Técnica y Profesional Manos Expertas",
    slogan: "Herramientas de calidad para quienes saben lo que hacen",
    id: "nosotros",
    tituloLink: "Nuestra Historia"
  },
  {
    img: Banner4,
    title: "El Gran Depósito Ferretero de Confianza y Servicio",
    slogan: "Más que productos, soluciones con atención personalizada",
    id: "productos",
    tituloLink: "Ver Productos"
  },
  {
    img: Banner5,
    title: "Ferretería y Acabados Para Todos Los Proyectos del Día a Día",
    slogan: "Porque cada arreglo merece lo mejor, sin pagar de más",
    id: "servicios",
    tituloLink: "Ver Servicios"
  }
]

export default function SwiperBanners() {
  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className='w-ful'
      >
        {
          bannerData.map((item, index) => {
            return (
              <SwiperSlide key={index} className="overflow-hidden relative w-full h-screen">
                <motion.img
                  initial={{ opacity: 1, scale: 1 }}
                  whileInView={{ opacity: 1, scale: 1.2 }}
                  transition={{ duration: 5 }}
                  src={item.img}
                  alt="banner"
                  className='w-full h-screen object-cover brightness-75'
                />
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10">
                  <Container className="flex flex-col items-center gap-3">
                    <motion.nav 
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-2 items-center"
                    >
                      <a href="#" className="p-2 bg-quaternary rounded-full hover:bg-quinary hover:text-quaternary duration-300 transition-all">
                        <FaFacebook size={24} />
                      </a>
                      <a href="#" className="p-2 bg-quaternary rounded-full hover:bg-quinary hover:text-quaternary duration-300 transition-all">
                        <FaInstagram size={24} />
                      </a>
                      <a href="#" className="p-2 bg-quaternary rounded-full hover:bg-quinary hover:text-quaternary duration-300 transition-all">
                        <FaYoutube size={24} />
                      </a>

                    </motion.nav>
                    <motion.h1
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4 }}
                      className="Raleway-Font text-center text-white text-2xl md:text-4xl lg:text-6xl font-bold"
                    >
                      {item.title}
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0, x: 100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-center font-medium Rubik-Font text-orange-500 text-lg md:text-xl lg:text-2xl"
                    >
                      {item.slogan}
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-4 py-2 bg-primary hover:bg-secondary text-white max-lg:text-sm rounded-xl duration-300 transition-all"
                      onClick={() => redirectToElement(item.id)}
                    >
                      {item.tituloLink}
                    </motion.button>
                  </Container>
                </div>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}
