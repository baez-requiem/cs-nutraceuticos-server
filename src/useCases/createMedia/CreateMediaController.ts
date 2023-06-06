import { Request, Response } from 'express'
import { CreateMediaUseCase } from './CreateMediaUseCase'

class CreateMediaController {
  async handle(request: Request, response: Response) {
    const { name, description, notes, active } = request.body

    const createMediaUseCase = new CreateMediaUseCase()

    const media = await createMediaUseCase.execute({
      name,
      notes,
      active,
      description,
    })

    return response.json(media)
  }
}

export { CreateMediaController }