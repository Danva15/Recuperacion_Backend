import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'productos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('nombre', 255).notNullable()
      table.text('descripcion').nullable()
      table.decimal('precio', 10, 2).notNullable() // 10 dígitos en total, 2 decimales
      table.integer('cantidad_en_stock').notNullable().defaultTo(0)
      table.integer('cantidad_minima_stock').notNullable().defaultTo(0)

      table.timestamp('created_at').notNullable()
      table.timestamp('updated_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
