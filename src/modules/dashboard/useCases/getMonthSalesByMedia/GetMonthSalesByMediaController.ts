import { Request, Response } from 'express'
import { GetMonthSalesByMediaUseCase } from './GetMonthSalesByMediaUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetMonthSalesByMediaController extends BaseController {
  private useCase: GetMonthSalesByMediaUseCase

  constructor (useCase: GetMonthSalesByMediaUseCase) {
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

export { GetMonthSalesByMediaController }