import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter, FaYoutube } from 'react-icons/fa6';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import Banner1 from "../../assets/banner/banner1.webp"
import Banner2 from "../../assets/banner/banner2.webp"
import Banner3 from "../../assets/banner/banner3.webp"

export const FullscreenBannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Datos de ejemplo para los slides
  const slides = [
    {
      id: 1,
      image: Banner1,
      overlay: 'bg-primary/70',
      slogan1: "Vive más, viaja mejor.",
      slogan2: "Tu próximo destino te está esperando",
      description: "En Traveling te llevamos a playas, montañas y ciudades que despiertan tus sentidos. Sal de lo cotidiano y conéctate con lo que realmente importa: tú y tu aventura.",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      }
    },
    {
      id: 2,
      image: Banner2  ,
      overlay: 'bg-secondary/70',
      slogan1: "Diseñamos tu viaje como si fuera nuestro",
      slogan2: "Tú sueñas, nosotros lo hacemos posible",
      description: "Creamos itinerarios únicos que se ajustan a tu estilo, presupuesto y sueños. Porque cada viajero es diferente, cada experiencia también lo es.",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      }
    },
    {
      id: 3,
      image: Banner3,
      overlay: 'bg-primary/70',
      slogan1: "Tu tranquilidad es nuestro destino",
      slogan2: "Viajar seguro, disfrutar al máximo",
      description: "Con aliados estratégicos, seguros de viaje y asistencia 24/7, garantizamos que solo te preocupes por disfrutar. Nosotros nos encargamos del resto.",
      socials: {
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        youtube: "https://youtube.com"
      }
    }
  ];

  // Auto-play del slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden" id='inicio'>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Imagen de fondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          
          {/* Overlay con gradiente colorido */}
          <div className={`absolute inset-0 ${slides[currentSlide].overlay}`} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Contenido principal */}
          <div className="relative h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Slogans */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 sm:mb-8"
            >
              <h1 className="text-3xl sm:text-5xl md:text-6xl text-quaternary lg:text-7xl xl:text-8xl font-black mb-2 sm:mb-4 tracking-tight leading-tight">
                {slides[currentSlide].slogan1}
              </h1>
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light tracking-wide opacity-90 leading-tight">
                {slides[currentSlide].slogan2}
              </h2>
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl leading-relaxed mb-8 sm:mb-10 lg:mb-12 opacity-85 px-2"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* Redes sociales */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex space-x-4 sm:space-x-6 lg:space-x-8 mb-12 sm:mb-16"
            >
              <a
                href={slides[currentSlide].socials.facebook}
                className="group relative p-2 sm:p-3 lg:p-4 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              >
                <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 text-quaternary lg:h-8 group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>
              <a
                href={slides[currentSlide].socials.twitter}
                className="group relative p-2 sm:p-3 lg:p-4 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              >
                <FaTwitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-quaternary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-sky-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>
              <a
                href={slides[currentSlide].socials.youtube}
                className="group relative p-2 sm:p-3 lg:p-4 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm"
              >
                <FaYoutube className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-quaternary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controles de navegación */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm text-white group"
      >
        <BiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300 backdrop-blur-sm text-white group"
      >
        <BiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>

      {/* Indicadores de slide */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 sm:w-10 lg:w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white shadow-lg'
                : 'bg-white bg-opacity-40 hover:bg-opacity-60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};