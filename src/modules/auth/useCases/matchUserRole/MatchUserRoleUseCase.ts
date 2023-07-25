import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { MatchUserRoleRequestDTO } from './MatchUserRoleRequestDTO'
import { MatchUserRoleSchema } from './MatchUserRoleSchema'

class MatchUserRoleUseCase {
  async execute(request: MatchUserRoleRequestDTO) {

    const data = parseSchema(MatchUserRoleSchema, request)

    const user = await client.user.findFirst({
      where: { id: data.id_user },
      select: { roleId: true }
    })

    if (!user) {
      throw new Error('User not exists.')
    }

    const roles = await client.role.findMany({
      where: { id: { in: [...data.roles, 'master'] } },
      select: { id: true }
    })

    const match = roles.some(role => role.id == user.roleId)

    return { match }
  }
}

export { MatchUserRoleUseCase }