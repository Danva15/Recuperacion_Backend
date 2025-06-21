import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Producto from '#models/producto'

export default class extends BaseSeeder {
  async run() {
    await Producto.createMany([
      {
        nombre: 'Teclado Mecánico RGB',
        descripcion: 'Teclado de alto rendimiento con switches Cherry MX y retroiluminación RGB.',
        precio: 85.99,
        cantidadEnStock: 50,
        cantidadMinimaStock: 10,
      },
      {
        nombre: 'Ratón Gaming Inalámbrico',
        descripcion:
          'Ratón ergonómico con sensor óptico de alta precisión y batería de larga duración.',
        precio: 45.0,
        cantidadEnStock: 5,
        cantidadMinimaStock: 10,
      },
      {
        nombre: 'Monitor Curvo 27 pulgadas',
        descripcion: 'Monitor de 144Hz, 1ms de respuesta, ideal para gaming y diseño.',
        precio: 299.99,
        cantidadEnStock: 2,
        cantidadMinimaStock: 5,
      },
      {
        nombre: 'Webcam Full HD',
        descripcion: 'Webcam con resolución 1080p para videollamadas y streaming.',
        precio: 25.5,
        cantidadEnStock: 30,
        cantidadMinimaStock: 8,
      },
    ])
  }
}
