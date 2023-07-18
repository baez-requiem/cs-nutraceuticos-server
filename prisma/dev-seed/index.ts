import { PrismaClient } from '@prisma/client'

import { hash } from 'bcryptjs'

import { roles } from './roles'
import { users } from './users'
import { products } from './products'
import { paymentTypes } from './paymentTypes'
import { medias } from './medias'
import { salesTeam } from './salesTeam'
import { saleStatus } from './saleStatus'
import { deliveryTypes } from './deliveryTypes'
import { motoboys } from './motoboys'

const client = new PrismaClient()

async function main() {
  for (let saleTeam of salesTeam) {
    await client.salesTeam.create({
      data: saleTeam
    })
  }

  for (let role of roles) {
    await client.role.create({
      data: role
    })
  }
  
  for (let product of products) {
    await client.product.create({
      data: product
    })
  }

  for (let user of users) {
    const passwordHash = await hash(user.password.toString(), 8)

    await client.user.create({
      data: {
        ...user,
        password: passwordHash
      }
    })
  }

  for (let paymentType of paymentTypes) {
    await client.paymentType.create({
      data: paymentType
    })  
  }

  for (let motoboy of motoboys) {
    await client.motoBoy.create({
      data: motoboy
    })  
  }

  for (let deliveryType of deliveryTypes) {
    await client.deliveryType.create({
      data: deliveryType
    })  
  }
  
  for (let media of medias) {
    await client.media.create({
      data: media
    })  
  }
  
  for (let status of saleStatus) {
    await client.saleStatus.create({
      data: status
    })  
  }
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    client.$disconnect()
  })