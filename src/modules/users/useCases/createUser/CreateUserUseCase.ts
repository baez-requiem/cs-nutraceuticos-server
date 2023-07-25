import { client } from '../../../../prisma/client'
import { hash } from 'bcryptjs'
import { CreateUserRequestDTO } from './CreateUserRequestDTO'

class CreateUserUseCase {
  
  async execute({ password, ...data }: CreateUserRequestDTO) {

    const userAlreadyExists = await client.user.findFirst({
      where: { username: data.username }
    })

    if (userAlreadyExists) {
      throw new Error("Nome de usuário já existe!")
    }

    const roleExists = await client.role.findFirst({ where: { id: data.roleId } })

    if (data.roleId && !roleExists) {
      throw new Error("Tipo de usuário não existe!")
    }
    
    if (data.salesTeamId) {
      const salesTeamExists = await client.salesTeam.findFirst({ where: { id: data.salesTeamId } })
      
      if (!salesTeamExists) {
        throw new Error("Tipo de usuário não existe!")
      }
    } else {
      data.salesTeamId = null
    }

    const passwordHash = await hash(password.toString(), 8)

    const { password: _password, ...user } = await client.user.create({
      data: {
        ...data,
        password: passwordHash
      }
    })

    const ok = !!user.id

    return ok
  }
}

export { CreateUserUseCase }