import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'

class DeleteProductController {
  private useCase: DeleteProductUseCase

  constructor (useCase: DeleteProductUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { DeleteProductController }