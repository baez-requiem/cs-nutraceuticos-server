import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getProductsController } from '../useCases/getProducts'
import { createProductController } from '../useCases/createProduct'
import { deleteProductController } from '../useCases/deleteProduct'
import { updateProductController } from '../useCases/updateProduct'

const productsRouter = Router()

productsRouter.get('', ensureAuthenticated, (req, res) => getProductsController.execute(req, res))
productsRouter.put('', ensureAuthenticated, (req, res) => updateProductController.execute(req, res))
productsRouter.post('', ensureAuthenticated, (req, res) => createProductController.execute(req, res))
productsRouter.delete('', ensureAuthenticated, (req, res) => deleteProductController.execute(req, res))

export { productsRouter }