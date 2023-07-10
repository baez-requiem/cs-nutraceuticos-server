import { client } from '../../../../prisma/client'

class GetRoleUseCase {
  
  async execute() {
    const roles = await client.role.findMany({
      orderBy: { name: 'asc' }
    })

    return roles
  }
}

export { GetRoleUseCase }