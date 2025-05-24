
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
    titulo: "Traslados al Aeropuerto y Recepción Turística",
    descripcion: "Servicio especializado para turistas y viajeros frecuentes. Incluye recojo puntual en aeropuerto, asistencia con equipaje y opción de guía turística básica durante el trayecto. Ideal para quienes visitan el país por primera vez o quieren una llegada cómoda y segura."
  },
  {
    imagen: Servicio2,
    titulo: "City Tours y Rutas Turísticas Personalizadas",
    descripcion: "Recorridos turísticos privados o grupales con chofer-guía opcional. Ofrecemos rutas hacia los principales atractivos culturales, gastronómicos y naturales de la ciudad o región. Incluye paradas programadas y opciones de itinerario a medida."
  },
  {
    imagen: Servicio3,
    titulo: "Transporte Ejecutivo Corporativo",
    descripcion: "Traslados elegantes y profesionales para ejecutivos, reuniones, eventos y delegaciones empresariales. Vehículos modernos con WiFi, aire acondicionado y atención confidencial. Disponibilidad por horas, días o rutas específicas."
  },
  {
    imagen: Servicio4,
    titulo: "Viajes Interprovinciales y Servicios Privados Nacionales",
    descripcion: "Viajes a medida entre ciudades, con horarios flexibles y paradas acordadas. Ideal para familias, grupos o empresas que necesitan moverse con seguridad y sin depender del transporte público."
  },
  {
    imagen: Servicio5,
    titulo: "Reservas Programadas y Servicio 24/7",
    descripcion: "Ofrecemos atención permanente para clientes que requieren traslados en horarios especiales o que desean dejar su viaje agendado con anticipación. Incluye seguimiento por WhatsApp, confirmación vía correo y soporte inmediato ante cualquier cambio."
  },

]