import type { Categoria } from "./categoriaData";

import Producto1 from "../assets/images/productos/producto1.webp"
import Producto1_1 from "../assets/images/productos/producto1.1.webp"

import Producto2 from "../assets/images/productos/producto2.avif"
import Producto2_1 from "../assets/images/productos/producto2.1.webp"

import Producto3 from "../assets/images/productos/producto3.webp"
import Producto3_1 from "../assets/images/productos/producto3.1.webp"

import Producto4 from "../assets/images/productos/producto4.webp"
import Producto4_1 from "../assets/images/productos/producto4.1.webp"

import Producto5 from "../assets/images/productos/producto5.webp"
import Producto5_1 from "../assets/images/productos/producto5.1.webp"

import Producto6 from "../assets/images/productos/producto6.webp"
import Producto6_1 from "../assets/images/productos/producto6_1.webp"

import Producto7 from "../assets/images/productos/producto7.webp"
import Producto7_1 from "../assets/images/productos/producto7_1.webp"

import Producto8 from "../assets/images/productos/producto8.webp"
import Producto8_1 from "../assets/images/productos/producto8_1.webp"

import Producto9 from "../assets/images/productos/producto9.webp"
import Producto9_1 from "../assets/images/productos/producto9_1.webp"

import Producto10 from "../assets/images/productos/producto10.webp"
import Producto10_1 from "../assets/images/productos/producto10_1.webp"

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string[];
  categoria: Categoria
}

export const productosData: Producto[] = [
  {
    id: 1,
    nombre: 'Martillo de Uña',
    descripcion: 'Martillo de acero con mango de goma antideslizante.',
    precio: 25.90,
    imagen: [
      Producto1,
      Producto1_1
    ],
    categoria: { id: 1, nombre: 'Herramientas' },
  },
  {
    id: 2,
    nombre: 'Destornillador Philips',
    descripcion: 'Destornillador de estrella, punta imantada, mango ergonómico.',
    precio: 14.50,
    imagen: [
      Producto2,
      Producto2_1
    ],
    categoria: { id: 1, nombre: 'Herramientas' },
  },
  {
    id: 3,
    nombre: 'Alicate Universal',
    descripcion: 'Alicate de acero templado de 7 pulgadas.',
    precio: 19.80,
    imagen: [
      Producto3,
      Producto3_1
    ],
    categoria: { id: 1, nombre: 'Herramientas' },
  },
  {
    id: 4,
    nombre: 'Cemento Portland 42.5kg',
    descripcion: 'Bolsa de cemento de alta resistencia para todo tipo de construcción.',
    precio: 39.90,
    imagen: [
      Producto4,
      Producto4_1
    ],
    categoria: { id: 2, nombre: 'Materiales de Construcción' },
  },
  {
    id: 5,
    nombre: 'Ladrillo King Kong',
    descripcion: 'Ladrillo cerámico de alta calidad, resistente a la humedad.',
    precio: 1.20,
    imagen: [
      Producto5,
      Producto5_1
    ],
    categoria: { id: 2, nombre: 'Materiales de Construcción' },
  },
  {
    id: 6,
    nombre: 'Balde de Arena Fina',
    descripcion: 'Arena seleccionada ideal para acabados finos.',
    precio: 5.00,
    imagen: [
      Producto6,
      Producto6_1
    ],
    categoria: { id: 2, nombre: 'Materiales de Construcción' },
  },
  {
    id: 7,
    nombre: 'Interruptor Simple',
    descripcion: 'Interruptor eléctrico de una vía, color blanco, 10A.',
    precio: 3.50,
    imagen: [
      Producto7,
      Producto7_1
    ],
    categoria: { id: 3, nombre: 'Electricidad' },
  },
  {
    id: 8,
    nombre: 'Cable Eléctrico 2.5mm',
    descripcion: 'Cable unifilar de cobre, recubierto, ideal para instalaciones domiciliarias.',
    precio: 2.90,
    imagen: [
      Producto8,
      Producto8_1
    ],
    categoria: { id: 3, nombre: 'Electricidad' },
  },
  {
    id: 9,
    nombre: 'Foco LED 9W',
    descripcion: 'Foco LED de bajo consumo, luz fría, base E27.',
    precio: 7.80,
    imagen: [
      Producto9,
      Producto9_1
    ],
    categoria: { id: 3, nombre: 'Electricidad' },
  },
  {
    id: 10,
    nombre: 'Caja de Registro Eléctrica',
    descripcion: 'Caja plástica resistente al calor para conexiones eléctricas.',
    precio: 4.20,
    imagen: [
      Producto10,
      Producto10_1
    ],
    categoria: { id: 3, nombre: 'Electricidad' },
  }
]