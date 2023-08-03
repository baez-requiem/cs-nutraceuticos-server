import { Request, Response } from 'express'
import { GetMonthSalesBySalesTeamUseCase } from './GetMonthSalesBySalesTeamUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetMonthSalesBySalesTeamController extends BaseController {
  private useCase: GetMonthSalesBySalesTeamUseCase

  constructor (useCase: GetMonthSalesBySalesTeamUseCase) {
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

export { GetMonthSalesBySalesTeamController }