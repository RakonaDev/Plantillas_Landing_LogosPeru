
import Servicio1 from "../assets/servicios/servicio1.webp"
import Servicio2 from "../assets/servicios/servicio2.webp"
import Servicio3 from "../assets/servicios/servicio3.webp"
import Servicio4 from "../assets/servicios/servicio4.webp"
import Servicio5 from "../assets/servicios/servicio5.webp"

export interface ServicioData {
  imagen: string
  titulo: string
  descripcion: string
}

export const serviciosData: ServicioData[] = [
  {
    imagen: Servicio1,
    titulo: "Alquiler de Autos por Día, Semana o Mes",
    descripcion: "Servicio estándar para quienes necesitan un vehículo por un período corto o medio. Incluye opciones económicas, intermedias y de lujo, con seguros y asistencia incluida."
  },
  {
    imagen: Servicio2,
    titulo: "Alquiler para Turismo (Auto + Rutas Recomendadas)",
    descripcion: "Dirigido a turistas nacionales e internacionales. Incluye autos cómodos, mapas con rutas turísticas, GPS, y asesoría personalizada sobre destinos y puntos de interés."
  },
  {
    imagen: Servicio3,
    titulo: "Alquiler Corporativo para Empresas",
    descripcion: "Servicio exclusivo para empresas que necesitan movilidad para sus colaboradores. Contratos flexibles, facturación mensual, mantenimiento incluido y beneficios especiales por flota."
  },
  {
    imagen: Servicio4,
    titulo: "Alquiler con Chofer Profesional",
    descripcion: "Ideal para clientes que desean despreocuparse de manejar. Ofrecemos conductores capacitados, puntualidad, seguridad y atención ejecutiva, perfecto para eventos, traslados y turismo VIP."
  },
  {
    imagen: Servicio5,
    titulo: "Entrega y Recojo a Domicilio o Aeropuerto",
    descripcion: "Servicio adicional que mejora la experiencia del cliente: llevamos y recogemos el vehículo en la ubicación que elija (casa, oficina, hotel o aeropuerto), ahorrando tiempo y ofreciendo máxima comodidad."
  },

]