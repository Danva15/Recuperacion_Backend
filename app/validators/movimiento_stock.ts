import vine from '@vinejs/vine'

export const crearMovimientoStockValidator = vine.compile(
  vine.object({
    productoId: vine.number().positive(), // Debe ser un ID de producto válido y positivo
    tipo: vine.enum(['entrada', 'salida']), // Solo permite estos dos valores
    cantidad: vine.number().positive(), // La cantidad debe ser positiva
    notas: vine.string().trim().maxLength(500).nullable(),
  })
)
