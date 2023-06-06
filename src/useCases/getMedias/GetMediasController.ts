import { Request, Response } from 'express'
import { GetMediasUseCase } from './GetMediasUseCase'

class GetMediasController {
  async handle(_request: Request, response: Response) {
    const getMediasUseCase = new GetMediasUseCase()

    const medias = await getMediasUseCase.execute()

    return response.json(medias)
  }
}

export { GetMediasController }