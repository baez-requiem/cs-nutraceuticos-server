import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'

class UpdateUserController {
  private useCase: UpdateUserUseCase

  constructor (useCase: UpdateUserUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { UpdateUserController }