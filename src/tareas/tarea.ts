export interface Tarea {
  id: number;
  titulo: string;
  prioridad: 'alta' | 'media' | 'baja';
  completada: boolean;
  fechaCreacion: string;
}