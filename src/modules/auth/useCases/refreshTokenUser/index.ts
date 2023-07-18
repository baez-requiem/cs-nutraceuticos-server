import { RefreshTokenUserUseCase } from "./RefreshTokenUserUseCase"
import { RefreshTokenUserController } from "./RefreshTokenUserController"

const refreshTokenUserUseCase = new RefreshTokenUserUseCase()
const refreshTokenUserController = new RefreshTokenUserController(refreshTokenUserUseCase)

export { refreshTokenUserUseCase, refreshTokenUserController }