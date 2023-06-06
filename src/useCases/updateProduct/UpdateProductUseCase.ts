import { client } from '../../prisma/client'

interface IProductRequest {
  id: number
  name: string
  description?: string
  notes?: string
  active?: boolean
}

class UpdateProductUseCase {
  
  async execute({ id, name, active, description, notes }: IProductRequest) {
    if (!name) {
      throw new Error("Informe o nome do produto!")
    }

    const product = await client.product.update({
      where: { id },
      data: {
        name,
        active,
        description,
        notes,
        updated_at: new Date()
      }
    })

    return product
  }
}

export { UpdateProductUseCase }