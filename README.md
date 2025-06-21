# 📦 Inventario Simple de Productos - Backend

**Desarrollado por:** Danna Valentina Gómez González  
**Ficha SENA:** 2863722

## 📋 Descripción

Este proyecto es un sistema básico de gestión de inventario desarrollado con **AdonisJS (Node.js)** que permite realizar operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) sobre productos. Incluye funcionalidades adicionales como:

- 📉 **Alertas de Bajo Stock**: Detecta y alerta si un producto tiene menos cantidad en stock que el mínimo permitido.
- 📈 **Historial de Movimientos de Stock**: Registra automáticamente entradas y salidas de productos para tener control de los cambios en el inventario.

## 🛠️ Tecnologías utilizadas

- **Node.js** + **AdonisJS**
- **MySQL** 
- **Lucid ORM**
- **REST API**

## 🚀 Instalación y uso

Sigue estos pasos para poner en marcha el backend del proyecto en tu máquina local:

### 1. Clonar el repositorio

git clone https://github.com/Danva15/Recuperacion_Backend.git
cd Recuperacion_Backend

### 2. Instalar dependencias 

npm install

### 3. configurar archivo de entorno .env
cp .env.example .env

### 4. ejecutar migraciones 

node ace migration:run

### 5. seeders

node ace db:seed

### 6. iniciar el servidor 

npm run dev


