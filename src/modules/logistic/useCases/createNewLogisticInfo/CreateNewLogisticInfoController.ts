import { Request, Response } from 'express'
import { CreateNewLogisticInfoUseCase } from './CreateNewLogisticInfoUseCase'
import { GetUserIdByTokenProvider } from '../../../../provider/GetUserIdByTokenProvider';

class CreateNewLogisticInfoController {
  private useCase: CreateNewLogisticInfoUseCase

  constructor (useCase: CreateNewLogisticInfoUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const getUserIdByTokenProvider = new GetUserIdByTokenProvider()

    const authToken = request.headers.authorization!
    const id_user = await getUserIdByTokenProvider.execute(authToken)

    const data = await this.useCase.execute({ ...request.body, id_user})

    response.status(201).json(data)
  }
}

export { CreateNewLogisticInfoController }