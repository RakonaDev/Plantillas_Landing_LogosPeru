
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Shield,
  Award,
  Stethoscope,
  ChevronUp,
} from "lucide-react"
import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import LogoFooter from "../../assets/logoFooter.webp"
import LogosPeru from "../../assets/logosPeru.webp"
import { scrollToElement } from "../../logic/scrollToElement"

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios" },
    { name: "Contacto", href: "#contacto" },
  ]

  const services = [
    { name: "Consulta General", href: "#" },
    { name: "Cardiología", href: "#" },
    { name: "Neurología", href: "#" },
    { name: "Oftalmología", href: "#" },
    { name: "Telemedicina", href: "#" },
    { name: "Medicina Preventiva", href: "#" },
  ]

  const legalLinks = [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos y Condiciones", href: "#" },
    { name: "Aviso Legal", href: "#" },
    { name: "Cookies", href: "#" },
  ]

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#", color: "#3674B5" },
    { icon: Twitter, name: "Twitter", href: "#", color: "#578FCA" },
    { icon: Instagram, name: "Instagram", href: "#", color: "#FADA7A" },
    { icon: Linkedin, name: "LinkedIn", href: "#", color: "#3674B5" },
  ]

  const certifications = [
    { name: "ISO 9001", icon: Award },
    { name: "Certificación Médica", icon: Shield },
    { name: "Acreditación Nacional", icon: Stethoscope },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as Variants

  const linkVariants = {
    hover: {
      x: 5,
      color: "#578FCA",
      transition: {
        duration: 0.2,
      },
    },
  } as Variants

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "#3674B5" }} ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: "#FADA7A" }} />
        <div className="absolute top-40 right-20 w-24 h-24 rounded-full" style={{ backgroundColor: "#F5F0CD" }} />
        <div className="absolute bottom-20 left-1/4 w-40 h-40 rounded-full" style={{ backgroundColor: "#578FCA" }} />
        <div className="absolute bottom-10 right-10 w-28 h-28 rounded-full" style={{ backgroundColor: "#FADA7A" }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <motion.div
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={LogoFooter} alt="logo" className="w-28 h-fit" />
              </motion.div>
              <p className="text-blue-100 leading-relaxed mb-6">
                Somos una empresa líder en consultorías médicas, comprometida con brindar atención de calidad y
                soluciones integrales para el cuidado de tu salud.
              </p>

              {/* Certifications */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white mb-3">Certificaciones</h4>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <cert.icon className="h-5 w-5" style={{ color: "#FADA7A" }} />
                    <span className="text-blue-100">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white Nove-font-bold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li key={index} onClick={() => scrollToElement(link.href, 100)}>
                    <motion.span
                      
                      className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {link.name}
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white Nove-font-bold mb-6">Nuestros Servicios</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li key={index}>
                    <motion.a
                      href={service.href}
                      className="text-blue-100 hover:text-white transition-colors cursor-pointer"
                      variants={linkVariants}
                      whileHover="hover"
                    >
                      {service.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact & Newsletter */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xl font-bold text-white Nove-font-bold mb-6">Contacto</h4>
              <div className="space-y-4 mb-6">
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-5 w-5" style={{ color: "#FADA7A" }} />
                  <span className="text-blue-100">+1 (555) 123-4567</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-5 w-5" style={{ color: "#FADA7A" }} />
                  <span className="text-blue-100">info@mediconsulta.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-5 w-5" style={{ color: "#FADA7A" }} />
                  <span className="text-blue-100">Av. Principal 123, Ciudad</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Clock className="h-5 w-5" style={{ color: "#FADA7A" }} />
                  <span className="text-blue-100">Lun - Vie: 8:00 AM - 6:00 PM</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Social Media & Legal */}
        <motion.div
          className="border-t border-blue-400 py-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-white font-medium mr-2">Síguenos:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white bg-opacity-10 rounded-full transition-all duration-300"
                  whileHover={{
                    scale: 1.2,
                    backgroundColor: social.color,
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="h-5 w-5 text-white" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center space-x-6">
              {legalLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-blue-100 hover:text-white text-sm transition-colors"
                  whileHover={{ y: -2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-blue-400 py-6 text-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <p className="text-blue-100 flex justify-center gap-2">
            © 2024 Medical. Todos los derechos reservados. | {" "}
            <a href="https://logosperu.com.pe/" className="flex gap-2 items-center">Realizado por <span><img src={LogosPeru} alt="" className="w-5" /></span></a>
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-50"
        style={{ backgroundColor: "#FADA7A", color: "#3674B5" }}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#F5F0CD",
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>
    </footer>
  )
}
