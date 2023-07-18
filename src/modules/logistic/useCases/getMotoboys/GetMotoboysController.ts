import { Request, Response } from 'express'
import { GetMotoboysUseCase } from './GetMotoboysUseCase'

class GetMotoboysController {
  private useCase: GetMotoboysUseCase

  constructor (useCase: GetMotoboysUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMotoboysController }