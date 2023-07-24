import { client } from '../../../../prisma/client'
import { DeleteUserRequestDTO } from './DeleteUserRequestDTO'

interface IUserRequest {
  id: string
}

class DeleteUserUseCase {
  
  async execute({ id }: DeleteUserRequestDTO) {
    const user = await client.user.delete({
      where: { id }
    })

    await client.refreshToken.deleteMany({
      where: { userId: id }
    })

    const ok = !!user.id

    return ok
  }
}

export { DeleteUserUseCase }