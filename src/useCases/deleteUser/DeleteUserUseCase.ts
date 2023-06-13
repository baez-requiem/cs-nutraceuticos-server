import { client } from '../../prisma/client'

interface IUserRequest {
  id: string
}

class DeleteUserUseCase {
  
  async execute({ id }: IUserRequest) {
    if (!id) {
      throw new Error("Informe o id do usuário!")
    }

    await client.user.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteUserUseCase }