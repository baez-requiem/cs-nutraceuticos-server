import { Request, Response } from 'express'
import { DeleteMotoboyUseCase } from './DeleteMotoboyUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils';
import { DeleteMotoboySchema } from './DeleteMotoboySchema';

class DeleteMotoboyController extends BaseController {
  private useCase: DeleteMotoboyUseCase

  constructor (useCase: DeleteMotoboyUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(DeleteMotoboySchema, request.body)

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

export { DeleteMotoboyController }