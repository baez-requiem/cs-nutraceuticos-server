import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { DeleteProductRequestDTO } from './DeleteProductRequestDTO'
import { DeleteProductSchema } from './DeleteProductSchema'

class DeleteProductUseCase {
  
  async execute(request: DeleteProductRequestDTO) {
    const { id } = parseSchema(DeleteProductSchema, request)
    
    await client.product.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteProductUseCase }