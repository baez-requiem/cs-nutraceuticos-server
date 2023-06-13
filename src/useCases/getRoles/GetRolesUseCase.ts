import { client } from '../../prisma/client'

class GetRolesUseCase {
  
  async execute() {
    const roles = client.role.findMany({
      orderBy: { name: 'asc' }
    })

    return roles
  }
}

export { GetRolesUseCase }