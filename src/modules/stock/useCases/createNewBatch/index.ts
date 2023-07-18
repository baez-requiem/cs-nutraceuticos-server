import { CreateNewBatchUseCase } from "./CreateNewBatchUseCase"
import { CreateNewBatchController } from "./CreateNewBatchController"

const createNewBatchUseCase = new CreateNewBatchUseCase()
const createNewBatchController = new CreateNewBatchController(createNewBatchUseCase)

export { createNewBatchUseCase, createNewBatchController }