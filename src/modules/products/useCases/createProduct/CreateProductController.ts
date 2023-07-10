import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

class CreateProductController {
  private useCase: CreateProductUseCase

  constructor (useCase: CreateProductUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { CreateProductController }