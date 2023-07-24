import { Request, Response } from 'express'
import { GetRolesUseCase } from './GetRolesUseCase'
import { BaseController } from '../../../../shared/core/BaseController';

class GetRolesController extends BaseController {
  private useCase: GetRolesUseCase

  constructor (useCase: GetRolesUseCase) {
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

export { GetRolesController }