import { client } from '../../../../prisma/client'

class GetDeliveryTypesUseCase {
  
  async execute() {
    const deliveryTypes = await client.deliveryType.findMany({
      orderBy: { name: 'asc' },
    })

    return deliveryTypes
  }
}

export { GetDeliveryTypesUseCase }