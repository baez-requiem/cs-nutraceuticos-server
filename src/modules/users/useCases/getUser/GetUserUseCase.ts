import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'
import { GetUserRequestDTO } from './GetUserRequestDTO'

class GetUserUseCase {
  async execute(request: GetUserRequestDTO) {

    const where: Prisma.UserWhereInput = {}

    if (request.active) {
      where.active = request.active === 'true'
    }

    if (request.user_role) {
      const roleExists = await client.role.findFirst({ where: { id: request.user_role } })

      if (!roleExists) {
        throw new Error('User role not exists')
      }

      where.roleId = request.user_role
    }

    const users = client.user.findMany({
      orderBy: { name: 'asc' },
      include: { role: true },
      where: {
        roleId: {
          not: 'master'
        }
      }
    })

    return users
  }
}

export { GetUserUseCase }