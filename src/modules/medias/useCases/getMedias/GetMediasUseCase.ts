import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { GetMediasDTO, GetMediasSchema } from './GetMediasSchema'

class GetMediasUseCase {
  
  async execute(request: GetMediasDTO) {

    const data = parseSchema(GetMediasSchema, request)

    const medias = await client.media.findMany({
      orderBy: { id: 'asc' },
      where: {
        active: data.active && { equals: data.active === 'true' },
        deleted: false
      }
    })

    return medias
  }
}

export { GetMediasUseCase }