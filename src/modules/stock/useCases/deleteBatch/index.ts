import { DeleteBatchUseCase } from "./DeleteBatchUseCase"
import { DeleteBatchController } from "./DeleteBatchController"

const deleteBatchUseCase = new DeleteBatchUseCase()
const deleteBatchController = new DeleteBatchController(deleteBatchUseCase)

export { deleteBatchUseCase, deleteBatchController }