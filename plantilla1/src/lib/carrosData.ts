

import Carro3 from '../assets/carros/carro3.png'
import Carro4 from '../assets/carros/carro4.png'
import Carro5 from '../assets/carros/carro5.png'
import Van1 from '../assets/carros/carro8.png'
import Van2 from '../assets/carros/carro9.png'
import Van3 from '../assets/carros/carro11.png'
import Minivan1 from '../assets/carros/carro10.png'
import Minivan2 from '../assets/carros/carro12.png'
import Bus1 from '../assets/carros/carro13.png'
import Bus2 from '../assets/carros/carro14.png'
import Bus3 from '../assets/carros/carro15.png'

export interface CarrosData {
  id: number
  nombre: string
  marca: string
  imagen: string
  precioPorDia: number
  descripcion: string
}

export const carrosData: CarrosData[] = [
  {
    id: 3,
    nombre: "Civic Type R",
    marca: "Honda",
    imagen: Carro3,
    precioPorDia: 160,
    descripcion:
      "El Honda Civic Type R es una máquina de precisión hecha para quienes aman la conducción deportiva. Alquilalo por día y disfruta de su suspensión rígida, tracción delantera de alto rendimiento y un diseño agresivo que no pasará desapercibido en la calle ni en la pista.",
  },
  {
    id: 4,
    nombre: "Corolla Cross",
    marca: "Toyota",
    imagen: Carro4,
    precioPorDia: 90,
    descripcion:
      "Si buscas economía, confort y seguridad, el Toyota Corolla Cross híbrido es la mejor opción. Con amplio espacio interior, consumo eficiente y las últimas asistencias a la conducción, es ideal para viajes familiares, turismo urbano o alquiler corporativo diario.",
  },
  {
    id: 5,
    nombre: "X5",
    marca: "BMW",
    imagen: Carro5,
    precioPorDia: 210,
    descripcion:
      "El BMW X5 combina lujo, espacio y potencia en un SUV ideal para viajes premium o eventos ejecutivos. Alquílalo por día y disfruta de tracción integral, acabados de cuero, sistema de navegación inteligente y una experiencia de manejo inigualable.",
  },
  {
    id: 8,
    nombre: "Sprinter",
    marca: "Mercedes-Benz",
    imagen: Van1,
    precioPorDia: 120,
    descripcion:
      "La Mercedes-Benz Sprinter es perfecta para el transporte ejecutivo o grupal. Con capacidad para hasta 15 pasajeros, aire acondicionado y excelente rendimiento, es ideal para empresas, turismo o eventos.",
  },
  {
    id: 9,
    nombre: "Hiace",
    marca: "Toyota",
    imagen: Van2,
    precioPorDia: 100,
    descripcion:
      "Toyota Hiace ofrece confiabilidad, bajo consumo de combustible y capacidad para 12 pasajeros. Perfecta para servicios de transporte privado, excursiones escolares o uso corporativo.",
  },
  {
    id: 10,
    nombre: "Transit Van",
    marca: "Ford",
    imagen: Van3,
    precioPorDia: 110,
    descripcion:
      "La Ford Transit Van es versátil y cómoda, ideal para transporte urbano o turístico. Alquila esta van para grupos pequeños que necesitan espacio y seguridad durante el viaje.",
  },
  {
    id: 11,
    nombre: "Odyssey",
    marca: "Honda",
    imagen: Minivan1,
    precioPorDia: 95,
    descripcion:
      "La Honda Odyssey es una minivan familiar con gran confort, tecnología y espacio. Ideal para vacaciones, traslados familiares o viajes con niños gracias a su configuración versátil.",
  },
  {
    id: 12,
    nombre: "Sienna",
    marca: "Toyota",
    imagen: Minivan2,
    precioPorDia: 90,
    descripcion:
      "La Toyota Sienna híbrida ofrece espacio, eficiencia y seguridad en un solo vehículo. Perfecta para alquiler diario con enfoque familiar o traslados ejecutivos de bajo perfil.",
  },
  {
    id: 13,
    nombre: "UrbanStar 60",
    marca: "Iveco",
    imagen: Bus1,
    precioPorDia: 450,
    descripcion:
      "Bus urbano con capacidad para 60 personas. Ideal para excursiones, eventos o transporte interprovincial. Comodidad y eficiencia garantizadas.",
  },
  {
    id: 14,
    nombre: "Marcopolo Paradiso",
    marca: "Scania",
    imagen: Bus2,
    precioPorDia: 500,
    descripcion:
      "Bus de lujo diseñado para viajes de larga distancia. Cuenta con baño, Wi-Fi, climatización y entretenimiento a bordo. Comodidad total para grupos grandes.",
  },
  {
    id: 15,
    nombre: "Volare Access",
    marca: "Volare",
    imagen: Bus3,
    precioPorDia: 420,
    descripcion:
      "Minibús accesible y compacto para trayectos urbanos o cortos. Ideal para transporte escolar, empresarial o turismo interno con grupos de hasta 30 personas.",
  }
]