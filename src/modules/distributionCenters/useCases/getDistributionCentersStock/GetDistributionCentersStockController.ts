import { Request, Response } from 'express'
import { GetDistributionCentersStockUseCase } from './GetDistributionCentersStockUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetDistributionCentersStockController extends BaseController {
  private useCase: GetDistributionCentersStockUseCase

  constructor (useCase: GetDistributionCentersStockUseCase) {
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

export { GetDistributionCentersStockController }