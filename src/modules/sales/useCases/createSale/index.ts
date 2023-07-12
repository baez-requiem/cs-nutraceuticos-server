import { CreateSaleUseCase } from "./CreateSaleUseCase"
import { CreateSaleController } from "./CreateSaleController"

const createSaleUseCase = new CreateSaleUseCase()
const createSaleController = new CreateSaleController(createSaleUseCase)

export { createSaleUseCase, createSaleController }