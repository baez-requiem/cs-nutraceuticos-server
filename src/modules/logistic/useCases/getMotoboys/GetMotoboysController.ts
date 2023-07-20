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

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetMotoboysController }