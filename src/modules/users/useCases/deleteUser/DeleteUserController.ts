import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'

class DeleteUserController {
  private useCase: DeleteUserUseCase

  constructor (useCase: DeleteUserUseCase) {
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { DeleteUserController }