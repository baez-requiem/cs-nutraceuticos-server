import { client } from '../../../../prisma/client'
import { UpdateProductRequestDTO } from './UpdateProductRequestDTO'

class UpdateProductUseCase {
  
  async execute({ id, ...data }: UpdateProductRequestDTO) {

    const product = await client.product.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      }
    })

    const ok = !!product.id

    return ok
  }
}

export { UpdateProductUseCase }