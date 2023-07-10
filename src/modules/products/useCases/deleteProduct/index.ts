import { DeleteProductUseCase } from "./DeleteProductUseCase"
import { DeleteProductController } from "./DeleteProductController"

const deleteProductUseCase = new DeleteProductUseCase()
const deleteProductController = new DeleteProductController(deleteProductUseCase)

export { deleteProductUseCase, deleteProductController }