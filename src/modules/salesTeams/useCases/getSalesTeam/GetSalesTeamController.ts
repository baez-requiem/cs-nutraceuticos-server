import { Request, Response } from 'express'
import { GetSalesTeamUseCase } from './GetSalesTeamUseCase'

class GetSalesTeamController {
  private useCase: GetSalesTeamUseCase

  constructor (useCase: GetSalesTeamUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetSalesTeamController }