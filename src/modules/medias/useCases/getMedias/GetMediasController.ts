import { Request, Response } from 'express'
import { GetMediasUseCase } from './GetMediasUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { GetMediasSchema } from './GetMediasSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class GetMediasController extends BaseController {
  private useCase: GetMediasUseCase

  constructor (useCase: GetMediasUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(GetMediasSchema, request.query)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(request.body)

      return Array.isArray(result)
        ? this.ok(response, result)
        : this.fail(response)
      
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetMediasController }