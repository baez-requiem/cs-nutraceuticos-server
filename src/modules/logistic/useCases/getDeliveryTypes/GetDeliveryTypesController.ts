import { Request, Response } from 'express'
import { GetDeliveryTypesUseCase } from './GetDeliveryTypesUseCase'
import { BaseController } from '../../../../shared/core/BaseController';

class GetDeliveryTypesController extends BaseController {
  private useCase: GetDeliveryTypesUseCase

  constructor (useCase: GetDeliveryTypesUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    try {
      const result = await this.useCase.execute()

      return Array.isArray(result)
        ? this.ok(response, result)
        : this.fail(response)

    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetDeliveryTypesController }