import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import MovimientoStock from '../models/movimiento_stock.js'

export default class Producto extends BaseModel {
  public static table = 'productos' // Enlace explícito a la tabla en español

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @column()
  declare descripcion: string | null // Puede ser null

  @column()
  declare precio: number

  @column()
  declare cantidadEnStock: number // CamelCase para el modelo, Adonis mapea a snake_case en DB

  @column()
  declare cantidadMinimaStock: number // CamelCase para el modelo

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => MovimientoStock, {
    localKey: 'id', // ID del Producto
    foreignKey: 'productoId', // FK en MovimientoStock
  })
  declare movimientosStock: HasMany<typeof MovimientoStock>
}
