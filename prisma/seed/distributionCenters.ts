import { PrismaClient } from "@prisma/client"

export const distributionCenters = [
  { id: "matriz", name: "Matriz" },
]

export const insertDistributionCenters = async (client: PrismaClient) => {
  for (let distributionCenter of distributionCenters) {
    await client.distributionCenter.create({ data: distributionCenter })
  }
}