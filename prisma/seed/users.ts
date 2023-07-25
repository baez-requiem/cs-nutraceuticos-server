import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

export const users = [
  {
    name: "Master",
    username: "master",
    password: "123mu123",
    active: true,
    roleId: "master"
  }
]

export const insertUsers = async (client: PrismaClient) => {
  for (let user of users) {
    const passwordHash = await hash(user.password.toString(), 8)

    await client.user.create({ data: { ...user, password: passwordHash } })
  }
}