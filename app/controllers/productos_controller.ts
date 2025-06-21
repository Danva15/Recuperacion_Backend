import type { HttpContext } from '@adonisjs/core/http'
import Producto from '../models/producto.js'
//import { DateTime } from 'luxon'
import { crearProductoValidator, actualizarProductoValidator } from '../validators/producto.js'

export default class ProductosController {
  /**
   * GET /productos
   */
  async index({ response }: HttpContext) {
    const productos = await Producto.query().preload('movimientosStock') // Precargar movimientos para el detalle en la lista si es necesario, o en `show`
    return response.ok(productos)
  }

  /**
   * POST /productos
   */
  async store({ request, response }: HttpContext) {
    // **Validación de datos de entrada** (lo vemos en el siguiente paso, por ahora básico)
    /*const data = request.only([
      'nombre',
      'descripcion',
      'precio',
      'cantidadEnStock',
      'cantidadMinimaStock',
    ])*/

    const data = await request.validateUsing(crearProductoValidator)

    const producto = await Producto.create(data) // Crear el nuevo producto
    return response.created(producto) // 201 Created
  }

  /**
   * GET /productos/:id
   */
  async show({ params, response }: HttpContext) {
    // Buscar el producto por ID y precargar sus movimientos de stock
    const producto = await Producto.query()
      .where('id', params.id)
      .preload('movimientosStock')
      .firstOrFail() // Lanza 404 si no encuentra

    return response.ok(producto)
  }

  /**
   * PUT or PATCH /productos/:id
   */
  async update({ params, request, response }: HttpContext) {
    // Buscar el producto existente
    const producto = await Producto.findOrFail(params.id)

    // **Validación de datos de entrada**
    const data = await request.validateUsing(actualizarProductoValidator)

    producto.merge(data) // Combinar los datos recibidos con el producto existente
    await producto.save() // Guardar los cambios

    return response.ok(producto)
  }

  /**
   * DELETE /productos/:id
   */
  async destroy({ params, response }: HttpContext) {
    const producto = await Producto.findOrFail(params.id) // Buscar y lanzar 404 si no existe
    await producto.delete() // Eliminar el producto (y sus movimientos por CASCADE en la migración)

    return response.noContent() // 204 No Content
  }
}
