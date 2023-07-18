import { GetBatchesUseCase } from "./GetBatchesUseCase"
import { GetBatchesController } from "./GetBatchesController"

const getBatchesUseCase = new GetBatchesUseCase()
const getBatchesController = new GetBatchesController(getBatchesUseCase)

export { getBatchesUseCase, getBatchesController }