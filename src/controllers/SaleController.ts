import { Request, Response } from 'express'
import { GetPaymentTypesUseCase } from '../useCases/getPaymentTypes/GetPaymentTypesUseCase'
import { CreateNewSaleUseCase } from '../useCases/createNewSale/CreateNewSaleUseCase'


class SaleController {
  async getPaymentsTypesHandle(_request: Request, response: Response) {
    const getPaymentTypesUseCase = new GetPaymentTypesUseCase()

    const paymentTypes = await getPaymentTypesUseCase.execute()

    response.json(paymentTypes)
  }

  async newSaleHandle(request: Request, response: Response) {
    const createNewSaleUseCase = new CreateNewSaleUseCase()

    const sale = await createNewSaleUseCase.execute(request.body)

    response.json(sale)
  }
}

export { SaleController }