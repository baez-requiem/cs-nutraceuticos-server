import { client } from '../../../../prisma/client'
import { CreateMediaRequestDTO } from './CreateMediaRequestDTO'

class CreateMediaUseCase {
  
  async execute(request: CreateMediaRequestDTO) {
    const media = await client.media.create({ data: request })

    const ok = !!media.id

    return ok
  }
}

export { CreateMediaUseCase }