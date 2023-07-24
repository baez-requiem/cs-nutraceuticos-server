import { DeleteMotoboyUseCase } from "./DeleteMotoboyUseCase"
import { DeleteMotoboyController } from "./DeleteMotoboyController"

const deleteMotoboyUseCase = new DeleteMotoboyUseCase()
const deleteMotoboyController = new DeleteMotoboyController(deleteMotoboyUseCase)

export { deleteMotoboyUseCase, deleteMotoboyController }