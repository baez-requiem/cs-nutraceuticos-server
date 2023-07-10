import { Request, Response } from 'express'
import { GetUserUseCase } from './GetUserUseCase'

class GetUserController {
  private useCase: GetUserUseCase

  constructor (useCase: GetUserUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetUserController }