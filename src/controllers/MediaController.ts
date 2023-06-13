import { Request, Response } from 'express'

import { CreateMediaUseCase } from '../useCases/createMedia/CreateMediaUseCase'
import { UpdateMediaUseCase } from '../useCases/updateMedia/UpdateMediaUseCase'
import { DeleteMediaUseCase } from '../useCases/deleteMedia/DeleteMediaUseCase'
import { GetMediasUseCase } from '../useCases/getMedias/GetMediasUseCase'

class MediaController {

  async createMediaHandle(request: Request, response: Response) {
    const data = request.body

    const createUserUseCase = new CreateMediaUseCase()

    const product = await createUserUseCase.execute(data)

    return response.json(product)
  }

  async updateMediaHandle(request: Request, response: Response) {
    const data = request.body

    const updateMediaUseCase = new UpdateMediaUseCase()

    const product = await updateMediaUseCase.execute(data)

    return response.json(product)
  }

  async deleteMediaHandle(request: Request, response: Response) {
    const { id } = request.body

    const deleteMediaUseCase = new DeleteMediaUseCase()

    const status = await deleteMediaUseCase.execute({ id })

    return response.json(status)
  }

  async getMediasHandle(_request: Request, response: Response) {
    const getMediasUseCase = new GetMediasUseCase()

    const products = await getMediasUseCase.execute()

    return response.json(products)
  }
}

export { MediaController }