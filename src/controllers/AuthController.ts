import { Request, Response } from 'express'

import { AuthenticateUserUseCase } from '../useCases/authenticateUser/AuthenticateUserUseCase'
import { RefreshTokenUserUseCase } from '../useCases/refreshTokenUser/RefreshTokenUserUseCase'

class AuthController {
  async authenticateUserHandle(request: Request, response: Response) {
    const { username, password } = request.body

    const authenticateUserUseCase = new AuthenticateUserUseCase()

    const token = await authenticateUserUseCase.execute({
      username,
      password
    })
    
    return response.json(token)
  }

  async refreshTokenUserHandle(request: Request, response: Response) {
    const { refresh_token } = request.body

    const refreshTokenUserUseCase = new RefreshTokenUserUseCase()

    const token = await refreshTokenUserUseCase.execute(refresh_token)

    return response.json(token)
  }
}

export { AuthController }