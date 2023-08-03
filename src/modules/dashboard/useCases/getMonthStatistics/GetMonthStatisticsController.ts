import { Request, Response } from 'express'
import { GetMonthStatisticsUseCase } from './GetMonthStatisticsUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetMonthStatisticsController extends BaseController {
  private useCase: GetMonthStatisticsUseCase

  constructor (useCase: GetMonthStatisticsUseCase) {
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

export { GetMonthStatisticsController }