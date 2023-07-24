import { hash } from 'bcryptjs'
import { client } from '../../../../prisma/client'
import { UpdateUserRequestDTO } from './UpdateUserRequestDTO'
import { Prisma } from '@prisma/client'

class UpdateUserUseCase {
  async execute({ id, ...data }: UpdateUserRequestDTO) {
    const dataToUpdate: Prisma.UserUpdateArgs['data'] = {
      ...data,
      updated_at: new Date().toISOString()
    }
    
    if (data.roleId) {
      const roleExists = await client.role.findFirst({ where: { id: data.roleId } })
      
      if (!roleExists) {
        throw new Error("Tipo de usuário não existe!")
      }

      if (data.roleId !== 'seller') {
        dataToUpdate.salesTeamId = null
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

    const ok = !!user.id

    return ok
  }
}

export { UpdateUserUseCase }