"use client"

import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Phone,
  Mail,
  MapPin,
  Home,
  Key,
  Calculator,
  FileText,
  Settings,
  TrendingUp,
  Clock,
} from "lucide-react"
import LogoFooter from "../../assets/logoFooter.webp"
import LogosPeru from "../../assets/logosPeru.webp"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  } as Variants

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  } as Variants

  const services = [
    { name: "Compra y Venta", icon: Home },
    { name: "Alquiler y Renta", icon: Key },
    { name: "Tasaciones", icon: Calculator },
    { name: "Asesoría Legal", icon: FileText },
    { name: "Gestión de Propiedades", icon: Settings },
    { name: "Inversiones", icon: TrendingUp },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#" },
    { name: "Instagram", icon: Instagram, url: "#" },
    { name: "Twitter", icon: Twitter, url: "#" },
    { name: "LinkedIn", icon: Linkedin, url: "#" },
    { name: "YouTube", icon: Youtube, url: "#" },
  ]

  return (
    <footer ref={ref} style={{ backgroundColor: "#213448" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="py-16"
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Información de la empresa */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img src={LogoFooter} alt="logo" className="w-28 " />
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Tu socio de confianza en bienes raíces. Más de 15 años conectando familias con el hogar de sus sueños y
                ayudando a inversionistas a encontrar las mejores oportunidades.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="p-3 rounded-full transition-colors"
                    style={{ backgroundColor: "#547792" }}
                    whileHover={{
                      backgroundColor: "#94B4C1",
                      scale: 1.1,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Servicios */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white mb-6">Nuestros Servicios</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="flex items-center text-gray-300 hover:text-white transition-colors group"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      <service.icon className="w-4 h-4 mr-3 group-hover:text-white" style={{ color: "#94B4C1" }} />
                      {service.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Enlaces útiles */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white mb-6">Enlaces Útiles</h4>
              <ul className="space-y-3">
                {[
                  "Sobre Nosotros",
                  "Propiedades",
                  "Blog Inmobiliario",
                  "Calculadora Hipotecaria",
                  "Preguntas Frecuentes",
                  "Términos y Condiciones",
                ].map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors"
                      whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Información de contacto */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white mb-6">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" style={{ color: "#94B4C1" }} />
                  <div>
                    <p className="text-gray-300">Av. Reforma 123, Col. Centro</p>
                    <p className="text-gray-300">Ciudad de México, CDMX</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" style={{ color: "#94B4C1" }} />
                  <p className="text-gray-300">+52 55 1234 5678</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3" style={{ color: "#94B4C1" }} />
                  <p className="text-gray-300">contacto@realstate.com</p>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 mt-1" style={{ color: "#94B4C1" }} />
                  <div>
                    <p className="text-gray-300">Lun - Vie: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sáb: 9:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="py-6 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-white text-sm mb-4 md:mb-0">
            © 2025 Real State. Todos los derechos reservados.
          </p>
          <a href="https://logosperu.com.pe/" className="text-white flex gap-2 items-center text-sm mb-4 md:mb-0 hover:text-white transition-colors duration-300">
            <span>Realizado por </span>
            <span> <img src={LogosPeru} alt="w" className="w-5" /> </span>
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
