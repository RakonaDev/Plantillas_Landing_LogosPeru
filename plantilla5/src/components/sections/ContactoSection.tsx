"use client"

import type React from "react"

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
  User,
  Building,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "#3674B5",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@consultoriamedica.com", "citas@consultoriamedica.com"],
      color: "#3674B5",
    },
    {
      icon: MapPin,
      title: "Ubicación",
      details: ["Av. Principal 123", "Ciudad, Estado 12345"],
      color: "#3674B5",
    },
    {
      icon: Clock,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 AM - 6:00 PM", "Sáb: 9:00 AM - 2:00 PM"],
      color: "#3674B5",
    },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", color: "#3674B5" },
    { icon: Twitter, name: "Twitter", color: "#3674B5" },
    { icon: Instagram, name: "Instagram", color: "#3674B5" },
    { icon: Linkedin, name: "LinkedIn", color: "#3674B5" },
  ]

  const services = [
    "Consulta General",
    "Cardiología",
    "Neurología",
    "Oftalmología",
    "Telemedicina",
    "Medicina Preventiva",
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica de envío del formulario
  }

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  } as Variants

  return (
    <section className="py-20 relative overflow-hidden bg-slate-100" ref={ref} id="contacto">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#578FCA" }} />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: "#FADA7A" }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full" style={{ backgroundColor: "#3674B5" }} />
        <div className="absolute bottom-40 right-10 w-28 h-28 rounded-full" style={{ backgroundColor: "#578FCA" }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 Nove-font-bold"
            style={{ color: "#3674B5" }}
            variants={itemVariants}
          >
            Estamos aquí para <span style={{ color: "#578FCA" }}>ayudarte</span>
          </motion.h2>
          <motion.p
            className="text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: "#3674B5" }}
            variants={itemVariants}
          >
            Ponte en contacto con nosotros para agendar tu cita o resolver cualquier duda sobre nuestros servicios
            médicos.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
            <motion.h3 className="text-3xl Nove-font-bold font-bold mb-8" style={{ color: "#3674B5" }} variants={itemVariants}>
              Información de Contacto
            </motion.h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: `${info.color}20` }}
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="h-6 w-6" style={{ color: info.color }} />
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: "#3674B5" }}>
                      {info.title}
                    </h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl Nove-font-bold font-semibold mb-4" style={{ color: "#3674B5" }}>
                Síguenos en redes sociales
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="p-3 bg-white rounded-full shadow-lg group"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: social.color,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div>
                      <social.icon className="h-6 w-6 group-hover:text-white text-primary" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3 className="text-3xl Nove-font-bold font-bold mb-6" style={{ color: "#3674B5" }} variants={itemVariants}>
                Envíanos un mensaje
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#3674B5" }}>
                    <User className="inline h-4 w-4 mr-2" />
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                    style={{
                      borderColor: "#578FCA",
                      
                    }}
                    placeholder="Tu nombre completo"
                    required
                  />
                </motion.div>

                <motion.div className="grid md:grid-cols-2 gap-4" variants={itemVariants}>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#3674B5" }}>
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                      style={{
                        borderColor: "#578FCA",
                        
                      }}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: "#3674B5" }}>
                      <Phone className="inline h-4 w-4 mr-2" />
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                      style={{
                        borderColor: "#578FCA",
                        
                      }}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#3674B5" }}>
                    <Building className="inline h-4 w-4 mr-2" />
                    Servicio de interés
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                    style={{
                      borderColor: "#578FCA",
                      
                    }}
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2" style={{ color: "#3674B5" }}>
                    <MessageCircle className="inline h-4 w-4 mr-2" />
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors resize-none"
                    style={{
                      borderColor: "#578FCA",
                      
                    }}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full button py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-all duration-300"
                  style={{ backgroundColor: "#3674B5", color: "white" }}
                  whileHover={{
                    backgroundColor: "#578FCA",
                    scale: 1.02,
                  }}
                  whileTap={{ scale: 0.98 }}
                  variants={itemVariants}
                >
                  <Send className="h-7 w-7 mx-auto" />
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
