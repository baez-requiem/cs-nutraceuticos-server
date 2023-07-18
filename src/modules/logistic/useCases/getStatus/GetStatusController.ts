import { Request, Response } from 'express'
import { GetStatusUseCase } from './GetStatusUseCase'

class GetStatusController {
  private useCase: GetStatusUseCase

  constructor (useCase: GetStatusUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetStatusController }