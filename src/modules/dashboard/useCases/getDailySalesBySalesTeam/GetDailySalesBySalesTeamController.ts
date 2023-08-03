import { Request, Response } from 'express'
import { GetDailySalesBySalesTeamUseCase } from './GetDailySalesBySalesTeamUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetDailySalesBySalesTeamController extends BaseController {
  private useCase: GetDailySalesBySalesTeamUseCase

  constructor (useCase: GetDailySalesBySalesTeamUseCase) {
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

export { GetDailySalesBySalesTeamController }