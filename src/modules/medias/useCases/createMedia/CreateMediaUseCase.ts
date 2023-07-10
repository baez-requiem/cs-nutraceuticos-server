import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { CreateMediaRequestDTO } from './CreateMediaRequestDTO'
import { CreateMediaSchema } from './CreateMediaSchema'

class CreateMediaUseCase {
  
  async execute(request: CreateMediaRequestDTO) {
    const data = parseSchema(CreateMediaSchema, request)

    const media = await client.media.create({ data })

    return media
  }
}

export { CreateMediaUseCase }