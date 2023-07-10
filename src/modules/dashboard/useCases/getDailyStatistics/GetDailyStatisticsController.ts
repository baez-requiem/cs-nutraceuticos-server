import { Request, Response } from 'express'
import { GetDailyStatisticsUseCase } from './GetDailyStatisticsUseCase'

class GetDailyStatisticsController {
  private useCase: GetDailyStatisticsUseCase

  constructor (useCase: GetDailyStatisticsUseCase) {
    this.useCase = useCase
  }

  async execute(request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetDailyStatisticsController }