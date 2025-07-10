"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Home, Key, Calculator, FileText, Settings, TrendingUp } from "lucide-react"
import { scrollToElement } from "../../logic/scrollToElement"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.6,
      },
    },
  }

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

  const services = [
    {
      icon: Home,
      title: "Compra y Venta",
      description:
        "Te acompañamos en todo el proceso de compra o venta de tu propiedad, desde la valoración hasta la firma.",
      features: ["Valoración gratuita", "Marketing digital", "Negociación experta"],
    },
    {
      icon: Key,
      title: "Alquiler y Renta",
      description: "Gestionamos el alquiler de tu propiedad o te ayudamos a encontrar el lugar perfecto para rentar.",
      features: ["Inquilinos verificados", "Contratos legales", "Gestión de cobros"],
    },
    {
      icon: Calculator,
      title: "Tasaciones",
      description: "Realizamos tasaciones profesionales y certificadas para conocer el valor real de tu propiedad.",
      features: ["Tasadores certificados", "Informes detallados", "Análisis de mercado"],
    },
    {
      icon: FileText,
      title: "Asesoría Legal",
      description: "Brindamos asesoría legal completa para todas tus transacciones inmobiliarias.",
      features: ["Revisión de documentos", "Trámites legales", "Asesoría fiscal"],
    },
    {
      icon: Settings,
      title: "Gestión de Propiedades",
      description: "Administramos tu propiedad de manera integral para maximizar su rentabilidad.",
      features: ["Mantenimiento", "Administración", "Reportes mensuales"],
    },
    {
      icon: TrendingUp,
      title: "Inversiones",
      description: "Te asesoramos para encontrar las mejores oportunidades de inversión inmobiliaria.",
      features: ["Análisis de ROI", "Oportunidades exclusivas", "Estrategias personalizadas"],
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "white" }} id="servicios">
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
            Servicios Integrales
            <span className="block" style={{ color: "#547792" }}>
              para Todas tus Necesidades
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#547792" }}
          >
            Ofrecemos una gama completa de servicios inmobiliarios diseñados para brindarte la mejor experiencia y los
            mejores resultados en cada transacción.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-8 rounded-3xl shadow-lg border border-gray-100"
              style={{ backgroundColor: "white" }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full" style={{ backgroundColor: "#213448" }}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-4 text-center" style={{ color: "#213448" }}>
                {service.title}
              </h3>

              <p className="text-center mb-6 leading-relaxed" style={{ color: "#547792" }}>
                {service.description}
              </p>

              <div className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: "#94B4C1" }}></div>
                    <span className="text-sm" style={{ color: "#547792" }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <motion.button
                className="w-full mt-6 py-3 button rounded-full font-semibold border-2 transition-colors"
                style={{
                  borderColor: "#213448",
                  color: "#213448",
                  backgroundColor: "transparent",
                }}
                /*
                whileHover={{
                  backgroundColor: "#213448",
                  color: "white",
                  transition: { duration: 0.2 },
                }}
                */
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToElement(`#contacto`, 100)}
              >
                <span>Más Información</span>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
