import { Request, Response } from 'express'
import { DeleteProductUseCase } from './DeleteProductUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils';
import { DeleteProductSchema } from './DeleteProductSchema';

class DeleteProductController extends BaseController {
  private useCase: DeleteProductUseCase

  constructor (useCase: DeleteProductUseCase) {
    super();
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(DeleteProductSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const result = await this.useCase.execute(request.body)

      return result
        ? this.ok(response)
        : this.fail(response)
      
    } catch (error) {
      return  this.fail(response)
    }
  }
}

export { DeleteProductController }