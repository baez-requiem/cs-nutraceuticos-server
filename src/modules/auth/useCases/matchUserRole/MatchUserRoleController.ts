import { Request, Response } from 'express'
import { MatchUserRoleUseCase } from './MatchUserRoleUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { MatchUserRoleSchema } from './MatchUserRoleSchema'

class MatchUserRoleController extends BaseController {
  private useCase: MatchUserRoleUseCase

  constructor (useCase: MatchUserRoleUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(MatchUserRoleSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return this.ok(response, result)
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { MatchUserRoleController }