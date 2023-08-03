import { Request, Response } from 'express'
import { GetMotoboysUseCase } from './GetMotoboysUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetMotoboysController extends BaseController {
  private useCase: GetMotoboysUseCase

  constructor (useCase: GetMotoboysUseCase) {
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

export { GetMotoboysController }