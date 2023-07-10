import { Request, Response } from 'express'
import { GetLastSalesUseCase } from './GetLastSalesUseCase'

class GetLastSalesController {
  private useCase: GetLastSalesUseCase

  constructor (useCase: GetLastSalesUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetLastSalesController }