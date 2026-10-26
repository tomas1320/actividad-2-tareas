import express from 'express';
import { TareasRepository } from './tareas/tareas.repository.js';
import { crearTareasRouter } from './tareas/tareas.routes.js';
import { TareasService } from './tareas/tareas.service.js';

const app = express();
const repository = new TareasRepository();
const service = new TareasService(repository);

app.use('/api/v1/tareas', crearTareasRouter(service));

export default app;