import { GetMonthSalesBySalesTeamUseCase } from "./GetMonthSalesBySalesTeamUseCase"
import { GetMonthSalesBySalesTeamController } from "./GetMonthSalesBySalesTeamController"

const getMonthSalesBySalesTeamUseCase = new GetMonthSalesBySalesTeamUseCase()
const getMonthSalesBySalesTeamController = new GetMonthSalesBySalesTeamController(getMonthSalesBySalesTeamUseCase)

export { getMonthSalesBySalesTeamUseCase, getMonthSalesBySalesTeamController }