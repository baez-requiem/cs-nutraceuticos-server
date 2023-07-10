import { client } from '../../../../prisma/client'
import { UpdateMediaSchema } from './UpdateMediaSchema'
import { parseSchema } from '../../../../utils/zod.utils'
import { UpdateMediaRequestDTO } from './UpdateMediaRequestDTO'

class UpdateMediaUseCase {
  
  async execute(request: UpdateMediaRequestDTO) {
    const { id, ...data } = parseSchema(UpdateMediaSchema, request)

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