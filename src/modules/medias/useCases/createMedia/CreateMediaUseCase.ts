import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { CreateMediaRequestDTO } from './CreateMediaRequestDTO'
import { CreateMediaSchema } from './CreateMediaSchema'

class CreateMediaUseCase {
  
  async execute(request: CreateMediaRequestDTO) {
    const media = await client.media.create({ data: request })

    const ok = !!media.id

    return ok
  }
}

export { CreateMediaUseCase }