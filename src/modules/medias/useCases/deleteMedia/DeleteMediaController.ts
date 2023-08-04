import { Request, Response } from 'express'
import { DeleteMediaUseCase } from './DeleteMediaUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { DeleteMediasSchema } from './DeleteMediaSchema'

class DeleteMediaController extends BaseController {
  private useCase: DeleteMediaUseCase

  constructor (useCase: DeleteMediaUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const dto = parseSchemaDTO(DeleteMediasSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return result
        ? this.ok(response)
        : this.fail(response)
      
    } catch (error) {
      return  this.fail(response)
    }
  }
}

export { DeleteMediaController }