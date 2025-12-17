# Expense Tracker

Aplicación fullstack para registrar gastos e ingresos por transacciones, organizarlas por categorías y administrar el perfil del usuario.

## Funcionalidades

- Autenticación con sesión (cookies) y persistencia en base de datos.
- Registro e inicio/cierre de sesión.
- CRUD básico de transacciones.
- Categorías por usuario y resumen de gastos por categoría.
- Perfil: actualizar datos, cambiar contraseña y eliminar cuenta.

## Tecnologías

- Backend: Node.js + Express
- Base de datos: PostgreSQL
- ORM: Prisma
- Frontend: React + React Router + React Query
- Estilos: SASS/SCSS modules

## Estructura del repo

- `server.js`: servidor Express y configuración de CORS/sesión.
- `routes/` + `controllers/`: API REST.
- `prisma/`: schema y migraciones.
- `client/`: aplicación React.
- `clientBuild/`: build estático del frontend (generado con `npm run buildClient`).

## Requisitos

- Node.js (recomendado: LTS)
- PostgreSQL

## Configuración local

1) Instalar dependencias (root y cliente):

```bash
npm i
cd client && npm i
```

2) Variables de entorno

Root: crear `.env` desde `.env.example`:

- `DATABASE_URL`: conexión a PostgreSQL
- `SERVER_PORT` (opcional, por defecto `5000`)

Cliente: crear `client/.env` desde `client/.env.example`:

- `REACT_APP_AXIOS_BASE_URL` (solo en producción)
- `PORT` (por defecto `3006`)

3) Prisma

```bash
npx prisma generate
npx prisma migrate dev
```

4) Levantar en desarrollo (frontend + backend)

```bash
npm run dev
```

- Frontend: `http://localhost:3006`
- API: `http://localhost:5000/api`

## Scripts

- `npm run dev`: corre backend + frontend en paralelo.
- `npm run server`: corre el backend con nodemon.
- `npm run start`: corre el backend con node.
- `npm run buildClient`: genera `clientBuild/` desde `client/`.
- `npm run build`: `prisma generate` + `prisma migrate deploy` (útil para producción).

## API (base `/api`)

Auth:

- `POST /auth`: login
- `POST /register`: registro
- `POST /logout`: logout
- `GET /whoami`: usuario actual (requiere sesión)

Usuario (requiere sesión):

- `PATCH /me`: actualizar perfil
- `PATCH /me/pw`: cambiar contraseña
- `DELETE /me`: eliminar cuenta

Transacciones (requiere sesión):

- `POST /transaction`
- `GET /transactions`
- `DELETE /transaction/delete/:transactionId`

Categorías (requiere sesión):

- `POST /category`
- `GET /categories`
- `GET /categories/sum`
- `DELETE /category/delete/:categoryId`