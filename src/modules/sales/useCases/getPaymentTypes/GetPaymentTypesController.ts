import { Request, Response } from 'express'
import { GetPaymentTypesUseCase } from './GetPaymentTypesUseCase'

class GetPaymentTypesController {
  private useCase: GetPaymentTypesUseCase

  constructor (useCase: GetPaymentTypesUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetPaymentTypesController }