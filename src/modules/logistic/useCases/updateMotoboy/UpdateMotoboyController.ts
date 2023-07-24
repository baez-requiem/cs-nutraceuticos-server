import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { UpdateMotoboyUseCase } from './UpdateMotoboyUseCase'
import { UpdateMotoboySchema } from './UpdateMotoboySchema'

import { parseSchemaDTO } from '../../../../utils/zod.utils'

class UpdateMotoboyController extends BaseController {
  private useCase: UpdateMotoboyUseCase

  constructor (useCase: UpdateMotoboyUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateMotoboySchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return result
        ? this.ok(response)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { UpdateMotoboyController }