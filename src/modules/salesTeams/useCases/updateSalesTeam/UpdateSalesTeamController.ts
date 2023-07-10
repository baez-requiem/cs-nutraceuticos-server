import { Request, Response } from 'express'
import { UpdateSalesTeamUseCase } from './UpdateSalesTeamUseCase'

class UpdateSalesTeamController {
  private useCase: UpdateSalesTeamUseCase

  constructor (useCase: UpdateSalesTeamUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { UpdateSalesTeamController }