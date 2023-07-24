import { Request, Response } from 'express'
import { BaseController } from '../../../../shared/core/BaseController'

import { CreateNewBatchUseCase } from './CreateNewBatchUseCase'
import { CreateNewBatchSchema } from './CreateNewBatchSchema'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetUserIdByTokenProvider } from '../../../../provider/GetUserIdByTokenProvider'

class CreateNewBatchController extends BaseController {
  private useCase: CreateNewBatchUseCase

  constructor (useCase: CreateNewBatchUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const getUserIdByTokenProvider = new GetUserIdByTokenProvider()

    const authToken = request.headers.authorization!
    const id_user = await getUserIdByTokenProvider.execute(authToken)

    const dto = parseSchemaDTO(CreateNewBatchSchema, { ...request.body, id_user })

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)
      
      return result
        ? this.created(response)
        : this.fail(response)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { CreateNewBatchController }