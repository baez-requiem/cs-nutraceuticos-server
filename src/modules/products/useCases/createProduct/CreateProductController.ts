import { Request, Response } from 'express'
import { CreateProductUseCase } from './CreateProductUseCase'
import { BaseController } from '../../../../shared/core/BaseController';
import { parseSchemaDTO } from '../../../../utils/zod.utils';
import { CreateProductSchema } from './CreateProductSchema';

class CreateProductController extends BaseController {
  private useCase: CreateProductUseCase

  constructor (useCase: CreateProductUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(CreateProductSchema, request.body)

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

export { CreateProductController }