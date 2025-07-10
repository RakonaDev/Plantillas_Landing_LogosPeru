
import { motion, type Variants } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { BiAward, BiHeart, BiShield } from "react-icons/bi"
import { CgLock } from "react-icons/cg"
import { CiStethoscope } from "react-icons/ci"
import { FaUserSecret } from "react-icons/fa"

import Hero1 from "../../assets/heroes/hero1.webp"
import Hero2 from "../../assets/heroes/hero2.webp"
import Hero3 from "../../assets/heroes/hero3.webp"
import { scrollToElement } from "../../logic/scrollToElement"

export default function NosotrosSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    { number: "500+", label: "Pacientes Atendidos" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "50+", label: "Especialistas" },
    { number: "98%", label: "Satisfacción del Cliente" },
  ]

  const values = [
    {
      icon: BiHeart,
      title: "Compromiso",
      description: "Nos dedicamos completamente al bienestar y la salud de nuestros pacientes.",
    },
    {
      icon: BiShield,
      title: "Confianza",
      description: "Construimos relaciones sólidas basadas en la transparencia y profesionalismo.",
    },
    {
      icon: BiAward,
      title: "Excelencia",
      description: "Mantenemos los más altos estándares de calidad en todos nuestros servicios.",
    },
    {
      icon: CgLock,
      title: "Disponibilidad",
      description: "Estamos aquí cuando nos necesitas, con atención personalizada y oportuna.",
    },
  ]

  const team = [
    {
      name: "Dra. María González",
      role: "Directora Médica",
      specialty: "Medicina Interna",
      image: Hero1,
    },
    {
      name: "Dr. Carlos Rodríguez",
      role: "Consultor Senior",
      specialty: "Cardiología",
      image: Hero2,
    },
    {
      name: "Dra. Ana Martínez",
      role: "Especialista",
      specialty: "Endocrinología",
      image: Hero3,
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    }
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

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as Variants

  return (
    <section className="py-10 bg-gradient-to-b from-slate-100 to-white" ref={ref} id="nosotros">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16 mt-5"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2 
            className="text-4xl Nove-font-bold md:text-5xl font-bold text-gray-900 mb-6" 
            variants={itemVariants}
          >
            Cuidando tu salud con <span className="text-primary">experiencia y dedicación</span>
          </motion.h2>
          <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" variants={itemVariants}>
            Somos una empresa líder en consultorías médicas, comprometida con brindar atención de calidad y soluciones
            integrales para el cuidado de tu salud.
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div key={index} className="text-center" variants={statsVariants} whileHover={{ scale: 1.1 }}>
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.1 + 0.5, duration: 0.6, ease: "easeOut" }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <motion.div className="bg-white rounded-xl shadow-lg p-8 border-0 group hover:bg-primary transition-all duration-300" variants={cardVariants} whileHover="hover">
            <div className="flex items-center mb-6">
              <motion.div
                className="p-3 bg-primary/30 group-hover:bg-secondary rounded-lg mr-4 duration-300 transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <CiStethoscope className="h-8 w-8 text-secondary group-hover:text-white duration-300 transition-all" />
              </motion.div>
              <h3 className="text-2xl Nove-font-bold font-bold text-gray-900 group-hover:text-white duration-300 transition-all">Nuestra Misión</h3>
            </div>
            <p className="text-gray-600 group-hover:text-gray-200 leading-relaxed text-lg duration-300 transition-all">
              Proporcionar servicios de consultoría médica de la más alta calidad, combinando experiencia clínica,
              tecnología avanzada y un enfoque humanizado para mejorar la salud y calidad de vida de nuestros pacientes.
            </p>
          </motion.div>

          <motion.div className="bg-white rounded-xl shadow-lg p-8 border-0 group hover:bg-primary transition-all duration-300" variants={cardVariants} whileHover="hover">
            <div className="flex items-center mb-6">
              <motion.div
                className="p-3 bg-primary/30 group-hover:bg-secondary rounded-lg mr-4 duration-300 transition-all"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaUserSecret className="h-8 w-8 text-secondary group-hover:text-white duration-300 transition-all" />
              </motion.div>
              <h3 className="text-2xl Nove-font-bold font-bold text-gray-900 group-hover:text-white duration-300 transition-all">Nuestra Visión</h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg group-hover:text-gray-200 duration-300 transition-all">
              Ser reconocidos como la empresa de consultorías médicas más confiable y innovadora, estableciendo nuevos
              estándares en atención médica personalizada y accesible para toda la comunidad.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <div className="mb-20">
          <motion.div
            className="text-center mb-12"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-gray-900 Nove-font-bold mb-4">Nuestros Valores</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y decisiones
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 text-center border-0 cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="p-4 bg-secondary/30 rounded-full w-fit mx-auto mb-4"
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <value.icon className="h-8 w-8 text-secondary" />
                </motion.div>
                <h4 className="text-xl font-bold Nove-font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Team */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <h3 className="text-3xl font-bold text-gray-900 Nove-font-bold mb-4">Nuestro Equipo</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Profesionales altamente calificados comprometidos con tu bienestar
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center border-0 cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative mb-6">
                <motion.img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-secondary/30"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#578FCA",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <h4 className="text-xl Nove-font-bold font-bold text-gray-900 mb-2">{member.name}</h4>
              <p className="text-primary font-semibold mb-1">{member.role}</p>
              <p className="text-gray-600">{member.specialty}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <motion.div
            className="bg-primary text-white rounded-xl shadow-lg p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-3xl font-bold mb-4 Nove-font-bold">¿Listo para cuidar tu salud?</h3>
            <p className="text-xl mb-8 text-emerald-100">Contáctanos hoy y descubre cómo podemos ayudarte</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white button text-primary px-8 py-3 rounded-lg font-semibold transition-colors border-white border-2"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f0fdf4",
                }}
                onClick={() => scrollToElement('#contacto', 100)}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consulta
                <span>Redireccioname</span>
              </motion.button>
              <motion.button
                className="border-2 button border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "white",
                  color: "#3674b5",
                }}
                onClick={() => scrollToElement('#servicios', 100)}
                whileTap={{ scale: 0.95 }}
              >
                Conocer Servicios
                <span>Redireccioname</span>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}