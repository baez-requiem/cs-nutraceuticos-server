import { client } from '../../prisma/client'

interface IProductRequest {
  name: string
  description?: string
  notes?: string
  active?: boolean
}

class CreateProductUseCase {
  
  async execute({ name, active, description, notes }: IProductRequest) {
    if (!name) {
      throw new Error("Informe o nome do produto!")
    }

    const product = await client.product.create({
      data: {
        name,
        description,
        notes,
        active
      }
    })

    return product
  }
}

export { CreateProductUseCase }