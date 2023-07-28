import { client } from '../../../../prisma/client'
import { DeleteProductRequestDTO } from './DeleteProductRequestDTO'

class DeleteProductUseCase {
  
  async execute({ id }: DeleteProductRequestDTO) {    
    const product = await client.product.update({
      where: { id },
      data: { deleted: true }
    })

    const ok = !!product.id

    return ok
  }
}

export { DeleteProductUseCase }