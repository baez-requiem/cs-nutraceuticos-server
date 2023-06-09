import { Request, Response } from 'express'
import { CreateNewBatchUseCase } from '../useCases/createNewBatch/CreateNewBatchUseCase'
import { GetStockProductsUseCase } from '../useCases/getStockProducts/GetStockProductsUseCase'
import { GetBatchesUseCase } from '../useCases/getBatches/GetBatchesUseCase'
import { DeleteBatchUseCase } from '../useCases/deleteBatch/DeleteBatchUseCase'
import { UpdateBatchUseCase } from '../useCases/updateBatch/UpdateBatchUseCase'
import { GetUserByAuthProvider } from '../provider/GetUserByTokenProvider'

class StockController {
  async createNewBatchHandle(request: Request, response: Response) {
    const createNewBatchUseCase = new CreateNewBatchUseCase()
    const getTokenSubjectProvider = new GetUserByAuthProvider()

    const authToken = request.headers.authorization!
    const user = await getTokenSubjectProvider.execute(authToken)

    const batch = await createNewBatchUseCase.execute({ ...request.body, id_user: user?.id })

    return response.json(batch)
  }

  async getStockProductsHandle(request: Request, response: Response) {
    const getStockProductsUseCase = new GetStockProductsUseCase()

    const products = await getStockProductsUseCase.execute(request.query)

    return response.json(products)
  }

  async getBatchesHandle(_request: Request, response: Response) {
    const getBatchesUseCase = new GetBatchesUseCase()

    const batches = await getBatchesUseCase.execute()

    return response.json(batches)
  }

  async deleteBatchHandle(request: Request, response: Response) {
    const { id } = request.body

    const deleteBatchUseCase = new DeleteBatchUseCase()

    const status = await deleteBatchUseCase.execute({ id })

    return response.json(status)
  }

  async updateBatchHandle(request: Request, response: Response) {
    const updateBatchUseCase = new UpdateBatchUseCase()

    const batch = await updateBatchUseCase.execute(request.body)

    return response.json(batch)
  }
}

export { StockController }