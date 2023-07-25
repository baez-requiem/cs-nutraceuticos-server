import { PrismaClient } from "@prisma/client"

export const deliveryTypes = [
  { name: 'Motoboy', id: 'motoboy' },
  { name: 'Correios', id: 'correios' }
]

export const insertDeliveryTypes = async (client: PrismaClient) => {
  for (let deliveryType of deliveryTypes) {
    await client.deliveryType.create({ data: deliveryType })
  }
}