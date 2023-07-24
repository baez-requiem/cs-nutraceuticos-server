import { Request, Response } from 'express'
import { CreateUserUseCase } from './CreateUserUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateUserSchema } from './CreateUserSchema'

class CreateUserController extends BaseController {
  private useCase: CreateUserUseCase

  constructor (useCase: CreateUserUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateUserSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return result
        ? this.created(response)
        : this.fail(response)
      
    } catch (error) {
      this.fail(response, error)
    }
  }
}

export { CreateUserController }