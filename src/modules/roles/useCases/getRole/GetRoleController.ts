import { Request, Response } from 'express'
import { GetRoleUseCase } from './GetRoleUseCase'

class GetRoleController {
  private useCase: GetRoleUseCase

  constructor (useCase: GetRoleUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetRoleController }