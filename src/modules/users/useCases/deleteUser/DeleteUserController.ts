import { Request, Response } from 'express'
import { DeleteUserUseCase } from './DeleteUserUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { DeleteUserSchema } from './DeleteUserSchema'

class DeleteUserController extends BaseController {
  private useCase: DeleteUserUseCase

  constructor(useCase: DeleteUserUseCase) {
    super()
    this.useCase = useCase
  }

  async execute(request: Request, response: Response) {
    const dto = parseSchemaDTO(DeleteUserSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(dto)

      return result
        ? this.ok(response)
        : this.fail(response)

    } catch (error) {
      return this.fail(response)
    }
  }
}

export { DeleteUserController }