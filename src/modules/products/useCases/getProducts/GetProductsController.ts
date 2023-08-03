import { Request, Response } from 'express'
import { GetProductsUseCase } from './GetProductsUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetProductsController extends BaseController {
  private useCase: GetProductsUseCase

  constructor (useCase: GetProductsUseCase) {
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

export { GetProductsController }