"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react"
import Logo from "../../assets/logo.png"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Servicios", href: "#servicios", hasDropdown: true },
    { name: "Propiedades", href: "#propiedades" },
    { name: "Contacto", href: "#contacto" },
  ]

  const services = [
    "Compra y Venta",
    "Alquiler y Renta",
    "Tasaciones",
    "Asesoría Legal",
    "Gestión de Propiedades",
    "Inversiones",
  ]

  function scrollToElement(id: string, offset: number = 0) {
    const element = document.querySelector(id)
    console.log(element)
    if (element) {

      const elementRect = element.getBoundingClientRect();
      const elementPosition = elementRect.top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } else {
      console.warn(`Elemento con ID "${id}" no encontrado.`);
    }
  }

  return (
    <>
      {/* Top Bar */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block py-2 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#213448" }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6 text-white">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <span>+52 55 1234 5678</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <span>contacto@inmoexpert.com</span>
            </div>
          </div>
          <div className="text-white">
            <span>Lun - Vie: 9:00 AM - 7:00 PM | Sáb: 9:00 AM - 2:00 PM</span>
          </div>
        </div>
      </motion.div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-lg backdrop-blur-md" : ""}`}
        style={{
          backgroundColor: isScrolled ? "rgba(236, 239, 202, 0.95)" : "#ECEFCA",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-1">
            {/* Logo */}
            <img src={Logo} alt="logo" className="w-28 " />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <motion.button
                    onClick={() => scrollToElement(item.href, 100)}
                    className="flex items-center font-medium transition-colors hover:text-blue-600"
                    style={{ color: "#213448" }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown className="w-4 h-4 ml-1" />}
                  </motion.button>

                  {/* Dropdown Menu */}
                  {item.hasDropdown && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                      <div className="p-4">
                        {services.map((service, serviceIndex) => (
                          <motion.button
                            key={serviceIndex}
                            onClick={() => scrollToElement("#servicios", 100)}
                            className="block py-2 px-3 rounded-lg transition-colors"
                            style={{ color: "#547792" }}
                            whileHover={{
                              backgroundColor: "#94B4C1",
                              color: "#213448",
                              x: 5,
                            }}
                            transition={{ duration: 0.2 }}
                          >
                            {service}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <motion.button
              className="hidden lg:block px-6 py-3 z-20 button1 rounded-full text-white bg-primary font-semibold shadow-lg"
              onClick={() => scrollToElement('#contacto', 100)}
              whileTap={{ scale: 0.95 }}
            >
              Consulta Gratuita
            </motion.button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ color: "#213448" }}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white border-t border-gray-200"
        >
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  scrollToElement(item.href)
                  setIsMenuOpen(false)
                }}
                className="block py-2 font-medium"
                style={{ color: "#213448" }}

                whileHover={{ x: 10, color: "#547792" }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              className="w-full mt-4 px-6 py-3 rounded-full font-semibold text-white"
              style={{ backgroundColor: "#213448" }}
              onClick={() => scrollToElement('#contacto', 100)}
              whileTap={{ scale: 0.95 }}
            >
              Consulta Gratuita
            </motion.button>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}
