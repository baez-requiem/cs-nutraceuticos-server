import { client } from '../../../../prisma/client'
import { GetDeliveryTypesResponseDTO } from './GetDeliveryTypesResponseDTO'

class GetDeliveryTypesUseCase {
  
  async execute(): Promise<GetDeliveryTypesResponseDTO> {
    const deliveryTypes = await client.deliveryType.findMany({
      orderBy: { name: 'asc' },
    })

    return deliveryTypes
  }
}

export { GetDeliveryTypesUseCase }