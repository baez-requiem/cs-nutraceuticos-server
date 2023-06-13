import { hash } from 'bcryptjs'
import { client } from '../../prisma/client'
import { UpdateUserSchemaType, UpdateUserSchema } from './updateUserSchema'
import { formatErrorsZod } from '../../utils/zod.utils'

interface IUserRequest extends UpdateUserSchemaType {
  id: string
}

class UpdateUserUseCase {
  async execute({id, ...data}: IUserRequest) {

    const validateData = UpdateUserSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const validData = validateData.data

    const dataToUpdate: UpdateUserSchemaType&{updated_at: string} = {
      ...validData,
      updated_at: new Date().toISOString()
    }

    
    if (validData.roleId) {
      const roleExists = await client.role.findFirst({ where: { id: validData.roleId } })

      if (!roleExists) {
        throw new Error("Tipo de usuário não existe!")
      }
    }

    if (validData.salesTeamId) {
      const salesTeamExists = await client.salesTeam.findFirst({ where: { id: validData.salesTeamId } })
      
      if (!salesTeamExists) {
        throw new Error("Tipo de usuário não existe!")
      }
    }
    
    if (validData.password) {
      const passwordHash = await hash(validData.password.toString(), 8)
      dataToUpdate.password = passwordHash
    } else {
      delete dataToUpdate.password
    }

    const { password: _password, ...user } = await client.user.update({
      where: { id },
      data: dataToUpdate
    })

    // TODO: se o usuario for diferente de seller, desvincular o usuario de um time

    return user
  }
}

export { UpdateUserUseCase }