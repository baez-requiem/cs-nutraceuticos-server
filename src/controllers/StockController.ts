import { Request, Response } from 'express'
import { CreateNewBatchUseCase } from '../useCases/createNewBatch/CreateNewBatchUseCase'
import { GetStockProductsUseCase } from '../useCases/getStockProducts/GetStockProductsUseCase'
import { GetBatchesUseCase } from '../useCases/getBatches/GetBatchesUseCase'

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

  async getBatchesHandle(_request: Request, response: Response) {
    const getBatchesUseCase = new GetBatchesUseCase()

    const batches = await getBatchesUseCase.execute()

    return response.json(batches)
  }
}

export { StockController }