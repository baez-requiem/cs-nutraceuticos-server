import { Request, Response } from 'express'
import { GetLastSalesUseCase } from './GetLastSalesUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetLastSalesController extends BaseController {
  private useCase: GetLastSalesUseCase

  constructor (useCase: GetLastSalesUseCase) {
    super()
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    try {
      const result = await this.useCase.execute()

      return this.ok(response, result)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetLastSalesController }