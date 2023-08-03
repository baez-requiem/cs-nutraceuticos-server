import { client } from '../../../../prisma/client'
import { CreateProductRequestDTO } from './CreateProductRequestDTO'

class CreateProductUseCase {
  
  async execute(request: CreateProductRequestDTO) {
    
    const product = await client.product.create({ data: request })

    const ok = !!product.id

    return ok
  }
}

export { CreateProductUseCase }