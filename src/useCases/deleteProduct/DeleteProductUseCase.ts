import { client } from '../../prisma/client'

interface IProductRequest {
  id: number
}

class DeleteProductUseCase {
  
  async execute({ id }: IProductRequest) {
    if (!id) {
      throw new Error("Informe o id do produto!")
    }

    await client.product.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteProductUseCase }