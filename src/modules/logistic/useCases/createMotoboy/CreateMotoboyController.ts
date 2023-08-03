import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { CreateMotoboyUseCase } from './CreateMotoboyUseCase'
import { CreateMotoboySchema } from './CreateMotoboySchema'

import { parseSchemaDTO } from '../../../../utils/zod.utils'

class CreateMotoboyController extends BaseController {
  private useCase: CreateMotoboyUseCase

  constructor (useCase: CreateMotoboyUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateMotoboySchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return result
        ? this.created(response)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { CreateMotoboyController }