import { Request, Response } from 'express'
import { CreateMovementUseCase } from './CreateMovementUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateMovementSchema } from './CreateMovementSchema'

class CreateMovementController extends BaseController {
  private useCase: CreateMovementUseCase

  constructor (useCase: CreateMovementUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateMovementSchema, request.body)

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

export { CreateMovementController }