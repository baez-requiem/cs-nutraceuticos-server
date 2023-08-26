import { Request, Response } from 'express'
import { GetDistributionCentersUseCase } from './GetDistributionCentersUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetDistributionCentersController extends BaseController {
  private useCase: GetDistributionCentersUseCase

  constructor (useCase: GetDistributionCentersUseCase) {
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

export { GetDistributionCentersController }