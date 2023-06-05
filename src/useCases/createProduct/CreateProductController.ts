import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'

class CreateProductController {
  async handle(request: Request, response: Response) {
    const { name, description, notes, active } = request.body

    const createUserUseCase = new CreateProductUseCase()

    const product = await createUserUseCase.execute({
      name,
      notes,
      active,
      description,
    })

    return response.json(product)
  }
}

export { CreateProductController }