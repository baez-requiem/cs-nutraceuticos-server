import { Request, Response } from 'express'
import { GetMonthSalesByMediaUseCase } from './GetMonthSalesByMediaUseCase'

class GetMonthSalesByMediaController {
  private useCase: GetMonthSalesByMediaUseCase

  constructor (useCase: GetMonthSalesByMediaUseCase) {
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMonthSalesByMediaController }