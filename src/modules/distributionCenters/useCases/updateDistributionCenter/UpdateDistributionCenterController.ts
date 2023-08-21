import { Request, Response } from 'express'
import { UpdateDistributionCenterUseCase } from './UpdateDistributionCenterUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { UpdateDistributionCenterSchema } from './UpdateDistributionCenterSchema'

class UpdateDistributionCenterController extends BaseController {
  private useCase: UpdateDistributionCenterUseCase

  constructor (useCase: UpdateDistributionCenterUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateDistributionCenterSchema, request.body)

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

export { UpdateDistributionCenterController }