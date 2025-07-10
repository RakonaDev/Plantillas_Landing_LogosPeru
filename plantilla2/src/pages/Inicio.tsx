import { IoEyeSharp, IoHome, IoMail, IoPhonePortrait } from "react-icons/io5";
import Footer from "../components/estructura/Footer";
import Header from "../components/estructura/Header";
import Container from "../components/features/Container";
import SwiperBanners from "../components/utils/SwiperBanners";
import { FaMedal } from "react-icons/fa6";
import { LuBicepsFlexed } from "react-icons/lu";
import { redirectToElement } from "../logic/redirectToElement";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { BiCheck } from "react-icons/bi";
import { serviciosData } from "../lib/serviciosData";
import ServicioCard from "../components/features/ServicioCard";
import ProductoCard from "../components/features/ProductoCard";
import { productosData } from "../lib/productosData";
import HeaderV0 from "../components/estructura/HeaderV0";


export default function Inicio() {

  const formik = useFormik({
    initialValues: {
      nombre: '',
      correo: '',
      mensaje: '',
    },
    validationSchema: Yup.object({
      nombre: Yup.string().required('Este campo es obligatorio'),
      correo: Yup.string().email('Correo inválido').required('Este campo es obligatorio'),
      mensaje: Yup.string().required('Este campo es obligatorio'),
    }),
    onSubmit: (values) => {
      console.log('Formulario enviado:', values);
      // Aquí puedes enviar los datos a un backend o API externa
    },
  });

  return (
    <div>
      {/* <Header /> */}
      <HeaderV0 />

      <main className='w-full pt-20' id="inicio">
        <SwiperBanners />
      </main>

      <main className="w-full pt-10 text-quinary">
        <Container className="space-y-16">
          <div className="space-y-4" id="nosotros">
            <h2 className="mtext-2xl lg:text-3xl font-bold Rubik-Font text-center">Nuestra Historia</h2>
            <p className="text-center Raleway-Font">
              En Ferretería Monte nos especializamos en ofrecer un amplio surtido de herramientas, materiales de construcción, pinturas, electricidad, plomería y accesorios para el hogar. Nuestro enfoque está centrado en el cliente: contamos con un equipo capacitado para asesorarte y ayudarte a encontrar exactamente lo que necesitas.
            </p>
          </div>

          <div className="flex gap-4 flex-wrap justify-evenly">

            <div className="max-w-[17rem] min-w-[13rem] w-full h-auto border-2 border-neutral-400 px-3 pb-3 flex flex-col items-center rounded-xl hover:border-neutral-500 duration-300 transition-all hover:translate-y-1">
              <div className="p-3 w-fit bg-primary text-white rounded-full -translate-y-6 transition-all">
                <IoEyeSharp size={35} />
              </div>
              <div className="w-full space-y-3">
                <h3 className="Rubik-Font text-center text-xl font-medium">Visión</h3>
                <p className="text-center text-sm Raleway-Font">Ser la ferretería líder en la región, reconocida por su compromiso con la calidad, la innovación y el servicio al cliente, ofreciendo soluciones integrales para proyectos de construcción, mantenimiento y mejoras del hogar.</p>
              </div>
            </div>

            <div className="max-w-[17rem] min-w-[13rem] w-full h-auto border-2 border-neutral-400 px-3 pb-3 flex flex-col items-center rounded-xl hover:border-neutral-500 duration-300 transition-all hover:translate-y-1">
              <div className="p-3 w-fit bg-primary text-white rounded-full -translate-y-6 transition-all">
                <FaMedal size={35} />
              </div>
              <div className="w-full space-y-3">
                <h3 className="Rubik-Font text-center text-xl font-medium">Misión</h3>
                <p className="text-center text-sm Raleway-Font">Brindar a nuestros clientes una experiencia de compra confiable y satisfactoria, ofreciendo productos de ferretería de alta calidad, asesoría técnica especializada y un servicio excepcional, contribuyendo al éxito de cada proyecto, grande o pequeño.</p>
              </div>
            </div>

            <div className="max-w-[17rem] min-w-[13rem] w-full h-auto border-2 border-neutral-400 px-3 pb-3 flex flex-col items-center rounded-xl hover:border-neutral-500 duration-300 transition-all hover:translate-y-1">
              <div className="p-3 w-fit bg-primary text-white rounded-full -translate-y-6 transition-all">
                <LuBicepsFlexed size={35} />
              </div>
              <div className="w-full space-y-3">
                <h3 className="Rubik-Font text-center text-xl font-medium">Valores</h3>
                <ul>
                  <li><p className="text-sm Raleway-Font">Calidad garantizada</p></li>
                  <li><p className="text-sm Raleway-Font">Atención personalizada</p></li>
                  <li><p className="text-sm Raleway-Font">Compromiso con el cliente</p></li>
                  <li><p className="text-sm Raleway-Font">Rapidez y eficiencia</p></li>
                  <li><p className="text-sm Raleway-Font">Precios justos</p></li>
                  <li><p className="text-sm Raleway-Font">Innovación constante</p></li>
                  <li><p className="text-sm Raleway-Font">Cercanía y confianza</p></li>

                </ul>
              </div>
            </div>

          </div>
        </Container>

        <section className="w-full py-10 bg-quaternary text-white mt-10">
          <Container className="flex flex-col gap-6 items-center">
            <h3 className="Rubik-Font text-4xl font-bold text-center">¿Tienes dudas, necesitas una cotización o buscas un producto específico?</h3>
            <p className="Raleway-Font text-center">En Ferretería Monte estamos listos para ayudarte con atención personalizada y respuestas rápidas. Completa nuestro formulario de contacto y uno de nuestros asesores se comunicará contigo a la brevedad. ¡Queremos ser tu aliado en cada proyecto!</p>
            <button className="flex gap-3 items-center px-4 py-2 bg-white text-quaternary rounded-xl hover:text-white hover:bg-quaternary duration-300 transition-all" onClick={() => redirectToElement("contacto")}>
              <IoMail size={24} />
              <span>Contactar</span>
            </button>
          </Container>
        </section>
      </main>

      <main className="w-full py-10" id="productos">
        <Container className="space-y-5">
          <h2 className="text-3xl font-bold Rubik-Font text-center">Productos</h2>

          <section className="w-full flex gap-7 justify-evenly flex-wrap">
            {productosData.map((producto) => (
              <ProductoCard key={producto.id} producto={producto} />
            ))}
          </section>
        </Container>
      </main>

      <main className="w-full py-10 bg-primary" id="servicios">
        <Container className="space-y-5">
          <h2 className="text-3xl font-bold Rubik-Font text-center text-white">Servicios</h2>
          <section className="w-full flex gap-7 justify-evenly flex-wrap">
            {
              serviciosData.map((servicio) => {
                return (
                  <>
                    <ServicioCard servicio={servicio} />
                  </>
                )
              })
            }
          </section>
        </Container>
      </main>

      <main className="w-full py-10" id="contacto">
        <Container className="space-y-5">
          <h2 className="text-3xl font-bold Rubik-Font text-center">Contacto</h2>
          <main className="flex gap-4 lg:flex-row flex-col items-center">
            <section className="lg:w-1/2 w-full">
              <div className="max-w-md mx-auto mt-10 p-6 bg-white text-gray-800 rounded-2xl shadow-md">
                <form onSubmit={formik.handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm mb-1">Nombre</label>
                    <input
                      id="nombre"
                      name="nombre"
                      type="text"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.nombre}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                    {formik.touched.nombre && formik.errors.nombre && (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.nombre}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="correo" className="block text-sm mb-1">Correo</label>
                    <input
                      id="correo"
                      name="correo"
                      type="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.correo}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    />
                    {formik.touched.correo && formik.errors.correo && (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.correo}</div>
                    )}
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm mb-1">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.mensaje}
                      className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    ></textarea>
                    {formik.touched.mensaje && formik.errors.mensaje && (
                      <div className="text-red-500 text-sm mt-1">{formik.errors.mensaje}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-primary text-white rounded-xl hover:bg-green-800 transition"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </section>

            <section className="lg:w-1/2 w-full space-y-10">
              <div className="space-y-5">
                <div className="flex gap-2 items-center text-quaternary">
                  <IoMail size={24} />
                  <span className="text-black Rubik-Font">Email</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"> <span> <BiCheck size={24} /> </span> <p className="text-sm">ventas@logosperu.com</p></li>
                  <li className="flex gap-2 items-center"> <span> <BiCheck size={24} /> </span> <p className="text-sm">contacto@logosperu.com</p></li>
                </ul>
              </div>

              <div className="space-y-5">
                <div className="flex gap-2 items-center text-quaternary">
                  <IoPhonePortrait size={24} />
                  <span className="text-black Rubik-Font">Teléfonos:</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"> <span> <BiCheck size={24} /> </span> <p className="text-sm">+56 999 999 999</p></li>
                  <li className="flex gap-2 items-center"> <span> <BiCheck size={24} /> </span> <p className="text-sm">+56 999 999 999</p></li>
                </ul>
              </div>

              <div className="space-y-5">
                <div className="flex gap-2 items-center text-quaternary">
                  <IoHome size={24} />
                  <span className="text-black Rubik-Font">Sucursales:</span>
                </div>
                <ul className="space-y-2">
                  <li className="flex gap-2 items-center"> <span> <BiCheck size={24} /> </span> <p className="text-sm">Av. Principal 123, Centro Histórico</p></li>
                  <li className="flex gap-2 items-center"> <span> <BiCheck size={24} /> </span> <p className="text-sm">Calle Las Herramientas 456, Urb. Industrial Norte</p></li>
                </ul>
              </div>
            </section>

          </main>
          <div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}
