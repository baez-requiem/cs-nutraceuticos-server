import { client } from '../../../../prisma/client'
import { GetMediasDTO } from './GetMediasSchema'

class GetMediasUseCase {
  
  async execute(request: GetMediasDTO) {

    const medias = await client.media.findMany({
      orderBy: { id: 'asc' },
      where: {
        active: request.active && { equals: request.active === 'true' },
        deleted: false
      }
    })

    return medias
  }
}

export { GetMediasUseCase }