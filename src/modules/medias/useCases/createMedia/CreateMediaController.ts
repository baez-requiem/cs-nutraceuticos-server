import { Request, Response } from 'express'
import { CreateMediaUseCase } from './CreateMediaUseCase'

class CreateMediaController {
  private useCase: CreateMediaUseCase

  constructor (useCase: CreateMediaUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { CreateMediaController }