import { Request, Response } from 'express'
import { GetStatusUseCase } from './GetStatusUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetStatusController extends BaseController {
  private useCase: GetStatusUseCase

  constructor (useCase: GetStatusUseCase) {
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

export { GetStatusController }