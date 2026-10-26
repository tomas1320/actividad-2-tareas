import type { Tarea } from './tarea.js';

export class TareasRepository {
  private readonly tareas: Tarea[] = [
    {
      id: 1,
      titulo: 'Tarea 1',
      prioridad: 'alta',
      completada: true,
      fechaCreacion: new Date().toISOString(),
    },
    {
      id: 2,
      titulo: 'Tarea 2',
      prioridad: 'media',
      completada: false,
      fechaCreacion: new Date().toISOString(),
    },
  ];

  obtenerResumen() {
    const total = this.tareas.length;
    const completadas = this.tareas.filter((tarea) => tarea.completada).length;
    const pendientes = total - completadas;

    return { total, completadas, pendientes };
  }
}