import { client } from '../../../../prisma/client'

class GetRolesUseCase {
  async execute() {
    const roles = await client.role.findMany({
      where: {
        id: { not: 'master' }
      }
    })

    return roles
  }
}

export { GetRolesUseCase }