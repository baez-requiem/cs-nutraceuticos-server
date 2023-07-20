import { PrismaClient } from "@prisma/client"

const batches = [
  {
    shipping: 10.00,
    id_user: 'master',
    products: [
      { id_product: 'p1', quantity: 100, unit_amount: 10 },
      { id_product: 'p3', quantity: 100, unit_amount: 10 },
      { id_product: 'p4', quantity: 100, unit_amount: 10 },
      { id_product: 'p6', quantity: 100, unit_amount: 10 },
      { id_product: 'p8', quantity: 100, unit_amount: 10 },
      { id_product: 'p9', quantity: 100, unit_amount: 10 },
    ]
  },
  {
    shipping: 25.00,
    id_user: 'master',
    products: [
      { id_product: 'p1', quantity: 100, unit_amount: 10 },
      { id_product: 'p2', quantity: 100, unit_amount: 10 },
      { id_product: 'p3', quantity: 100, unit_amount: 10 },
      { id_product: 'p4', quantity: 100, unit_amount: 10 },
      { id_product: 'p6', quantity: 100, unit_amount: 10 },
      { id_product: 'p8', quantity: 100, unit_amount: 10 },
      { id_product: 'p9', quantity: 100, unit_amount: 10 },
    ]
  },
  {
    shipping: 29.99,
    id_user: 'master',
    products: [
      { id_product: 'p1', quantity: 100, unit_amount: 10 },
      { id_product: 'p2', quantity: 100, unit_amount: 10 },
      { id_product: 'p3', quantity: 100, unit_amount: 10 },
      { id_product: 'p4', quantity: 100, unit_amount: 10 },
      { id_product: 'p5', quantity: 100, unit_amount: 10 },
      { id_product: 'p6', quantity: 100, unit_amount: 10 },
      { id_product: 'p7', quantity: 100, unit_amount: 10 },
      { id_product: 'p8', quantity: 100, unit_amount: 10 },
      { id_product: 'p9', quantity: 100, unit_amount: 10 },
    ]
  },
]

export const insertBatches = async (client: PrismaClient) => {
  for (let batch of batches) {
    const newBatch = await client.batch.create({
      data: {
        shipping: batch.shipping,
        id_user: batch.id_user,
      }
    })

    for (let product of batch.products) {
      await client.batchesProducts.create({
        data: {
          id_batch: newBatch.id,
          ...product
        }
      })
    }

  }
}