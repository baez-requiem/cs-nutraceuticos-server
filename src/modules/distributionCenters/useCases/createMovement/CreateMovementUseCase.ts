import { client } from "../../../../prisma/client"
import { CreateMovementRequestDTO } from "./CreateMovementRequestDTO"

class CreateMovementUseCase {
  async execute({ products, ...dto }: CreateMovementRequestDTO) {
    const distributionCenterMovement = await client.distributionCenterMovement.create({
      data: dto
    })

    const dataProducts = products.map(p => ({
      id_product: p.id,
      quantity: p.quantity,
      id_distribution_center_movement: distributionCenterMovement.id
    }))

    const distributionCenterProductsMovement = await client.distributionCenterProductsMovement.createMany({
      data: dataProducts
    })
    
    let ok = !!distributionCenterMovement.id && !!distributionCenterProductsMovement.count
    
    if (dto.id_distribution_center_rel && dto.operation.includes('TRANSFER')) {

      const operation = dto.operation === 'TRANSFER_IN' ? 'TRANSFER_OUT' : 'TRANSFER_IN'

      const distributionCenterMovementRel = await client.distributionCenterMovement.create({
        data: { 
          operation,
          id_distribution_center: dto.id_distribution_center_rel,
          id_distribution_center_rel: dto.id_distribution_center,
        }
      })

      const dataProductsRel = dataProducts.map(p => ({ ...p, id_distribution_center_movement: distributionCenterMovementRel.id }))

      const distributionCenterProductsMovementRel = await client.distributionCenterProductsMovement.createMany({
        data: dataProductsRel
      })

      ok = ok && !!distributionCenterMovementRel.id && !!distributionCenterProductsMovementRel.count
    }

    return ok
  }
}

export { CreateMovementUseCase }