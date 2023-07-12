import { Request, Response } from 'express'
import { GetSalesUseCase } from './GetSalesUseCase'

class GetSalesController {
  private useCase: GetSalesUseCase

  constructor (useCase: GetSalesUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetSalesController }