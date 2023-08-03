import { Request, Response } from 'express'
import { CreateNewLogisticInfoUseCase } from './CreateNewLogisticInfoUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { GetUserByRequestProvider } from '../../../../provider'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateNewLogisticInfoSchema } from './CreateNewLogisticInfoSchema'

class CreateNewLogisticInfoController extends BaseController {
  private useCase: CreateNewLogisticInfoUseCase

  constructor (useCase: CreateNewLogisticInfoUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const getUserByRequestProvider = new GetUserByRequestProvider()
    const id_user = await getUserByRequestProvider.execute(request)

    const dto = parseSchemaDTO(CreateNewLogisticInfoSchema, { ...request.body, id_user })
    
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

export { CreateNewLogisticInfoController }