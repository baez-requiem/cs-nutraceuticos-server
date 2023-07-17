import { Request, Response } from 'express'
import { MatchUserRoleUseCase } from './MatchUserRoleUseCase'

class MatchUserRoleController {
  private useCase: MatchUserRoleUseCase

  constructor (useCase: MatchUserRoleUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { MatchUserRoleController }