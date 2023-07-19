import { DeleteMisplacementUseCase } from "./DeleteMisplacementUseCase"
import { DeleteMisplacementController } from "./DeleteMisplacementController"

const deleteMisplacementUseCase = new DeleteMisplacementUseCase()
const deleteMisplacementController = new DeleteMisplacementController(deleteMisplacementUseCase)

export { deleteMisplacementUseCase, deleteMisplacementController }