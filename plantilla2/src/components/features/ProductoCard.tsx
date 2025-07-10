/* eslint-disable @typescript-eslint/no-explicit-any */

import { Autoplay, Navigation } from "swiper/modules";
import type { Producto } from "../../lib/productosData";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function SwiperNavButtons() {
  const swiper = useSwiper();

  return (
    <div className="absolute inset-x-0 bottom-0 z-10 flex justify-between px-4 pb-2">
      <button
        className="text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 focus:outline-none"
        onClick={() => swiper.slidePrev()}
        aria-label="Anterior"
      >
        <FaArrowLeft size={16} />
      </button>
      <button
        className="text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all duration-300 focus:outline-none"
        onClick={() => swiper.slideNext()}
        aria-label="Siguiente"
      >
        <FaArrowRight size={16} />
      </button>
    </div>
  );
}

export default function ProductoCard({ producto }: { producto: Producto }) {
  const swiperRef = useRef<any>(null);

  return (
    <div className="max-w-[18rem] w-full bg-white shadow-lg hover:shadow-xl rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
      <div className="relative"> {/* Contenedor relativo para los botones de navegación */}
        <Swiper
          modules={[Autoplay, Navigation]}
          loop={true}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full h-48 sm:h-56 md:h-64 rounded-t-2xl" // Altura fija para el swiper
        >
          {producto.imagen.map((imagen, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center bg-gray-100 rounded-t-2xl">
              <img
                src={imagen}
                alt={producto.nombre}
                className="object-cover w-full h-full rounded-t-2xl" // Ajuste de la imagen
              />
            </SwiperSlide>
          ))}
          {/* Renderizar los botones de navegación dentro del Swiper */}
          <SwiperNavButtons />
        </Swiper>
      </div>

      <div className="p-4 space-y-3">
        <h3 className="Rubik-Font text-xl font-bold text-gray-800 leading-tight">
          {producto.nombre}
        </h3>
        <p className="Raleway-Font text-sm text-gray-600 line-clamp-3"> {/* Limita a 3 líneas */}
          {producto.descripcion}
        </p>
        <p className="text-base font-semibold text-green-600">
          Precio: S/. {producto.precio.toFixed(2)} {/* Formato de precio */}
        </p>
        <a
          href={`https://wa.me/?text=Hola! Estoy interesado en el producto: ${producto.nombre} - ${producto.descripcion}. Precio: S/. ${producto.precio.toFixed(2)}`} // Enlace de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-green-500 hover:bg-green-600 w-full text-white px-5 py-2.5 rounded-lg flex gap-2 items-center justify-center text-base Raleway-Font font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          <FaWhatsapp size={20} />
          Pedir Producto
        </a>
      </div>
    </div>
  );

  /*
  return (
    <div className="max-w-[18rem] w-full shadow-md p-3 rounded-xl">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="relative"
      >
        {
          producto.imagen.map((imagen, index) => {
            return (
              <SwiperSlide key={index} className="rounded-xl">
                <img src={imagen} alt={producto.nombre} className="w-full rounded-xl" />
              </SwiperSlide>
            )
          })
        }
        <SwiperNavButtons />
      </Swiper>
      <div className="space-y-3">
        <h3 className="Rubik-Font text-lg font-medium text-terciary">{producto.nombre}</h3>
        <p className="Raleway-Font text-sm">{producto.descripcion}</p>
        <p className="text-sm text-primary">Precio: S/. {producto.precio}</p>
        <a href="#" className="bg-green-500 hover:bg-green-600 w-fit text-white px-4 py-2 rounded-xl flex gap-2 items-center text-sm Raleway-Font transition-all duration-300">
          <FaWhatsapp size={22} />
          Pedir Producto
        </a>
      </div>
    </div>
  )
  */
}
