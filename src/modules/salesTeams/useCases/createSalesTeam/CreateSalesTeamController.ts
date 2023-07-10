import { Request, Response } from 'express'
import { CreateSalesTeamUseCase } from './CreateSalesTeamUseCase'

class CreateSalesTeamController {
  private useCase: CreateSalesTeamUseCase

  constructor (useCase: CreateSalesTeamUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { CreateSalesTeamController }