import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { CreateProductRequestDTO } from './CreateProductRequestDTO'
import { CreateProductSchema } from './CreateProductSchema'

class CreateProductUseCase {
  
  async execute(request: CreateProductRequestDTO) {

    const data = parseSchema(CreateProductSchema, request)
    
    const product = await client.product.create({ data })

    return product
  }
}

export { CreateProductUseCase }