import { Request, Response } from 'express'
import { GetDailySalesByMediaUseCase } from './GetDailySalesByMediaUseCase'
import { BaseController } from '../../../../shared/core/BaseController'

class GetDailySalesByMediaController extends BaseController {
  private useCase: GetDailySalesByMediaUseCase

  constructor (useCase: GetDailySalesByMediaUseCase) {
    super()
    this.useCase = useCase
  }

  async execute(_request: Request, response: Response) {

    try {
      const result = await this.useCase.execute()

      return this.ok(response, result)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { GetDailySalesByMediaController }