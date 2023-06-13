import { Request, Response } from 'express'

import { CreateSaleTeamUseCase } from '../useCases/createSalesTeam/CreateSaleTeamUseCase'
import { DeleteSaleTeamUseCase } from '../useCases/deleteSaleTeam/DeleteSaleTeamUseCase'
import { GetSalesTeamUseCase } from '../useCases/getSalesTeam/GetSalesTeamUseCase'
import { UpdateSaleTeamUseCase } from '../useCases/updateSalesTeam/UpdateSaleTeamUseCase'

class SaleTeamController {

  async createSaleTeamHandle(request: Request, response: Response) {
    const createSaleTeamUseCase = new CreateSaleTeamUseCase()

    const saleTeam = await createSaleTeamUseCase.execute(request.body)

    return response.json(saleTeam)
  }
  
  async updateSaleTeamHandle(request: Request, response: Response) {
    const updateSaleTeamUseCase = new UpdateSaleTeamUseCase()

    const saleTeam = await updateSaleTeamUseCase.execute(request.body)

    return response.json(saleTeam)
  }

  async deleteSaleTeamHandle(request: Request, response: Response) {
    const { id } = request.body

    const deleteSaleTeamUseCase = new DeleteSaleTeamUseCase()

    const status = await deleteSaleTeamUseCase.execute({ id })

    return response.json(status)
  }

  async getSalesTeamHandle(_request: Request, response: Response) {
    const getSalesTeamUseCase = new GetSalesTeamUseCase()

    const salesTeam = await getSalesTeamUseCase.execute()

    return response.json(salesTeam)
  }
}


export { SaleTeamController }