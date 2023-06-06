import { client } from '../../prisma/client'

interface IMediaRequest {
  name: string
  description?: string
  notes?: string
  active?: boolean
}

class CreateMediaUseCase {
  
  async execute({ name, active, description, notes }: IMediaRequest) {
    if (!name) {
      throw new Error("Informe o nome do produto!")
    }

    const media = await client.media.create({
      data: {
        name,
        description,
        notes,
        active
      }
    })

    return media
  }
}

export { CreateMediaUseCase }