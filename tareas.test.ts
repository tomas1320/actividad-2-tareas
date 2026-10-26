import { test, before, after } from 'node:test';
import assert from 'node:assert';
import app from './src/app.js';
import type { Server } from 'node:http';

let servidor: Server;
const PORT = 3001;

before(() => {
  servidor = app.listen(PORT);
});

after(() => {
  servidor.close();
});

test('GET /api/v1/tareas/resumen debe responder 200 con el conteo de tareas', async () => {
  const respuesta = await fetch(`http://127.0.0.1:${PORT}/api/v1/tareas/resumen`);
  const datos = await respuesta.json();

  assert.strictEqual(respuesta.status, 200);
  assert.strictEqual(typeof datos.data.total, 'number');
  assert.strictEqual(typeof datos.data.completadas, 'number');
  assert.strictEqual(typeof datos.data.pendientes, 'number');
});