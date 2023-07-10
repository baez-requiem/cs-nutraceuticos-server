import { GetProductsUseCase } from "./GetProductsUseCase"
import { GetProductsController } from "./GetProductsController"

const getProductsUseCase = new GetProductsUseCase()
const getProductsController = new GetProductsController(getProductsUseCase)

export { getProductsUseCase, getProductsController }