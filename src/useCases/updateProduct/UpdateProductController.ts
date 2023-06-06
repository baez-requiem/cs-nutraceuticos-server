import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'

class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, name, description, notes, active } = request.body

    const updateMediaUseCase = new UpdateProductUseCase()

    const product = await updateMediaUseCase.execute({
      id,
      name,
      notes,
      active,
      description,
    })

    return response.json(product)
  }
}

export { UpdateProductController }