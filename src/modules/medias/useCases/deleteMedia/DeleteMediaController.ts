import { Request, Response } from 'express'
import { DeleteMediaUseCase } from './DeleteMediaUseCase'

class DeleteMediaController {
  private useCase: DeleteMediaUseCase

  constructor (useCase: DeleteMediaUseCase) {
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { DeleteMediaController }