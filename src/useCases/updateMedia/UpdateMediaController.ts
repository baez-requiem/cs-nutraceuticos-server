import { Request, Response } from 'express'
import { UpdateMediaUseCase } from './UpdateMediaUseCase'

class UpdateMediaController {
  async handle(request: Request, response: Response) {
    const { id, name, description, notes, active } = request.body

    const updateMediaUseCase = new UpdateMediaUseCase()

    const media = await updateMediaUseCase.execute({
      id,
      name,
      notes,
      active,
      description,
    })

    return response.json(media)
  }
}

export { UpdateMediaController }