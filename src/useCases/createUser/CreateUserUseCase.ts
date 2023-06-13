import { client } from '../../prisma/client'
import { hash } from 'bcryptjs'
import { CreateUserSchema, CreateUserSchemaType } from './createUserSchema'
import { formatErrorsZod } from '../../utils/zod.utils'

interface IUserRequest extends CreateUserSchemaType {}

class CreateUserUseCase {
  
  async execute(data: IUserRequest) {
    const validateData = CreateUserSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const { password, ...validData } = validateData.data

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