import { Request, Response } from 'express'
import { GetPaymentTypesUseCase } from '../useCases/getPaymentTypes/GetPaymentTypesUseCase'
import { CreateNewSaleUseCase } from '../useCases/createNewSale/CreateNewSaleUseCase'
import { GetUserByAuthProvider } from '../provider/GetUserByTokenProvider'


class SaleController {
  async getPaymentsTypesHandle(_request: Request, response: Response) {
    const getPaymentTypesUseCase = new GetPaymentTypesUseCase()

    const paymentTypes = await getPaymentTypesUseCase.execute()

    response.json(paymentTypes)
  }

  async newSaleHandle(request: Request, response: Response) {
    const createNewSaleUseCase = new CreateNewSaleUseCase()
    const getTokenSubjectProvider = new GetUserByAuthProvider()

    const authToken = request.headers.authorization!
    const user = await getTokenSubjectProvider.execute(authToken)

    const sale = await createNewSaleUseCase.execute({
      ...request.body,
      id_user: user?.id,
      id_sales_team: user?.salesTeamId
    })

    response.json(sale)
  }
}

export { SaleController }