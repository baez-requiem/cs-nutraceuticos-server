import { Request, Response } from 'express'
import { CreateDistributionCenterUseCase } from './CreateDistributionCenterUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { CreateDistributionCenterSchema } from './CreateDistributionCenterSchema'

class CreateDistributionCenterController extends BaseController {
  private useCase: CreateDistributionCenterUseCase

  constructor (useCase: CreateDistributionCenterUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateDistributionCenterSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return result
        ? this.created(response)
        : this.fail(response)
      
    } catch (error) {
      this.fail(response, error)
    }
  }
}

export { CreateDistributionCenterController }