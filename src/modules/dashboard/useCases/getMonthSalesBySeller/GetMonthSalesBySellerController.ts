import { Request, Response } from 'express'
import { GetMonthSalesBySellerUseCase } from './GetMonthSalesBySellerUseCase'

class GetMonthSalesBySellerController {
  private useCase: GetMonthSalesBySellerUseCase

  constructor (useCase: GetMonthSalesBySellerUseCase) {
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMonthSalesBySellerController }