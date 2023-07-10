import { GetSalesTeamUseCase } from "./GetSalesTeamUseCase"
import { GetSalesTeamController } from "./GetSalesTeamController"

const getSalesTeamUseCase = new GetSalesTeamUseCase()
const getSalesTeamController = new GetSalesTeamController(getSalesTeamUseCase)

export { getSalesTeamUseCase, getSalesTeamController }