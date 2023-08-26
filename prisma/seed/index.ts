import { PrismaClient } from '@prisma/client'

import { insertRoles } from './roles'
import { insertUsers } from './users'
import { insertSaleStatus } from './saleStatus'
import { insertPaymentTypes } from './paymentTypes'
import { insertDeliveryTypes } from './deliveryTypes'
import { insertDistributionCenters } from './distributionCenters'

const client = new PrismaClient()

async function main() {
  await insertRoles(client)
  await insertUsers(client)
  await insertSaleStatus(client)
  await insertPaymentTypes(client)
  await insertDeliveryTypes(client)
  await insertDistributionCenters(client)
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    client.$disconnect()
  })