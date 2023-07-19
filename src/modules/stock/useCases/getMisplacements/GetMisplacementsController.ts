import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { GetMisplacementsUseCase } from './GetMisplacementsUseCase'

class GetMisplacementsController extends BaseController{
  private useCase: GetMisplacementsUseCase

  constructor (useCase: GetMisplacementsUseCase) {
    super()
    this.useCase = useCase
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

export { GetMisplacementsController }