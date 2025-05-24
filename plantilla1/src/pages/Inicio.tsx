
import Footer from '../components/estructura/Footer'
import Header from '../components/estructura/Header'
import { motion } from 'motion/react'

import BannerInicio from "../assets/banner/bannerInicio1.webp"
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6'
import Container from '../components/utils/Container'
import { nosotrosData } from '../lib/nosotrosData'
import NosotrosCard from '../components/utils/NosotrosCard'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import schemaContacto from '../schema/EnviarCorreoSchema'
import { serviciosData } from '../lib/serviciosData'
import ServicioCard from '../components/utils/ServicioCard'
import { scrollToElement } from '../logic/scrollToElement'

import MapIcon from '../assets/map.svg'
import PhoneIcon from '../assets/phone.svg'
import EmailIcon from '../assets/email.svg'

function Inicio() {

  const {
    values,
    handleChange,
    handleSubmit,
    handleBlur,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      nombre: '',
      email: '',
      telefono: '',
      mensaje: '',
    },
    validationSchema: schemaContacto,
    onSubmit: (values) => {
      console.log(values)
      Swal.fire({
        title: '¡Gracias!',
        text: 'Su mensaje ha sido enviado',
        icon: 'success',
      })
    },
  })


  return (
    <>
      <div className='overflow-hidden'>
        <Header />
        <main className="w-full h-screen relative" id='inicio'>
          <div className="absolute inset-0 bg-gradient-to-l from-primary via-primary/80 to-transparent w-full h-full z-10" />
          <div className="w-full h-full absolute top-0 right-0 flex items-center justify-end px-5 lg:px-36 z-20">
            <div className="w-full lg:w-1/2 flex flex-col justify-end items-end z-20 text-white space-y-7">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className='flex gap-2'
              >
                <a href="#" className='p-1 bg-white text-black rounded-full w-fit font-medium hover:bg-black hover:text-secondary duration-300 transition-colors'>
                  <FaFacebookF size={23} />
                </a>
                <a href="#" className='p-1 bg-white text-black rounded-full w-fit font-medium hover:bg-black hover:text-secondary duration-300 transition-colors'>
                  <FaInstagram size={23} />
                </a>
                <a href="#" className='p-1 bg-white text-black rounded-full w-fit font-medium hover:bg-black hover:text-secondary duration-300 transition-colors'>
                  <FaYoutube size={23} />
                </a>
              </motion.div>
              <motion.h1
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="font-ConstellationTLPro-Bold text-4xl text-end tracking-wide"
              >
                Horizon Transport - Conectamos tu camino con seguridad y confianza
              </motion.h1>
              <motion.p
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="text-end max-lg:hidden"
              >
                En Horizon Transport ofrecemos servicios de taxi y transporte privado con puntualidad, comodidad y atención personalizada. Ya sea para un traslado urbano, interprovincial o corporativo, contamos con vehículos modernos y conductores profesionales que garantizan una experiencia segura y confiable.
              </motion.p>

              <motion.button
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => scrollToElement('servicios')}
                className="px-4 py-2 bg-white text-black rounded-3xl w-fit font-medium"
              >
                Ver Servicios
              </motion.button>
            </div>
          </div>
          <img src={BannerInicio} alt="banner" className="w-full h-full object-cover" />
        </main>

        <section className='w-full h-auto py-10' id='nosotros'>
          <Container>
            <h2 className='font-ConstellationTLPro-Bold text-2xl md:text-3xl lg:text-4xl text-center text-primary'>Nuestra Historia</h2>
            <p className='mt-6 text-center text-lg font-sans'>
              En Horizon Transport transformamos cada traslado en una experiencia segura, cómoda y confiable. Somos una empresa de transporte integral con enfoque en la excelencia del servicio, orientada tanto a turistas, profesionales ejecutivos como a clientes nacionales que buscan puntualidad, atención personalizada y confort en cada viaje.
            </p>

            <h2 className='font-ConstellationTLPro-Bold text-2xl md:text-3xl lg:text-4xl text-center mt-6 text-primary'>¿ Por qué elegirnos ?</h2>

            <div className='mt-10 flex flex-wrap gap-6 justify-evenly'>
              {
                nosotrosData.map((data, index) => {
                  return (
                    <NosotrosCard key={index} nosotros={data} />
                  )
                })
              }
            </div>
          </Container>
        </section>

        <section className='py-6 w-full bg-gradient-to-t from-neutral-800 to-neutral-950' id='servicios'>
          <Container className='space-y-20 mt-14'>
            <h2 className='font-ConstellationTLPro-Bold text-2xl md:text-3xl lg:text-4xl text-center text-secondary'>Servicios</h2>
            <div className='w-full space-y-7'>
              {
                serviciosData.map((data, index) => {
                  return (
                    <ServicioCard key={index} servicio={data} index={index} />
                  )
                })
              }
            </div>
          </Container>
        </section>

        <section className='py-7 w-full' id='contacto'>
          <Container className='space-y-7'>
            <h2 className='font-ConstellationTLPro-Bold text-2xl md:text-3xl lg:text-4xl text-center text-secondary'>Contacto</h2>
            <div className='flex w-full gap-10 lg:flex-row flex-col'>
              <div className='w-full lg:w-1/2'>
                <form onSubmit={handleSubmit} className='space-y-4 w-full'>
                  <div className='w-full'>
                    <input
                      type='text'
                      name='nombre'
                      id='nombre'
                      className='w-full px-4 py-3 bg-neutral-200 placeholder:text-neutral-600'
                      placeholder='Ingresa tu nombre'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.nombre}
                    />
                    {errors.nombre && touched.nombre && <span className='text-red-500 text-xs'>{errors.nombre}</span>}
                  </div>
                  <div className='w-full'>
                    <input
                      type='email'
                      name='email'
                      id='email'
                      className='w-full px-4 py-3 bg-neutral-200 placeholder:text-neutral-600'
                      onChange={handleChange}
                      placeholder='Ingresa tu email'
                      onBlur={handleBlur}
                      value={values.email}
                    />
                    {errors.email && touched.email && <span className='text-red-500 text-xs'>{errors.email}</span>}
                  </div>
                  <div className='w-full'>
                    <input
                      type='tel'
                      name='telefono'
                      id='telefono'
                      placeholder='Ingresa tu telefono'
                      className='w-full px-4 py-3 bg-neutral-200 placeholder:text-neutral-600'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.telefono}
                    />
                    {errors.telefono && touched.telefono && <span className='text-red-500 text-xs'>{errors.telefono}</span>}
                  </div>
                  <div className='w-full'>
                    <textarea
                      name='mensaje'
                      id='mensaje'
                      className='w-full px-4 py-3 bg-neutral-200 placeholder:text-neutral-600 resize-none'
                      onChange={handleChange}
                      cols={30}
                      rows={5}
                      placeholder='Ingresa tu mensaje'
                      onBlur={handleBlur}
                      value={values.mensaje}
                    />
                    {errors.mensaje && touched.mensaje && <span className='text-red-500 text-xs'>{errors.mensaje}</span>}
                  </div>
                  <div className='w-full flex justify-center'>
                    <button type='submit' className='w-fit px-4 py-2 text-black font-ConstellationTLPro-Bold rounded-lg border-2 border-neutral-400'>Enviar</button>
                  </div>

                </form>
              </div>
              <div className='w-full lg:w-1/2 space-y-4'>
                <h3 className='font-ConstellationTLPro-Bold'>Visítanos</h3>
                <div className='w-full flex gap-3 items-center'>
                  <img src={MapIcon} alt="map" width={40} height={40} />
                  <p>Calle de la República, s/n, ciudad, provincia</p>
                </div>
                <h3 className='font-ConstellationTLPro-Bold'>Contáctanos</h3>
                <div className='space-y-3'>
                  <div className='w-full flex gap-3 items-center'>
                    <img src={PhoneIcon} alt="phone" width={40} height={40} />
                    <a href='tel:+51987038024'>+51 987 038 024</a>
                  </div>
                  <div className='w-full flex gap-3 items-center'>
                    <img src={EmailIcon} alt="phone" width={40} height={40} />
                    <a href='mailto:ventas@logosperu.com' >ventas@logosperu.com</a>
                  </div>
                </div>
                <h3 className='font-ConstellationTLPro-Bold'>Nuestras Redes</h3>
                <div className='w-full flex flex-wrap gap-3 '>
                  <a href="#" className='p-1 bg-black text-quaternary rounded-full'>
                    <FaFacebookF size={23} />
                  </a>

                  <a href="#" className='p-1 bg-black text-quaternary rounded-full'>
                    <FaInstagram size={23} />
                  </a>

                  <a href="#" className='p-1 bg-black text-quaternary rounded-full'>
                    <FaYoutube size={23} />
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Inicio
