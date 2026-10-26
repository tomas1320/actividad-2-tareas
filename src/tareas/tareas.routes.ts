import { Router } from 'express';
import { TareasService } from './tareas.service.js';

export function crearTareasRouter(service: TareasService): Router {
  const router = Router();

  router.get('/resumen', (_request, response) => {
    const resumen = service.obtenerResumen();
    response.status(200).json({ data: resumen });
  });

  return router;
}