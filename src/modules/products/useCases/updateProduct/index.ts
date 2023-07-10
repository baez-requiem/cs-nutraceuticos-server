import { UpdateProductUseCase } from "./UpdateProductUseCase"
import { UpdateProductController } from "./UpdateProductController"

const updateProductUseCase = new UpdateProductUseCase()
const updateProductController = new UpdateProductController(updateProductUseCase)

export { updateProductUseCase, updateProductController }