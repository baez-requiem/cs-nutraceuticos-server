import { client } from '../../../../prisma/client'
import { DeleteMediaRequestDTO } from './DeleteMediaRequestDTO'

class DeleteMediaUseCase {
  
  async execute({ id }: DeleteMediaRequestDTO) {

    const media = await client.media.update({
      where: { id },
      data: { deleted: true }
    })

    const ok = !!media.id

    return ok
  }
}

export { DeleteMediaUseCase }