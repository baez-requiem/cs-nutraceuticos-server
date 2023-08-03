import { client } from '../../../../prisma/client'
import { UpdateMediaRequestDTO } from './UpdateMediaRequestDTO'

class UpdateMediaUseCase {
  
  async execute({ id, ...data }: UpdateMediaRequestDTO) {

    const media = await client.media.update({
      where: { id },
      data: {
        ...data,
        updated_at: new Date()
      }
    })

    return media
  }
}

export { UpdateMediaUseCase }