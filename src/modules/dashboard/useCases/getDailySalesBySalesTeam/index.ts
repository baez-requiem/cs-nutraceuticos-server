import { GetDailySalesBySalesTeamUseCase } from "./GetDailySalesBySalesTeamUseCase"
import { GetDailySalesBySalesTeamController } from "./GetDailySalesBySalesTeamController"

const getDailySalesBySalesTeamUseCase = new GetDailySalesBySalesTeamUseCase()
const getDailySalesBySalesTeamController = new GetDailySalesBySalesTeamController(getDailySalesBySalesTeamUseCase)

export { getDailySalesBySalesTeamUseCase, getDailySalesBySalesTeamController }