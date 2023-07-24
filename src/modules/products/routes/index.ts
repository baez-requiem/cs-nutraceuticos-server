import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getProductsController } from '../useCases/getProducts'
import { createProductController } from '../useCases/createProduct'
import { deleteProductController } from '../useCases/deleteProduct'
import { updateProductController } from '../useCases/updateProduct'

const productsRouter = Router()

productsRouter.get('', ensureAuthenticated, (req, res) => getProductsController.exec(req, res))
productsRouter.put('', ensureAuthenticated, (req, res) => updateProductController.exec(req, res))
productsRouter.post('', ensureAuthenticated, (req, res) => createProductController.exec(req, res))
productsRouter.delete('', ensureAuthenticated, (req, res) => deleteProductController.exec(req, res))

export { productsRouter }