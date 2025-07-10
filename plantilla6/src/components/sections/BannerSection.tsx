"use client"

import type React from "react"

import { motion, type Variants } from "framer-motion"
import { useState } from "react"
import { Search, MapPin, Home, DollarSign, Filter, Play, Star, Users, Award, TrendingUp } from "lucide-react"

import Banner from "../../assets/banner.avif"
import { scrollToElement } from "../../logic/scrollToElement"

export default function HeroBanner() {
  const [searchData, setSearchData] = useState({
    type: "compra",
    location: "",
    priceRange: "",
    propertyType: "",
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
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

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  } as Variants

  const stats = [
    { icon: Home, number: "500+", label: "Propiedades" },
    { icon: Users, number: "1000+", label: "Clientes Felices" },
    { icon: Award, number: "15+", label: "Años Experiencia" },
    { icon: TrendingUp, number: "98%", label: "Satisfacción" },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearchData({
      ...searchData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Search data:", searchData)
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="inicio">
      <img src={Banner} alt="banner" className="w-full h-full absolute top-0 left-0 object-cover -z-10" />
      <div className="w-full h-full absolute top-0 left-0 bg-white/50 z-0"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 z-10">
        {/* Geometric shapes */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute top-20 right-20 w-32 h-32 rounded-full opacity-20"
          style={{ backgroundColor: "#94B4C1" }}
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "1s" }}
          className="absolute bottom-32 left-16 w-24 h-24 rounded-full opacity-20"
          
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          style={{ animationDelay: "2s" }}
          className="absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-20"
          
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "#94B4C1" }}
            >
              <span className="text-sm font-semibold flex items-center" style={{ color: "#213448" }}>
                <Star className="w-4 h-4 mr-2" />
                #1 Inmobiliaria de Confianza
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              <span style={{ color: "#213448" }}>Encuentra tu</span>
              <br />
              <span style={{ color: "#547792" }}>Hogar Perfecto</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: "#547792" }}
            >
              Más de 15 años ayudando a familias a encontrar la propiedad de sus sueños.
              <span className="font-semibold"> Tu nuevo hogar te está esperando.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                className="px-8 py-4 button1 rounded-full font-semibold text-white text-lg shadow-lg"
                style={{ backgroundColor: "#213448" }}
                onClick={() => scrollToElement('#propiedades', 100)}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Propiedades
              </motion.button>

              <motion.button
                className="px-8 py-2 rounded-full font-semibold border-2 flex items-center justify-center"
                style={{
                  borderColor: "#213448",
                  color: "#213448",
                  backgroundColor: "transparent",
                }}
                whileHover={{
                  backgroundColor: "#213448",
                  color: "white",
                  
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Video
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 rounded-full" style={{ backgroundColor: "#94B4C1" }}>
                      <stat.icon className="w-6 h-6" style={{ color: "#213448" }} />
                    </div>
                  </div>
                  <div className="text-2xl font-bold" style={{ color: "#213448" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-primary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Search Form */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="lg:justify-self-end">
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-3xl shadow-2xl max-w-md mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2" style={{ color: "#213448" }}>
                  Busca tu Propiedad
                </h3>
                <p style={{ color: "#547792" }}>Encuentra exactamente lo que necesitas</p>
              </div>

              <form onSubmit={handleSearch} className="space-y-4">
                {/* Tipo de operación */}
                <div className="flex rounded-xl overflow-hidden" style={{ backgroundColor: "#ECEFCA" }}>
                  <button
                    type="button"
                    className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                      searchData.type === "compra" ? "text-white" : ""
                    }`}
                    style={{
                      backgroundColor: searchData.type === "compra" ? "#213448" : "transparent",
                      color: searchData.type === "compra" ? "white" : "#547792",
                    }}
                    onClick={() => setSearchData({ ...searchData, type: "compra" })}
                  >
                    Comprar
                  </button>
                  <button
                    type="button"
                    className={`flex-1 py-3 px-4 font-semibold transition-colors ${
                      searchData.type === "alquiler" ? "text-white" : ""
                    }`}
                    style={{
                      backgroundColor: searchData.type === "alquiler" ? "#213448" : "transparent",
                      color: searchData.type === "alquiler" ? "white" : "#547792",
                    }}
                    onClick={() => setSearchData({ ...searchData, type: "alquiler" })}
                  >
                    Alquilar
                  </button>
                </div>

                {/* Ubicación */}
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                  <input
                    type="text"
                    name="location"
                    value={searchData.location}
                    onChange={handleInputChange}
                    placeholder="¿Dónde quieres vivir?"
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors"
                  />
                </div>

                {/* Tipo de propiedad */}
                <div className="relative">
                  <Home className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                  <select
                    name="propertyType"
                    value={searchData.propertyType}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors appearance-none"
                  >
                    <option value="">Tipo de propiedad</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                    <option value="villa">Villa</option>
                    <option value="loft">Loft</option>
                    <option value="penthouse">Penthouse</option>
                  </select>
                </div>

                {/* Rango de precio */}
                <div className="relative">
                  <DollarSign className="absolute left-3 top-3 w-5 h-5" style={{ color: "#547792" }} />
                  <select
                    name="priceRange"
                    value={searchData.priceRange}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 outline-none transition-colors appearance-none"
                  >
                    <option value="">Rango de precio</option>
                    <option value="0-200000">$0 - $200,000</option>
                    <option value="200000-400000">$200,000 - $400,000</option>
                    <option value="400000-600000">$400,000 - $600,000</option>
                    <option value="600000+">$600,000+</option>
                  </select>
                </div>

                {/* Botones */}
                <div className="flex gap-3">
                  <motion.button
                    type="submit"
                    className="flex-1 py-3 button1 rounded-xl font-semibold text-white flex items-center justify-center"
                    style={{ backgroundColor: "#213448" }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Buscar
                  </motion.button>

                  <motion.button
                    type="button"
                    className="px-4 py-3 rounded-xl border-2"
                    style={{
                      borderColor: "#94B4C1",
                      color: "#547792",
                    }}
                    whileHover={{
                      backgroundColor: "#94B4C1",
                      color: "#213448",
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Filter className="w-5 h-5" />
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
