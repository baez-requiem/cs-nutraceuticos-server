import { Prisma } from '@prisma/client'
import { client } from '../../../../prisma/client'
import { GetMediasDTO } from './GetMediasSchema'

class GetMediasUseCase {
  
  async execute(request: GetMediasDTO) {

    const where: Prisma.MediaWhereInput = {
      deleted: false
    }

    if (request.active) {
      where.active = (request.active === 'true')
    }

    const medias = await client.media.findMany({
      where,
      orderBy: { id: 'asc' },
    })

    return medias
  }
}

export { GetMediasUseCase }