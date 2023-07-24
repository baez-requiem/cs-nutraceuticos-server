import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { DeleteProductRequestDTO } from './DeleteProductRequestDTO'
import { DeleteProductSchema } from './DeleteProductSchema'

class DeleteProductUseCase {
  
  async execute({ id }: DeleteProductRequestDTO) {    
    const product = await client.product.delete({
      where: { id }
    })

    const ok = !!product.id

    return ok
  }
}

export { DeleteProductUseCase }