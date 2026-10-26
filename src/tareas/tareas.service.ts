import { TareasRepository } from './tareas.repository.js';

export class TareasService {
  constructor(private readonly repository: TareasRepository) {}

  obtenerResumen() {
    return this.repository.obtenerResumen();
  }
}