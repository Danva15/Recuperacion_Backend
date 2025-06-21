import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import { DateTime } from 'luxon'
import Producto from '../models/producto.js'

export default class MovimientoStock extends BaseModel {
  public static table = 'movimientos_stock'

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare productoId: number

  @column()
  declare tipo: string

  @column()
  declare cantidad: number

  @column()
  declare notas: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Producto)
  declare producto: BelongsTo<typeof Producto>
}
