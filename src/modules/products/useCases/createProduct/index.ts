import { CreateProductUseCase } from "./CreateProductUseCase"
import { CreateProductController } from "./CreateProductController"

const createProductUseCase = new CreateProductUseCase()
const createProductController = new CreateProductController(createProductUseCase)

export { createProductUseCase, createProductController }