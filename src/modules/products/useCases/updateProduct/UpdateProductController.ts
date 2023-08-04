import { Request, Response } from 'express'
import { UpdateProductUseCase } from './UpdateProductUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { UpdateProductSchema } from './updateProductSchema'

class UpdateProductController extends BaseController {
  private useCase: UpdateProductUseCase

  constructor (useCase: UpdateProductUseCase) {
    super()
    this.useCase = useCase;
  }

  async execute (request: Request, response: Response) {
    const dto = parseSchemaDTO(UpdateProductSchema, request.body)

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      const data = await this.useCase.execute(dto)

      return data
        ? this.ok(response)
        : this.fail(response)
      
    } catch (error) {
      return this.fail(response, error)
    }
  }
}

export { UpdateProductController }