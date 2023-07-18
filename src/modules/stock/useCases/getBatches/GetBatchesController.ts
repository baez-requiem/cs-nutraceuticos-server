import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { GetBatchesUseCase } from './GetBatchesUseCase'

class GetBatchesController extends BaseController{
  private useCase: GetBatchesUseCase

  constructor (useCase: GetBatchesUseCase) {
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

export { GetBatchesController }