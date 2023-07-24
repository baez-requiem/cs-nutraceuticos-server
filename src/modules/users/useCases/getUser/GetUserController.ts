import { Request, Response } from 'express'
import { GetUserUseCase } from './GetUserUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetUserSchema } from './GetUserSchema'

class GetUserController extends BaseController {
  private useCase: GetUserUseCase

  constructor (useCase: GetUserUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(GetUserSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return result
        ? this.ok(response, result)
        : this.fail(response)
      
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetUserController }