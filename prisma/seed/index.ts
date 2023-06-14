import { PrismaClient } from '@prisma/client'

import { hash } from 'bcryptjs'

import { roles } from './roles'
import { users } from './users'

const client = new PrismaClient()

async function main() {
  for (let role of roles) {
    await client.role.create({
      data: role
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
}

main()
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
  .finally(() => {
    client.$disconnect()
  })