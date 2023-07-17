import { client } from '../../../../prisma/client'

class GetRolesUseCase {
  async execute() {
    const roles = client.role.findMany()

    return roles
  }
}

export { GetRolesUseCase }