import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { UpdateBatchUseCase } from './UpdateBatchUseCase'
import { UpdateBatchSchema } from './UpdateBatchSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetUserByRequestProvider } from '../../../../provider'

class UpdateBatchController extends BaseController{
  private useCase: UpdateBatchUseCase

  constructor (useCase: UpdateBatchUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const getUserByRequestProvider = new GetUserByRequestProvider()
    const id_user = await getUserByRequestProvider.execute(request)

    const dto = parseSchemaDTO(UpdateBatchSchema, { ...request.body, id_user })

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return result
        ? this.ok(response)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { UpdateBatchController }