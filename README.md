# Práctica 02: Autenticación con Laravel Sanctum + Vue.js (Pinia)

Este sistema contiene la estructura completa para un inicio de sesión y registro utilizando tokens de API tipo Bearer.

## Estructura de las carpetas
- `/` - Raíz del Backend (Laravel 11 estructurado con Sanctum)
- `/practica2-frontend` - Raíz del Frontend (Vue.js 3, Pinia y Axios)

## Instrucciones de Despliegue Local

### 1. Configuración del Servidor Backend (Laravel)
1. Configure las credenciales de su servidor de base de datos local en el archivo `.env`.
2. Ejecute las migraciones para crear las tablas necesarias: `php artisan migrate`
3. Encienda el backend: `php artisan serve`

### 2. Configuración del Servidor Frontend (Vue.js)
1. Ingrese a la carpeta del cliente: `cd practica2-frontend`
2. Instale los módulos de Node: `npm install`
3. Inicie el entorno de desarrollo: `npm run dev`