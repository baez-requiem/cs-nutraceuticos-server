import { Request, Response } from 'express'
import { DeleteMediaUseCase } from './DeleteMediaUseCase'

class DeleteMediaController {
  async handle(request: Request, response: Response) {
    const { id } = request.body

    const deleteMediaUseCase = new DeleteMediaUseCase()

    const status = await deleteMediaUseCase.execute({ id })

    return response.json(status)
  }
}

export { DeleteMediaController }