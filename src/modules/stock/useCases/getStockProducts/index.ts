import { GetStockProductsUseCase } from "./GetStockProductsUseCase"
import { GetStockProductsController } from "./GetStockProductsController"

const getStockProductsUseCase = new GetStockProductsUseCase()
const getStockProductsController = new GetStockProductsController(getStockProductsUseCase)

export { getStockProductsUseCase, getStockProductsController }