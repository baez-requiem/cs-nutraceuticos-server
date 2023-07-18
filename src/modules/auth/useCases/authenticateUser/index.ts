import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"
import { AuthenticateUserController } from "./AuthenticateUserController"

const authenticateUserRoleUseCase = new AuthenticateUserUseCase()
const authenticateUserRoleController = new AuthenticateUserController(authenticateUserRoleUseCase)

export { authenticateUserRoleUseCase, authenticateUserRoleController }