import { GetRoleUseCase } from "./GetRoleUseCase"
import { GetRoleController } from "./GetRoleController"

const getRoleUseCase = new GetRoleUseCase()
const getRoleController = new GetRoleController(getRoleUseCase)

export { getRoleUseCase, getRoleController }