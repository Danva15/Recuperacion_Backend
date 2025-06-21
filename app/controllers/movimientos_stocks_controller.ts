import type { HttpContext } from '@adonisjs/core/http'
import Producto from '../models/producto.js'
import MovimientoStock from '../models/movimiento_stock.js'
import db from '@adonisjs/lucid/services/db'
import { crearMovimientoStockValidator } from '../validators/movimiento_stock.js'

export default class MovimientosStocksController {
  /**
   * Handle form submission for creating a stock movement.
   * POST /movimientos-stock
   */
  async store({ request, response }: HttpContext) {
    // Aplicar validación al inicio
    const { productoId, tipo, cantidad, notas } = await request.validateUsing(
      crearMovimientoStockValidator
    )

    const producto = await Producto.find(productoId)
    if (!producto) {
      return response.notFound('Producto no encontrado.')
    }

    await db
      .transaction(async (trx) => {
        producto.useTransaction(trx)

        const movimiento = await MovimientoStock.create(
          {
            productoId,
            tipo,
            cantidad,
            notas,
          },
          { client: trx }
        )

        // Lógica de actualización de stock
        if (tipo === 'entrada') {
          producto.cantidadEnStock += cantidad
        } else if (tipo === 'salida') {
          if (producto.cantidadEnStock < cantidad) {
            // Lanza un error que será capturado por el catch de la transacción
            throw new Error('No hay suficiente stock para realizar este movimiento de salida.')
          }
          producto.cantidadEnStock -= cantidad
        }

        await producto.save()
        await trx.commit()

        await movimiento.load('producto') // Opcional: cargar el producto asociado para la respuesta

        return response.created(movimiento)
      })
      .catch((error) => {
        return response.badRequest(error.message || 'Error al procesar el movimiento de stock.')
      })
  }
}
