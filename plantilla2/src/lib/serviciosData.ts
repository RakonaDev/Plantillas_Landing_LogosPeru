
import Servicio1 from "../assets/images/servicios/servicio1.webp"
import Servicio2 from "../assets/images/servicios/servicio2.webp"
import Servicio3 from "../assets/images/servicios/servicio3.webp"
import Servicio4 from "../assets/images/servicios/servicio4.webp"

export interface Servicio {
  id: number;
  nombre: string;
  imagen: string;
  descripcion: string;
}

export const serviciosData: Servicio[] = [
  {
    id: 1,
    nombre: "Corte de madera y melamina",
    imagen: Servicio1,
    descripcion:
      "Ofrecemos cortes precisos de madera y melamina para tus proyectos. Nuestro equipo utiliza maquinaria profesional para asegurar acabados prolijos, medidas exactas y rapidez. Ideal para muebles, estantes, divisiones y estructuras personalizadas."
  },
  {
    id: 2,
    nombre: "Duplicado de llaves",
    imagen: Servicio2,
    descripcion:  
      "Realizamos duplicados de llaves comunes y de seguridad en pocos minutos. Usamos equipos modernos para garantizar copias exactas y funcionales. Perfecto para llaves de casa, oficina o candados. Rápido, confiable y siempre disponible en tienda."
  },
  {
    id: 3,
    nombre: "Asesoría técnica para proyectos",
    imagen: Servicio3,
    descripcion:
      "Recibe orientación especializada para tus proyectos de construcción, remodelación o mantenimiento. Te ayudamos a elegir los materiales y herramientas adecuados según tu objetivo. Nuestro equipo técnico está listo para resolver tus dudas con claridad."
  },
  {
    id: 4,
    nombre: "Envío a domicilio",
    imagen: Servicio4,
    descripcion:
      "Llevamos tus productos hasta tu casa, taller u obra con puntualidad y seguridad. Ideal para materiales pesados o pedidos grandes. Nuestro servicio de reparto cubre gran parte de la ciudad y garantiza entregas sin complicaciones ni demoras."
  }
];