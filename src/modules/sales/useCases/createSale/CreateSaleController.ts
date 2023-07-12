import { Request, Response } from 'express'
import { CreateSaleUseCase } from './CreateSaleUseCase'
import { GetUserByAuthProvider } from '../../../../provider/GetUserByTokenProvider'

class CreateSaleController {
  private useCase: CreateSaleUseCase

  constructor (useCase: CreateSaleUseCase) {
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {

    const getTokenSubjectProvider = new GetUserByAuthProvider()

    const authToken = request.headers.authorization!
    const user = await getTokenSubjectProvider.execute(authToken)

    const data = await this.useCase.execute({
      ...request.body,
      id_user: user?.id,
      id_sales_team: user?.salesTeamId
    })

    response.json(data)
  }
}

export { CreateSaleController }