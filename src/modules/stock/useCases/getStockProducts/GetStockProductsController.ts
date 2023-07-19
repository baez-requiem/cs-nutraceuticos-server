import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { GetStockProductsUseCase } from './GetStockProductsUseCase'
import { GetStockProductsSchema } from './GetStockProductsSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'

class GetStockProductsController extends BaseController{
  private useCase: GetStockProductsUseCase

  constructor (useCase: GetStockProductsUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(GetStockProductsSchema, request.body)

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

export { GetStockProductsController }