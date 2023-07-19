import { hash } from 'bcryptjs'
import { client } from '../../../../prisma/client'
import { UpdateUserSchema } from './UpdateUserSchema'
import { UpdateUserRequestDTO } from './UpdateUserRequestDTO'
import { parseSchema } from '../../../../utils/zod.utils'
import { Prisma } from '@prisma/client'

class UpdateUserUseCase {
  async execute(request: UpdateUserRequestDTO) {
    const { id, ...data } = parseSchema(UpdateUserSchema, request)

    const dataToUpdate: Prisma.UserUpdateArgs['data'] = {
      ...data,
      updated_at: new Date().toISOString()
    }
    
    if (data.roleId) {
      const roleExists = await client.role.findFirst({ where: { id: data.roleId } })

      if (!roleExists) {
        throw new Error("Tipo de usuário não existe!")
      }
    }

    if (data.salesTeamId) {
      const salesTeamExists = await client.salesTeam.findFirst({ where: { id: data.salesTeamId } })
      
      if (!salesTeamExists) {
        throw new Error("Tipo de usuário não existe!")
      }
    }
    
    if (data.password) {
      const passwordHash = await hash(data.password.toString(), 8)
      dataToUpdate.password = passwordHash
    } else {
      delete dataToUpdate.password
    }

    const { password: _password, ...user } = await client.user.update({
      where: { id },
      data: {
        ...dataToUpdate,
        updated_at: new Date().toISOString()
      }
    })

    // TODO: se o usuario for diferente de seller, desvincular o usuario de um time

    return user
  }
}

export { UpdateUserUseCase }