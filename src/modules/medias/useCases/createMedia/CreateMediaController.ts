import { Request, Response } from 'express'
import { CreateMediaUseCase } from './CreateMediaUseCase'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateMediaSchema } from './CreateMediaSchema'
import { BaseController } from '../../../../shared/core/BaseController'

class CreateMediaController extends BaseController {
  private useCase: CreateMediaUseCase

  constructor (useCase: CreateMediaUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateMediaSchema, request.body)

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

export { CreateMediaController }