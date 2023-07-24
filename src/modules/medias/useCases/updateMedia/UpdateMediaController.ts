import { Request, Response } from 'express'
import { UpdateMediaUseCase } from './UpdateMediaUseCase'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { BaseController } from '../../../../shared/core/BaseController'
import { UpdateMediaSchema } from './UpdateMediaSchema'

class UpdateMediaController extends BaseController {
  private useCase: UpdateMediaUseCase

  constructor (useCase: UpdateMediaUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateMediaSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const data = await this.useCase.execute(request.body)

      return data
        ? this.ok(response)
        : this.fail(response)
      
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { UpdateMediaController }