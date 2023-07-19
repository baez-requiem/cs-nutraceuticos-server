import { CreateMisplacementUseCase } from "./CreateMisplacementUseCase"
import { CreateMisplacementController } from "./CreateMisplacementController"

const createMisplacementUseCase = new CreateMisplacementUseCase()
const createMisplacementController = new CreateMisplacementController(createMisplacementUseCase)

export { createMisplacementUseCase, createMisplacementController }