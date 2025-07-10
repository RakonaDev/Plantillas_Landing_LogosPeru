"use client"

import {
  Stethoscope,
  Heart,
  Brain,
  Eye,
  Phone,
  Calendar,
  Shield,
  Activity,
  Users,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

import Servicio1 from "../../assets/servicios/servicio1.webp"
import Servicio2 from "../../assets/servicios/servicio2.webp"
import Servicio3 from "../../assets/servicios/servicio3.webp"
import Servicio4 from "../../assets/servicios/servicio4.webp"
import Servicio5 from "../../assets/servicios/servicio5.webp"
import Servicio6 from "../../assets/servicios/servicio6.webp"
import { scrollToElement } from "../../logic/scrollToElement"

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const mainServices = [
    {
      icon: Stethoscope,
      title: "Consulta General",
      description: "Evaluación médica integral con diagnóstico y tratamiento personalizado para tu bienestar general.",
      features: ["Evaluación completa", "Diagnóstico preciso", "Plan de tratamiento", "Seguimiento continuo"],
      price: "Desde S/. 50",
      popular: false,
      image: Servicio1,
    },
    {
      icon: Heart,
      title: "Cardiología",
      description: "Especialistas en salud cardiovascular para prevenir y tratar enfermedades del corazón.",
      features: ["Electrocardiograma", "Ecocardiograma", "Holter 24h", "Consulta especializada"],
      price: "Desde S/. 80",
      popular: true,
      image: Servicio2,
    },
    {
      icon: Brain,
      title: "Neurología",
      description: "Diagnóstico y tratamiento de trastornos del sistema nervioso con tecnología avanzada.",
      features: ["Evaluación neurológica", "EEG", "Tratamiento migraña", "Trastornos del sueño"],
      price: "Desde S/. 90",
      popular: false,
      image: Servicio3,
    },
    {
      icon: Eye,
      title: "Oftalmología",
      description: "Cuidado integral de la salud visual con equipos de última generación.",
      features: ["Examen de vista", "Cirugía láser", "Tratamiento glaucoma", "Lentes de contacto"],
      price: "Desde S/. 60",
      popular: false,
      image: Servicio4,
    },
    {
      icon: Phone,
      title: "Telemedicina",
      description: "Consultas médicas remotas desde la comodidad de tu hogar con la misma calidad profesional.",
      features: ["Consulta virtual", "Recetas digitales", "Disponible 24/7", "Seguimiento remoto"],
      price: "Desde S/. 30",
      popular: false,
      image: Servicio5,
    },
    {
      icon: Shield,
      title: "Medicina Preventiva",
      description: "Programas de prevención y chequeos regulares para mantener tu salud óptima.",
      features: ["Chequeo anual", "Vacunación", "Screening cáncer", "Análisis laboratorio"],
      price: "Desde S/. 120",
      popular: false,
      image: Servicio6,
    },
  ]

  const additionalServices = [
    {
      icon: Calendar,
      title: "Citas Flexibles",
      description: "Agenda tu cita cuando más te convenga, incluyendo fines de semana y horarios extendidos.",
    },
    {
      icon: Activity,
      title: "Monitoreo Continuo",
      description: "Seguimiento personalizado de tu salud con reportes regulares y alertas preventivas.",
    },
    {
      icon: Users,
      title: "Planes Familiares",
      description: "Descuentos especiales para familias con cobertura integral para todos los miembros.",
    },
    {
      icon: Clock,
      title: "Atención de Urgencia",
      description: "Servicio de emergencia médica disponible las 24 horas para situaciones críticas.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
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
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as Variants

  const popularCardVariants = {
    ...cardVariants,
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as Variants

  return (
    <section className="py-10 bg-terciary" ref={ref} id="servicios">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16 mt-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl Nove-font-bold md:text-5xl font-bold text-gray-900 mb-6" variants={itemVariants}>
            Atención médica <span className="text-primary">integral y especializada</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            Ofrecemos una amplia gama de servicios médicos con los más altos estándares de calidad, utilizando
            tecnología de vanguardia y un enfoque centrado en el paciente.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer ${
                service.popular ? "ring-2 ring-primary ring-opacity-50" : ""
              }`}
              variants={service.popular ? popularCardVariants : cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                  <Star className="h-3 w-3 fill-current" />
                  Popular
                </motion.div>
              )}

              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                {/* Icon Overlay */}
                <motion.div
                  className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg"
                  whileHover={{
                    rotate: [0, -5, 5, -5, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="h-6 w-6 text-primary" />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold Nove-font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center text-gray-700 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.1 + featureIndex * 0.1 + 0.5 }}
                    >
                      <CheckCircle className="h-4 w-4 text-secondary mr-2 flex-shrink-0" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold Nove-font-bold text-primary">{service.price}</div>
                  <motion.button
                    className={`px-4 py-2 button rounded-lg font-semibold text-sm z-20 transition-colors border-white border-2 ${
                      service.popular
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-secondary text-white hover:bg-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToElement('#contacto', 100)}
                  >
                    Agendar Consulta
                    <span>Agendar</span>
                  </motion.button>
                </div>
              </div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-emerald-600/5 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Services */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 Nove-font-bold">Servicios Adicionales</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Beneficios extra que hacen la diferencia en tu experiencia médica
            </p>
          </div>

          <motion.div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants}>
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center cursor-pointer"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="p-3 bg-emerald-50 rounded-lg w-fit mx-auto mb-4 group"
                  whileHover={{
                    backgroundColor: "#578FCA",
                    color: "#fff",
                    rotate: 360,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="h-6 w-6 text-primary group-hover:text-white transition-all duration-300" />
                </motion.div>
                <h4 className="text-lg font-bold text-gray-900 Nove-font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <motion.div
            className="bg-gradient-to-r from-secondary to-primary text-white rounded-2xl p-12 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3
              className="text-3xl md:text-4xl font-bold mb-4 Nove-font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              ¿No encuentras lo que buscas?
            </motion.h3>
            <motion.p
              className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              Contáctanos para consultas personalizadas y servicios especializados adaptados a tus necesidades
              específicas
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white button text-primary px-8 py-4 border-white border-2 rounded-xl font-semibold text-lg shadow-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f0fdf4",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 }}
                onClick={() => scrollToElement('#contacto', 100)}
              >
                Consulta Personalizada
                <span>Consulta Gratis</span>
              </motion.button>
              <motion.button
                className="border-2 button border-white text-white px-8 py-4 rounded-xl font-semibold text-lg"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "#3674B5",
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ delay: 0.6 }}
                onClick={() => scrollToElement('#servicios', 100)}
              >
                Ver Todos los Servicios
                <span>
                  Consulta Gratis
                </span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
