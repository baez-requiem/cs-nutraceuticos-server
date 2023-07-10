import { Request, Response } from 'express'
import { GetMonthStatisticsResumeUseCase } from './GetMonthStatisticsResumeUseCase'

class GetMonthStatisticsResumeController {
  private useCase: GetMonthStatisticsResumeUseCase

  constructor (useCase: GetMonthStatisticsResumeUseCase) {
    this.useCase = useCase
  }

  async execute(request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMonthStatisticsResumeController }