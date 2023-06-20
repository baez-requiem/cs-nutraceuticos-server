import { Request, Response } from 'express'
import { GetPaymentTypesUseCase } from '../useCases/getPaymentTypes/GetPaymentTypesUseCase'


class SaleController {
  async getPaymentsTypesHandle(_request: Request, response: Response) {
    const getPaymentTypesUseCase = new GetPaymentTypesUseCase()

    const paymentTypes = await getPaymentTypesUseCase.execute()

    response.json(paymentTypes)
  }

  async newSaleHandle(request: Request, response: Response) {
    
  }
}

export { SaleController }