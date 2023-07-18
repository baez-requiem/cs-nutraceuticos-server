import { UpdateBatchUseCase } from "./UpdateBatchUseCase"
import { UpdateBatchController } from "./UpdateBatchController"

const updateBatchUseCase = new UpdateBatchUseCase()
const updateBatchController = new UpdateBatchController(updateBatchUseCase)

export { updateBatchUseCase, updateBatchController }