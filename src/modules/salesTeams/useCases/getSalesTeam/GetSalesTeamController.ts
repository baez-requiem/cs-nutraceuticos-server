import { Request, Response } from 'express'
import { GetSalesTeamUseCase } from './GetSalesTeamUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetSalesTeamController extends BaseController {
  private useCase: GetSalesTeamUseCase

  constructor (useCase: GetSalesTeamUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    try {
      const result = await this.useCase.execute()

      return result
        ? this.ok(response, result)
        : this.fail(response)
      
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetSalesTeamController }