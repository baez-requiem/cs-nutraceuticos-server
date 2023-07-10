import { Request, Response } from 'express'
import { GetMonthSalesBySalesTeamUseCase } from './GetMonthSalesBySalesTeamUseCase'

class GetMonthSalesBySalesTeamController {
  private useCase: GetMonthSalesBySalesTeamUseCase

  constructor (useCase: GetMonthSalesBySalesTeamUseCase) {
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMonthSalesBySalesTeamController }