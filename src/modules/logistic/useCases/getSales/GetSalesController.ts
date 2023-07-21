import { Request, Response } from 'express'
import { GetSalesUseCase } from './GetSalesUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetSalesSchema } from './GetSalesSchema'

class GetSalesController extends BaseController {
  private useCase: GetSalesUseCase

  constructor (useCase: GetSalesUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const dto = parseSchemaDTO(GetSalesSchema, request.query)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      
      const data = await this.useCase.execute(dto)
  
      return this.ok(response, data)
    } catch (error) {
      return this.fail(response, error)
    }

  }
}

export { GetSalesController }