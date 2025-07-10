"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Users, Award, TrendingUp, Home, Key, Heart } from "lucide-react"

export default function NosotrosSection() {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as Variants

  const stats = [
    { icon: Home, number: "500+", label: "Propiedades Vendidas" },
    { icon: Users, number: "1000+", label: "Clientes Satisfechos" },
    { icon: Award, number: "15+", label: "Años de Experiencia" },
    { icon: TrendingUp, number: "98%", label: "Tasa de Éxito" },
  ]

  const values = [
    {
      icon: Key,
      title: "Confianza",
      description: "Construimos relaciones duraderas basadas en la transparencia y honestidad en cada transacción.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Nos dedicamos completamente a encontrar la propiedad perfecta para cada cliente.",
    },
    {
      icon: Building2,
      title: "Experiencia",
      description: "Más de 15 años en el mercado inmobiliario nos respaldan con conocimiento profundo del sector.",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 w-full" style={{ backgroundColor: "#ECEFCA" }} id="nosotros">
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
            Tu Socio de Confianza en
            <span className="block" style={{ color: "#547792" }}>
              Bienes Raíces
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#547792" }}
          >
            Somos una agencia inmobiliaria líder con más de 15 años de experiencia, especializada en conectar a las
            familias con el hogar de sus sueños y ayudar a los inversionistas a encontrar las mejores oportunidades del
            mercado.
          </motion.p>
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="text-center p-6 rounded-2xl shadow-lg"
              style={{ backgroundColor: "white" }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full" style={{ backgroundColor: "#94B4C1" }}>
                  <stat.icon className="w-6 h-6" style={{ color: "#213448" }} />
                </div>
              </div>
              <div className="text-3xl font-bold mb-2" style={{ color: "#213448" }}>
                {stat.number}
              </div>
              <div className="text-sm font-medium" style={{ color: "#547792" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Misión y Visión */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="p-8 rounded-3xl" style={{ backgroundColor: "white" }}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#213448" }}>
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold" style={{ color: "#213448" }}>
                Nuestra Misión
              </h3>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: "#547792" }}>
              Facilitar el proceso de compra, venta y alquiler de propiedades, brindando un servicio personalizado y
              profesional que supere las expectativas de nuestros clientes, mientras construimos relaciones duraderas
              basadas en la confianza y la excelencia.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }} className="p-8 rounded-3xl" style={{ backgroundColor: "#547792" }}>
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "white" }}>
                <Award className="w-6 h-6" style={{ color: "#547792" }} />
              </div>
              <h3 className="text-2xl font-bold text-white">Nuestra Visión</h3>
            </div>
            <p className="text-lg leading-relaxed text-white">
              Ser la agencia inmobiliaria de referencia en la región, reconocida por nuestra innovación, integridad y
              compromiso con la satisfacción del cliente, liderando la transformación digital del sector inmobiliario.
            </p>
          </motion.div>
        </motion.div>

        {/* Valores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.h3 variants={itemVariants} className="text-3xl font-bold mb-12" style={{ color: "#213448" }}>
            Nuestros Valores
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="p-8 rounded-3xl text-center"
                style={{ backgroundColor: "white" }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full" style={{ backgroundColor: "#94B4C1" }}>
                    <value.icon className="w-8 h-8" style={{ color: "#213448" }} />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-4" style={{ color: "#213448" }}>
                  {value.title}
                </h4>
                <p className="leading-relaxed" style={{ color: "#547792" }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-16"
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
            Conoce Nuestro Equipo
          </motion.button>
        </motion.div> */}
      </div>
    </section>
  )
}
