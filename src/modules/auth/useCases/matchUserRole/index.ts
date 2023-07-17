import { MatchUserRoleUseCase } from "./MatchUserRoleUseCase"
import { MatchUserRoleController } from "./MatchUserRoleController"

const matchUserRoleUseCase = new MatchUserRoleUseCase()
const matchUserRoleController = new MatchUserRoleController(matchUserRoleUseCase)

export { matchUserRoleUseCase, matchUserRoleController }