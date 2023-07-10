import { Request, Response } from 'express'
import { GetDailySalesByMediaUseCase } from './GetDailySalesByMediaUseCase'

class GetDailySalesByMediaController {
  private useCase: GetDailySalesByMediaUseCase

  constructor (useCase: GetDailySalesByMediaUseCase) {
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {
    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetDailySalesByMediaController }