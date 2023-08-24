import { PrismaClient } from '@prisma/client'
import { CreateProductRequestDTO } from './CreateProductRequestDTO'

class CreateProductUseCase {
  private client: PrismaClient

  constructor (client: PrismaClient) {
    this.client = client;
  }
  
  async execute(request: CreateProductRequestDTO) {
    const product = await this.client.product.create({ data: request })

    const ok = !!product.id

    return ok
  }
}

export { CreateProductUseCase }