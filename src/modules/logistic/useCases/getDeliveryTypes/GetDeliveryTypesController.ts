import { Request, Response } from 'express'
import { GetDeliveryTypesUseCase } from './GetDeliveryTypesUseCase'

class GetDeliveryTypesController {
  private useCase: GetDeliveryTypesUseCase

  constructor (useCase: GetDeliveryTypesUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetDeliveryTypesController }