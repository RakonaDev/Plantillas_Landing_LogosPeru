export interface Categoria {
  id: number;
  nombre: string;
}

export const categorias: Categoria[] = [
  { id: 1, nombre: 'Herramientas' },
  { id: 2, nombre: 'Materiales de Construcción' },
  { id: 3, nombre: 'Electricidad' },
]