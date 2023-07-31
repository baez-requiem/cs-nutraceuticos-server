import { Request, Response } from 'express'
import { UpdateSaleUseCase } from './UpdateSaleUseCase'
import { GetUserByAuthProvider } from '../../../../provider/GetUserByTokenProvider'
import { BaseController } from '../../../../shared/core/BaseController';

class UpdateSaleController extends BaseController {
  private useCase: UpdateSaleUseCase

  constructor (useCase: UpdateSaleUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const getTokenSubjectProvider = new GetUserByAuthProvider()

    const authToken = request.headers.authorization!
    const user = await getTokenSubjectProvider.execute(authToken)

    try {
      const data = await this.useCase.execute({
        ...request.body,
        id_user: user?.id,
        id_sales_team: user?.salesTeamId
      })

      return data 
        ? this.ok(response)
        : this.fail(response)
      
    } catch (error) {
      this.fail(response, error)      
    }
  }
}

export { UpdateSaleController }