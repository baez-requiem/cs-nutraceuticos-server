import { Request, Response } from 'express'
import { GetDailySalesBySalesTeamUseCase } from './GetDailySalesBySalesTeamUseCase'

class GetDailySalesBySalesTeamController {
  private useCase: GetDailySalesBySalesTeamUseCase

  constructor (useCase: GetDailySalesBySalesTeamUseCase) {
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetDailySalesBySalesTeamController }