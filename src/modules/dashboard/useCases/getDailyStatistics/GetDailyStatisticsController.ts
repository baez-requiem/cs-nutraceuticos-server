import { Request, Response } from 'express'
import { GetDailyStatisticsUseCase } from './GetDailyStatisticsUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetDailyStatisticsController extends BaseController {
  private useCase: GetDailyStatisticsUseCase

  constructor (useCase: GetDailyStatisticsUseCase) {
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

export { GetDailyStatisticsController }