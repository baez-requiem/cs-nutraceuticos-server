import { DeleteSalesTeamUseCase } from "./DeleteSalesTeamUseCase"
import { DeleteSalesTeamController } from "./DeleteSalesTeamController"

const deleteSalesTeamUseCase = new DeleteSalesTeamUseCase()
const deleteSalesTeamController = new DeleteSalesTeamController(deleteSalesTeamUseCase)

export { deleteSalesTeamUseCase, deleteSalesTeamController }