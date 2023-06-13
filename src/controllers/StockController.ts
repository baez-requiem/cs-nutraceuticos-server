import { Request, Response } from 'express'
import { CreateNewBatchUseCase } from '../useCases/createNewBatch/CreateNewBatchUseCase'

class StockController {
  async createNewBatchHandle(request: Request, response: Response) {
    const createNewBatchUseCase = new CreateNewBatchUseCase()

    const batch = await createNewBatchUseCase.execute(request.body)

    return response.json(batch)
  }
}

export { StockController }