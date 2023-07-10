import { UpdateSalesTeamUseCase } from "./UpdateSalesTeamUseCase"
import { UpdateSalesTeamController } from "./UpdateSalesTeamController"

const updateSalesTeamUseCase = new UpdateSalesTeamUseCase()
const updateSalesTeamController = new UpdateSalesTeamController(updateSalesTeamUseCase)

export { updateSalesTeamUseCase, updateSalesTeamController }