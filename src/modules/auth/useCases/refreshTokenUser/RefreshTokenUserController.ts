import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { RefreshTokenUserUseCase } from './RefreshTokenUserUseCase'
import { RefreshTokenUserSchema } from './RefreshTokenUserSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class RefreshTokenUserController extends BaseController {
  private useCase: RefreshTokenUserUseCase

  constructor (useCase: RefreshTokenUserUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(RefreshTokenUserSchema, request.body)

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

export { RefreshTokenUserController }