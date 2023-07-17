import { GetRolesUseCase } from "./GetRolesUseCase"
import { GetRolesController } from "./GetRolesController"

const getRolesUseCase = new GetRolesUseCase()
const getRolesController = new GetRolesController(getRolesUseCase)

export { getRolesUseCase, getRolesController }