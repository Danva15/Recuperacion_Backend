import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'movimientos_stock'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.integer('producto_id').unsigned().notNullable() // FK
      table.string('tipo', 50).notNullable() // 'entrada' o 'salida'
      table.integer('cantidad').notNullable() // Cantidad del movimiento
      table.text('notas').nullable() // Notas adicionales del movimiento

      table.foreign('producto_id').references('id').inTable('productos').onDelete('CASCADE') // Si se elimina un producto, se eliminan sus movimientos

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
