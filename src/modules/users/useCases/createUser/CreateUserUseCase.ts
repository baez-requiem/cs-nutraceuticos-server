import { client } from '../../../../prisma/client'
import { hash } from 'bcryptjs'
import { CreateUserSchema } from './CreateUserSchema'
import { CreateUserRequestDTO } from './CreateUserRequestDTO'
import { parseSchema } from '../../../../utils/zod.utils'

class CreateUserUseCase {
  
  async execute(request: CreateUserRequestDTO) {

    const { password, ...validData } = parseSchema(CreateUserSchema, request)

    const userAlreadyExists = await client.user.findFirst({
      where: { username: validData.username }
    })

    if (userAlreadyExists) {
      throw new Error("Nome de usuário já existe!")
    }

    const roleExists = await client.role.findFirst({ where: { id: validData.roleId } })

    if (validData.roleId && !roleExists) {
      throw new Error("Tipo de usuário não existe!")
    }
    
    if (validData.salesTeamId) {
      const salesTeamExists = await client.salesTeam.findFirst({ where: { id: validData.salesTeamId } })
      
      if (!salesTeamExists) {
        throw new Error("Tipo de usuário não existe!")
      }
    }

    const passwordHash = await hash(password.toString(), 8)

    const { password: _password, ...user } = await client.user.create({
      data: {
        ...validData,
        password: passwordHash
      }
    })

    return { ...user, role: roleExists }
  }
}

export { CreateUserUseCase }