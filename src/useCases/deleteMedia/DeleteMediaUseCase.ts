import { client } from '../../prisma/client'

interface IMediaRequest {
  id: string
}

class DeleteMediaUseCase {
  
  async execute({ id }: IMediaRequest) {
    if (!id) {
      throw new Error("Informe o id da mídia!")
    }

    await client.media.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteMediaUseCase }