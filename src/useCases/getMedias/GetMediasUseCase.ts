import { client } from '../../prisma/client'

class GetMediasUseCase {
  
  async execute() {
    const medias = client.media.findMany({
      orderBy: { id: 'asc' }
    })

    return medias
  }
}

export { GetMediasUseCase }