import { Request, Response } from 'express'
import { GetCurrentLogisticInfoUseCase } from './GetCurrentLogisticInfoUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetCurrentLogisticInfoSchema } from './GetCurrentLogisticInfoSchema'

class GetCurrentLogisticInfoController extends BaseController {
  private useCase: GetCurrentLogisticInfoUseCase

  constructor (useCase: GetCurrentLogisticInfoUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(GetCurrentLogisticInfoSchema, request.query)

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

export { GetCurrentLogisticInfoController }