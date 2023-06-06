import { client } from '../../prisma/client'

interface IMediaRequest {
  id: number
  name: string
  description?: string
  notes?: string
  active?: boolean
}

class UpdateMediaUseCase {
  
  async execute({ id, name, active, description, notes }: IMediaRequest) {
    if (!name) {
      throw new Error("Informe o nome da mídia!")
    }

    const media = await client.media.update({
      where: { id },
      data: {
        name,
        active,
        description,
        notes,
        updated_at: new Date()
      }
    })

    return media
  }
}

export { UpdateMediaUseCase }