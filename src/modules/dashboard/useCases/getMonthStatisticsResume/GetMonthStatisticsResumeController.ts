import { Request, Response } from 'express'
import { GetMonthStatisticsResumeUseCase } from './GetMonthStatisticsResumeUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetMonthStatisticsResumeController extends BaseController {
  private useCase: GetMonthStatisticsResumeUseCase

  constructor (useCase: GetMonthStatisticsResumeUseCase) {
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

export { GetMonthStatisticsResumeController }