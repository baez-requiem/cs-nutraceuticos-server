import { PrismaClient } from "@prisma/client"

export const roles = [
  { id: "master", name: "Master" },
  { id: "seller", name: "Vendedor" },
  { id: "admin", name: "Administrador" }
]

export const insertRoles = async (client: PrismaClient) => {
  for (let role of roles) {
    await client.role.create({ data: role })
  }
}