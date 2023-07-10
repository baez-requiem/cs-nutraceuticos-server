import { Request, Response } from 'express'
import { DeleteSalesTeamUseCase } from './DeleteSalesTeamUseCase'

class DeleteSalesTeamController {
  private useCase: DeleteSalesTeamUseCase

  constructor (useCase: DeleteSalesTeamUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { DeleteSalesTeamController }