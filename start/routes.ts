/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .group(() => {
    // Rutas para Productos (RESTful estándar)
    router.get('productos', '#controllers/productos_controller.index')
    router.post('productos', '#controllers/productos_controller.store')
    router.get('productos/:id', '#controllers/productos_controller.show')
    router.put('productos/:id', '#controllers/productos_controller.update')
    router.patch('productos/:id', '#controllers/productos_controller.update') // Actualización parcial
    router.delete('productos/:id', '#controllers/productos_controller.destroy')

    // Ruta para Movimientos de Stock
    router.post('movimientos-stock', '#controllers/movimientos_stocks_controller.store')
  })
  .prefix('/api')
