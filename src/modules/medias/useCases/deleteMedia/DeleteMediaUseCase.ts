import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { DeleteMediaRequestDTO } from './DeleteMediaRequestDTO'
import { DeleteMediasSchema } from './DeleteMediaSchema'

class DeleteMediaUseCase {
  
  async execute(request: DeleteMediaRequestDTO) {
    const { id } = parseSchema(DeleteMediasSchema, request)

    await client.media.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteMediaUseCase }