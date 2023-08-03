import { Request, Response } from 'express'
import { GetDailySalesBySellerUseCase } from './GetDailySalesBySellerUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetDailySalesBySellerController extends BaseController {
  private useCase: GetDailySalesBySellerUseCase

  constructor (useCase: GetDailySalesBySellerUseCase) {
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

export { GetDailySalesBySellerController }