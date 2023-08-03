import { Request, Response } from 'express'
import { GetMonthSalesBySellerUseCase } from './GetMonthSalesBySellerUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetMonthSalesBySellerController extends BaseController {
  private useCase: GetMonthSalesBySellerUseCase

  constructor (useCase: GetMonthSalesBySellerUseCase) {
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

export { GetMonthSalesBySellerController }