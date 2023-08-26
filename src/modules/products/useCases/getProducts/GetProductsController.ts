import { Request, Response } from 'express'
import { GetProductsUseCase } from './GetProductsUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetProductsSchema } from './GetProductsSchema'

class GetProductsController extends BaseController {
  private useCase: GetProductsUseCase

  constructor (useCase: GetProductsUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const dto = parseSchemaDTO(GetProductsSchema, request.body)

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

export { GetProductsController }