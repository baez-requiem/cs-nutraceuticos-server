import { client } from '../../../../prisma/client'
import { DeleteUserRequestDTO } from './DeleteUserRequestDTO'

class DeleteUserUseCase {
  
  async execute({ id }: DeleteUserRequestDTO) {
    const user = await client.user.update({
      where: { id },
      data: { deleted: true }
    })

    await client.refreshToken.deleteMany({
      where: { userId: id }
    })

    const ok = !!user.id

    return ok
  }
}

export { DeleteUserUseCase }