"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica para enviar el formulario
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      info: "+52 55 1234 5678",
      subInfo: "Lun - Vie: 9:00 AM - 7:00 PM",
    },
    {
      icon: Mail,
      title: "Email",
      info: "contacto@realstate.com",
      subInfo: "Respuesta en 24 horas",
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      info: "Av. Reforma 123, Col. Centro",
      subInfo: "Ciudad de México, CDMX",
    },
    {
      icon: Clock,
      title: "Horarios",
      info: "Lunes a Viernes: 9:00 - 19:00",
      subInfo: "Sábados: 9:00 - 14:00",
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "white" }} id="contacto">
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
            ¿Listo para Encontrar
            <span className="block" style={{ color: "#547792" }}>
              tu Propiedad Ideal?
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#547792" }}
          >
            Estamos aquí para ayudarte en cada paso del camino. Contáctanos hoy mismo y descubre cómo podemos hacer
            realidad tus sueños inmobiliarios.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8" style={{ color: "#213448" }}>
              Información de Contacto
            </motion.h3>

            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex items-start p-6 rounded-2xl"
                style={{ backgroundColor: "#ECEFCA" }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="p-3 rounded-full mr-4" style={{ backgroundColor: "#213448" }}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1" style={{ color: "#213448" }}>
                    {item.title}
                  </h4>
                  <p className="font-medium mb-1 text-gray-800">
                    {item.info}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.subInfo}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Mapa placeholder */}
            {/* <motion.div
              variants={cardVariants}
              className="h-64 rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#94B4C1" }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-4" style={{ color: "#213448" }} />
                  <p className="font-semibold" style={{ color: "#213448" }}>
                    Mapa Interactivo
                  </p>
                  <p className="text-sm" style={{ color: "#213448" }}>
                    Encuentra nuestra ubicación
                  </p>
                </div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Formulario de contacto */}
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div
              variants={cardVariants}
              className="p-8 rounded-3xl shadow-lg"
              style={{ backgroundColor: "#ECEFCA" }}
            >
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6" style={{ color: "#213448" }}>
                Envíanos un Mensaje
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#213448" }}>
                      Nombre Completo
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-colors"
                        style={{ backgroundColor: "white" }}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#213448" }}>
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-colors"
                        style={{ backgroundColor: "white" }}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#213448" }}>
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-colors"
                        style={{ backgroundColor: "white" }}
                        placeholder="+52 55 1234 5678"
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "#213448" }}>
                      Asunto
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-colors appearance-none"
                        style={{ backgroundColor: "white" }}
                        required
                      >
                        <option value="">Selecciona un asunto</option>
                        <option value="compra">Compra de propiedad</option>
                        <option value="venta">Venta de propiedad</option>
                        <option value="alquiler">Alquiler</option>
                        <option value="tasacion">Tasación</option>
                        <option value="inversion">Inversión</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-semibold mb-2" style={{ color: "#213448" }}>
                    Mensaje
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-transparent focus:border-blue-500 outline-none transition-colors resize-none"
                      style={{ backgroundColor: "white" }}
                      placeholder="Cuéntanos más sobre lo que necesitas..."
                      required
                    />
                  </div>
                </motion.div>

                <motion.button
                
                  variants={itemVariants}
                  type="submit"
                  className="w-full py-4 rounded-xl button1 font-semibold text-white flex items-center justify-center space-x-2"
                  
                  style={{ backgroundColor: "#213448" }}
                  /*
                  whileHover={{
                    backgroundColor: "#547792",
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  */
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Mensaje</span>
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
