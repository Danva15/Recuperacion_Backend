import vine from '@vinejs/vine'

export const crearProductoValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(3).maxLength(255),
    descripcion: vine.string().trim().maxLength(1000).nullable(), // Nullable significa opcional
    precio: vine.number().positive(), // Debe ser un número y positivo
    cantidadEnStock: vine.number().min(0), // No puede ser negativo
    cantidadMinimaStock: vine.number().min(0), // No puede ser negativo
  })
)

export const actualizarProductoValidator = vine.compile(
  vine.object({
    nombre: vine.string().trim().minLength(3).maxLength(255).optional(), // Todos los campos son opcionales para la actualización
    descripcion: vine.string().trim().maxLength(1000).nullable().optional(),
    precio: vine.number().positive().optional(),
    cantidadEnStock: vine.number().min(0).optional(),
    cantidadMinimaStock: vine.number().min(0).optional(),
  })
)
