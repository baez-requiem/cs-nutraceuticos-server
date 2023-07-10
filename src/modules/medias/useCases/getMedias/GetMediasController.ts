import { Request, Response } from 'express'
import { GetMediasUseCase } from './GetMediasUseCase'

class GetMediasController {
  private useCase: GetMediasUseCase

  constructor (useCase: GetMediasUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { GetMediasController }