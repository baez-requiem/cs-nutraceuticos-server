import { Request, Response } from 'express'
import { AuthenticateUserUseCase } from './AuthenticateUserUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { AuthenticateUserSchema } from './AuthenticateUserSchema'

class AuthenticateUserController extends BaseController {
  private useCase: AuthenticateUserUseCase

  constructor (useCase: AuthenticateUserUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(AuthenticateUserSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return this.ok(response, result)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { AuthenticateUserController }