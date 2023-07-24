import { Request, Response } from 'express'
import { GetSellerDashboardUseCase } from './GetSellerDashboardUseCase'
import { BaseController } from '../../../../shared/core/BaseController'
import { parseSchemaDTO } from '../../../../utils/zod.utils'
import { GetSellerDashboardSchema } from './GetSellerDashboardSchema'
import { GetUserIdByTokenProvider } from '../../../../provider/GetUserIdByTokenProvider'

class GetSellerDashboardController extends BaseController {
  private useCase: GetSellerDashboardUseCase

  constructor (useCase: GetSellerDashboardUseCase) {
    super()
    this.useCase = useCase
  }

  async execute (request: Request, response: Response) {

    const getUserIdByTokenProvider = new GetUserIdByTokenProvider()

    const authToken = request.headers.authorization!
    const id_user = await getUserIdByTokenProvider.execute(authToken)

    const dto = parseSchemaDTO(GetSellerDashboardSchema, { id_user })

    if ('errors' in dto) {
      return this.clientError(response, dto.errors)
    }

    try {
      
      const data = await this.useCase.execute(dto)
  
      return this.ok(response, data)
    } catch (error) {
      return this.fail(response, error)
    }

  }
}

export { GetSellerDashboardController }