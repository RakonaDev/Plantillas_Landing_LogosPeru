"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Bed, Bath, Square, Car, Heart, Eye, Star, Building, Home } from "lucide-react"

import Propiedad1 from "../../assets/propiedades/propiedad1.avif"
import Propiedad2 from "../../assets/propiedades/propiedad2.avif"
import Propiedad3 from "../../assets/propiedades/propiedad3.avif"
import Propiedad4 from "../../assets/propiedades/propiedad4.avif"
import Propiedad5 from "../../assets/propiedades/propiedad5.avif"
import { scrollToElement } from "../../logic/scrollToElement"

export default function PropertiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  } as Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as Variants

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as Variants

  const properties = [
    {
      id: 1,
      image: Propiedad1,
      title: "Casa Moderna en Zona Residencial",
      description:
        "Hermosa casa de dos plantas con acabados de lujo, jardín amplio y ubicación privilegiada en zona residencial exclusiva.",
      price: "$450,000",
      location: "Colonia Del Valle, CDMX",
      bedrooms: 4,
      bathrooms: 3,
      area: 280,
      parking: 2,
      type: "Casa",
      icon: Home,
      featured: true,
    },
    {
      id: 2,
      image: Propiedad2,
      title: "Departamento Ejecutivo Centro",
      description:
        "Moderno departamento en el corazón de la ciudad, ideal para ejecutivos. Completamente amueblado con vista panorámica.",
      price: "$320,000",
      location: "Centro Histórico, CDMX",
      bedrooms: 2,
      bathrooms: 2,
      area: 120,
      parking: 1,
      type: "Departamento",
      icon: Building,
      featured: false,
    },
    {
      id: 3,
      image: Propiedad3,
      title: "Villa Familiar con Alberca",
      description:
        "Espaciosa villa familiar con alberca, jardín, área de BBQ y múltiples espacios de entretenimiento para toda la familia.",
      price: "$680,000",
      location: "Las Lomas, Estado de México",
      bedrooms: 5,
      bathrooms: 4,
      area: 420,
      parking: 3,
      type: "Villa",
      icon: Home,
      featured: true,
    },
    {
      id: 4,
      image: Propiedad4,
      title: "Loft Industrial Renovado",
      description:
        "Único loft de estilo industrial completamente renovado, techos altos, espacios abiertos y diseño contemporáneo.",
      price: "$280,000",
      location: "Roma Norte, CDMX",
      bedrooms: 1,
      bathrooms: 1,
      area: 95,
      parking: 1,
      type: "Loft",
      icon: Building,
      featured: false,
    },
    {
      id: 5,
      image: Propiedad5,
      title: "Penthouse con Terraza Privada",
      description:
        "Exclusivo penthouse con terraza privada de 100m², jacuzzi, vista a la ciudad y acabados de primera calidad.",
      price: "$850,000",
      location: "Polanco, CDMX",
      bedrooms: 3,
      bathrooms: 3,
      area: 250,
      parking: 2,
      type: "Penthouse",
      icon: Building,
      featured: true,
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#ECEFCA" }} id="propiedades">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: "#213448" }}
          >
            Propiedades
            <span className="block" style={{ color: "#547792" }}>
              Destacadas
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#547792" }}
          >
            Descubre nuestra selección de propiedades exclusivas, cada una cuidadosamente seleccionada para ofrecerte
            las mejores opciones del mercado inmobiliario.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100"
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              {/* Imagen */}
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-64 object-cover"
                />

                {/* Badge de tipo */}
                <div
                  className="absolute top-4 left-4 flex items-center px-3 py-1 rounded-full"
                  style={{ backgroundColor: "#213448" }}
                >
                  <property.icon className="w-4 h-4 text-white mr-2" />
                  <span className="text-white text-sm font-semibold">{property.type}</span>
                </div>

                {/* Badge destacado */}
                {property.featured && (
                  <div
                    className="absolute top-4 right-4 flex items-center px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#547792" }}
                  >
                    <Star className="w-4 h-4 text-white mr-1" />
                    <span className="text-white text-sm font-semibold">Destacado</span>
                  </div>
                )}

                {/* Botones de acción */}
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <motion.button
                    className="p-2 rounded-full bg-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Heart className="w-5 h-5" style={{ color: "#547792" }} />
                  </motion.button>
                  <motion.button
                    className="p-2 rounded-full bg-white shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Eye className="w-5 h-5" style={{ color: "#547792" }} />
                  </motion.button>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <MapPin className="w-4 h-4 mr-2" style={{ color: "#94B4C1" }} />
                  <span className="text-sm" style={{ color: "#547792" }}>
                    {property.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "#213448" }}>
                  {property.title}
                </h3>

                <p className="text-sm leading-relaxed mb-4" style={{ color: "#547792" }}>
                  {property.description}
                </p>

                {/* Características */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center">
                    <Bed className="w-4 h-4 mr-2" style={{ color: "#94B4C1" }} />
                    <span className="text-sm" style={{ color: "#547792" }}>
                      {property.bedrooms} Recámaras
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Bath className="w-4 h-4 mr-2" style={{ color: "#94B4C1" }} />
                    <span className="text-sm" style={{ color: "#547792" }}>
                      {property.bathrooms} Baños
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Square className="w-4 h-4 mr-2" style={{ color: "#94B4C1" }} />
                    <span className="text-sm" style={{ color: "#547792" }}>
                      {property.area} m²
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Car className="w-4 h-4 mr-2" style={{ color: "#94B4C1" }} />
                    <span className="text-sm" style={{ color: "#547792" }}>
                      {property.parking} Estacionamientos
                    </span>
                  </div>
                </div>

                {/* Precio y botón */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold" style={{ color: "#213448" }}>
                    {property.price}
                  </div>
                  <motion.button
                    className="px-6 py-2 rounded-full font-semibold text-white bg-primary button1"
                    /*
                    style={{ backgroundColor: "#547792" }}
                    whileHover={{
                      backgroundColor: "#213448",
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    */
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToElement(`#contacto`, 100)}
                  >
                    Contactar
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Botón ver más */}
        {/* <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.button
            className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg"
            style={{ backgroundColor: "#213448" }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "#547792",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Todas las Propiedades
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}
