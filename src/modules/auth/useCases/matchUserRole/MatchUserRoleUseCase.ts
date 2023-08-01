import { client } from '../../../../prisma/client'
import { MatchUserRoleRequestDTO } from './MatchUserRoleRequestDTO'

class MatchUserRoleUseCase {
  async execute(request: MatchUserRoleRequestDTO) {

    const user = await client.user.findFirst({
      where: { id: request.id_user },
      select: { roleId: true }
    })

    if (!user) {
      throw new Error('User not exists.')
    }

    const roles = await client.role.findMany({
      where: { id: { in: [...request.roles, 'master'] } },
      select: { id: true }
    })

    const match = roles.some(role => role.id == user.roleId)

    return { match }
  }
}

export { MatchUserRoleUseCase }