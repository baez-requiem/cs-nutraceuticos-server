import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { UpdateBatchUseCase } from './UpdateBatchUseCase'
import { UpdateBatchSchema } from './UpdateBatchSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetUserIdByTokenProvider } from '../../../../provider/GetUserIdByTokenProvider'

class UpdateBatchController extends BaseController{
  private useCase: UpdateBatchUseCase

  constructor (useCase: UpdateBatchUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const getUserIdByTokenProvider = new GetUserIdByTokenProvider()

    const authToken = request.headers.authorization!
    const id_user = await getUserIdByTokenProvider.execute(authToken)

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