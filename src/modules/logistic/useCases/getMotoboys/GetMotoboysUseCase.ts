import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'
import { GetMotoboysDTO } from './GetMotoboysSchema'

class GetMotoboysUseCase {
  
  async execute(request: GetMotoboysDTO) {
    const where: Prisma.MotoBoyWhereInput = {
      deleted: false
    }

    if (request.active) {
      where.active = (request.active === 'true')
    }

    const motoboys = await client.motoBoy.findMany({
      where,
      orderBy: { name: 'asc' },
    })

    return motoboys
  }
}

export { GetMotoboysUseCase }