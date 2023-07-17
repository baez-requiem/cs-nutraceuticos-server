import { Request, Response } from 'express'
import { GetRolesUseCase } from './GetRolesUseCase'

class GetRolesController {
  private useCase: GetRolesUseCase

  constructor (useCase: GetRolesUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute()

    response.json(data)
  }
}

export { GetRolesController }