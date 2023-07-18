import { Request, Response } from 'express'
import { CreateNewLogisticInfoUseCase } from './CreateNewLogisticInfoUseCase'

class CreateNewLogisticInfoController {
  private useCase: CreateNewLogisticInfoUseCase

  constructor (useCase: CreateNewLogisticInfoUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const data = await this.useCase.execute(request.body)

    response.json(data)
  }
}

export { CreateNewLogisticInfoController }