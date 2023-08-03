import { Request, Response } from 'express'
import { GetPaymentTypesUseCase } from './GetPaymentTypesUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetPaymentTypesController extends BaseController {
  private useCase: GetPaymentTypesUseCase

  constructor (useCase: GetPaymentTypesUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    try {
      const result = await this.useCase.execute()

      return Array.isArray(result)
        ? this.ok(response, result)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetPaymentTypesController }