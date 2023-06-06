import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'

class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const deleteProductUseCase = new DeleteProductUseCase()

    const status = await deleteProductUseCase.execute({ id })

    return response.json(status)
  }
}

export { DeleteProductController }