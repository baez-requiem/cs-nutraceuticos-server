import { Request, Response } from 'express'
import { GetDailySalesBySellerUseCase } from './GetDailySalesBySellerUseCase'

class GetDailySalesBySellerController {
  private useCase: GetDailySalesBySellerUseCase

  constructor (useCase: GetDailySalesBySellerUseCase) {
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetDailySalesBySellerController }