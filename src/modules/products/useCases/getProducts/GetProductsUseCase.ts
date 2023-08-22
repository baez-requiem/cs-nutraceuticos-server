import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'
import { GetProductsRequestDTO } from './GetProductsRequestDTO'

class GetProductsUseCase {
  
  async execute(dto: GetProductsRequestDTO) {

    const where: Prisma.ProductWhereInput = { deleted: false }

    if (dto.active) {
      where.active = dto.active === 'true'
    }

    const products = await client.product.findMany({
      orderBy: { name: 'asc' },
      where
    })

    return products
  }
}

export { GetProductsUseCase }