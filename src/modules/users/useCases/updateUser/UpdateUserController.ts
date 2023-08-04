import { Request, Response } from 'express'
import { UpdateUserUseCase } from './UpdateUserUseCase'
import { parseSchemaDTO } from '../../../../utils/zod.utils';
import { BaseController } from '../../../../shared/core/BaseController';
import { UpdateUserSchema } from './UpdateUserSchema';

class UpdateUserController extends BaseController {
  private useCase: UpdateUserUseCase

  constructor (useCase: UpdateUserUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateUserSchema, request.body)

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

export { UpdateUserController }