import { CreateMotoboyUseCase } from "./CreateMotoboyUseCase"
import { CreateMotoboyController } from "./CreateMotoboyController"

const createMotoboyUseCase = new CreateMotoboyUseCase()
const createMotoboyController = new CreateMotoboyController(createMotoboyUseCase)

export { createMotoboyUseCase, createMotoboyController }