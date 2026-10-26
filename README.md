# API de tareas

Proyecto de la Actividad 2 para practicar TDD/XP y una arquitectura por capas con TypeScript, Node.js y Express. La API expone un resumen con el total de tareas, cuántas están completadas y cuántas siguen pendientes.

## Requisitos

- Node.js 18 o superior, para disponer de `fetch` integrado.
- npm.

## Instalación

Desde la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

## Prueba automatizada

Ejecuta la prueba de integración:

```bash
npm test
```

También puedes ejecutar el comando usado en la actividad:

```bash
npx tsx --test tareas.test.ts
```

La prueba inicia la aplicación en el puerto `3001`, solicita `GET /api/v1/tareas/resumen` y verifica el estado HTTP y que cada conteo sea numérico.

## Iniciar la API

```bash
npm start
```

El servidor queda disponible en `http://localhost:3000`. Para consultar el resumen:

```bash
curl -i http://localhost:3000/api/v1/tareas/resumen
```

Respuesta esperada:

```json
{
  "data": {
    "total": 2,
    "completadas": 1,
    "pendientes": 1
  }
}
```

## Arquitectura

- `src/tareas/tarea.ts`: define el tipo de una tarea.
- `src/tareas/tareas.repository.ts`: contiene las tareas de ejemplo y calcula el resumen.
- `src/tareas/tareas.service.ts`: delega la operación al repositorio.
- `src/tareas/tareas.routes.ts`: declara la ruta `GET /resumen` y devuelve el resultado en `{ data: ... }`.
- `src/app.ts`: instancia y conecta las capas, montando las rutas bajo `/api/v1/tareas`.
- `src/server.ts`: inicia el servidor HTTP en el puerto `3000`.
- `tareas.test.ts`: prueba de integración del endpoint.

## Flujo TDD

La prueba se escribió antes de implementar el endpoint. En la fase Red, la ruta inexistente respondía `404`. Luego se agregaron el repositorio, el servicio y la ruta; en la fase Green, el test pasó con estado `200` y los tres conteos numéricos.