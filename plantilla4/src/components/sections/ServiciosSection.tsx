/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdMail } from "react-icons/md";
import Container from "../features/Container";
import { motion } from "framer-motion";

const serviciosData = [
  {
    id: 1,
    imagen: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    titulo: "Paquetes Turísticos",
    descripcion: "Descubre destinos increíbles con nuestros paquetes todo incluido. Desde playas paradisíacas hasta ciudades históricas."
  },
  {
    id: 2,
    imagen: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    titulo: "Vuelos Internacionales",
    descripcion: "Encuentra las mejores tarifas en vuelos nacionales e internacionales. Comparamos precios para ofrecerte las mejores opciones."
  },
  {
    id: 3,
    imagen: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    titulo: "Reservas de Hoteles",
    descripcion: "Desde hoteles boutique hasta resorts de lujo. Te ayudamos a encontrar el alojamiento perfecto para tu viaje."
  },
  {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    titulo: "Tours y Excursiones",
    descripcion: "Vive experiencias únicas con nuestros tours guiados. Conoce la cultura local y los lugares más emblemáticos."
  }
];

const ServiceCard = ({ servicio, index }: { servicio: any, index: number }) => {

  function scrollToElement(id: string) {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="relative overflow-hidden group">
        <img 
          src={servicio.imagen} 
          alt={servicio.titulo}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      
      <div className="p-6">
        <motion.h4 
          className="text-xl font-bold mb-3 text-gray-800"
          style={{ color: '#205781' }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {servicio.titulo}
        </motion.h4>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {servicio.descripcion}
        </p>
        
        <motion.button
          whileHover={{ scale: 1.05, backgroundColor: '#1a4d6b' }}
          whileTap={{ scale: 0.98 }}
          className="mt-4 px-6 py-2 button rounded-full text-white font-medium text-sm transition-colors duration-300 flex gap-2 items-center"
          style={{ backgroundColor: '#205781' }}
          onClick={() => scrollToElement(`#contacto`)}
        >
          <MdMail size={21} />
          Contactar
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function ServiciosSection() {
  return (
    <div className='w-full py-16 bg-quaternary' id="servicios">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: '#205781' }}
          >
            Nuestros Servicios
          </h3>
          <motion.div 
            className="w-24 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: '#205781' }}
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Descubre todos los servicios que ofrecemos para hacer de tu viaje una experiencia inolvidable
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviciosData.map((servicio, index) => (
            <ServiceCard 
              key={servicio.id} 
              servicio={servicio} 
              index={index}
            />
          ))}
        </section>
      </Container>
    </div>
  );
}
