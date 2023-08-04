import { Request, Response } from 'express'
import { GetMotoboysUseCase } from './GetMotoboysUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetMotoboysSchema } from './GetMotoboysSchema'

class GetMotoboysController extends BaseController {
  private useCase: GetMotoboysUseCase

  constructor (useCase: GetMotoboysUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(GetMotoboysSchema, request.query)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return Array.isArray(result)
        ? this.ok(response, result)
        : this.fail(response)

    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetMotoboysController }