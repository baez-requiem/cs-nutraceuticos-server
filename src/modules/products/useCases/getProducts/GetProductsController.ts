import { Request, Response } from 'express'
import { GetProductsUseCase } from './GetProductsUseCase'

class GetProductsController {
  private useCase: GetProductsUseCase

  constructor (useCase: GetProductsUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetProductsController }