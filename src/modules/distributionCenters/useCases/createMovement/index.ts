import { CreateMovementController } from './CreateMovementController'
import { CreateMovementUseCase } from './CreateMovementUseCase'

const createMovementUseCase = new CreateMovementUseCase()
const createMovementController = new CreateMovementController(createMovementUseCase)

export { createMovementUseCase, createMovementController }