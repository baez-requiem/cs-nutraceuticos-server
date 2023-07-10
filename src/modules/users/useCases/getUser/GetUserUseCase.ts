import { client } from '../../../../prisma/client'

class GetUserUseCase {
  async execute() {
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