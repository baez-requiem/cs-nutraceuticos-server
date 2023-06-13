import { client } from '../../prisma/client'

class GetUsersUseCase {
  async execute() {
    const users = client.user.findMany({
      orderBy: { name: 'asc' },
      include: { role: true },
      
    })

    return users
  }
}

export { GetUsersUseCase }