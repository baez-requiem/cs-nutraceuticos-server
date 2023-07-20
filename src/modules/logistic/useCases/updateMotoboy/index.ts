import { UpdateMotoboyUseCase } from "./UpdateMotoboyUseCase"
import { UpdateMotoboyController } from "./UpdateMotoboyController"

const updateMotoboyUseCase = new UpdateMotoboyUseCase()
const updateMotoboyController = new UpdateMotoboyController(updateMotoboyUseCase)

export { updateMotoboyUseCase, updateMotoboyController }