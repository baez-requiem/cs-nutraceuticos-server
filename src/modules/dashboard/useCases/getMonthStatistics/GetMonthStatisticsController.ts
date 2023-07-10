import { Request, Response } from 'express'
import { GetMonthStatisticsUseCase } from './GetMonthStatisticsUseCase'

class GetMonthStatisticsController {
  private useCase: GetMonthStatisticsUseCase

  constructor (useCase: GetMonthStatisticsUseCase) {
    this.useCase = useCase
  }

  async execute(request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMonthStatisticsController }