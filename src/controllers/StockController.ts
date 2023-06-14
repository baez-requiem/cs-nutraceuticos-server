import { Request, Response } from 'express'
import { CreateNewBatchUseCase } from '../useCases/createNewBatch/CreateNewBatchUseCase'
import { GetStockProductsUseCase } from '../useCases/getStockProducts/GetStockProductsUseCase'

class StockController {
  async createNewBatchHandle(request: Request, response: Response) {
    const createNewBatchUseCase = new CreateNewBatchUseCase()

    const batch = await createNewBatchUseCase.execute(request.body)

    return response.json(batch)
  }

  async getStockProductsHandle(_request: Request, response: Response) {
    const getStockProductsUseCase = new GetStockProductsUseCase()

    const products = await getStockProductsUseCase.execute()

    return response.json(products)
  }
}

export { StockController }