import { Request, Response } from 'express'
import { UpdateMediaUseCase } from './UpdateMediaUseCase'

class UpdateMediaController {
  private useCase: UpdateMediaUseCase

  constructor (useCase: UpdateMediaUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { UpdateMediaController }