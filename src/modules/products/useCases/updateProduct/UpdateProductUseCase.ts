import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { UpdateProductRequestDTO } from './UpdateProductRequestDTO'
import { UpdateProductSchema } from './updateProductSchema'

class UpdateProductUseCase {
  
  async execute(request: UpdateProductRequestDTO) {
    const { id, ...data } = parseSchema(UpdateProductSchema, request)

    const product = await client.product.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      }
    })

    return product
  }
}

export { UpdateProductUseCase }