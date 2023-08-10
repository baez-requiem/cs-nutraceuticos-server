import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'

import { GetMotoboysDTO } from './GetMotoboysRequestDTO'
import { GetMotoboysResponseDTO } from './GetMotoboysResponseDTO'

class GetMotoboysUseCase {
  
  async execute(request: GetMotoboysDTO): Promise<GetMotoboysResponseDTO> {
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