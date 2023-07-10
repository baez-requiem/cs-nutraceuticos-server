import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'

class UpdateProductController {
  private useCase: UpdateProductUseCase

  constructor (useCase: UpdateProductUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { UpdateProductController }