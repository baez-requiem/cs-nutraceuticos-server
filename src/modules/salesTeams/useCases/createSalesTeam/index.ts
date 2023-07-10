import { CreateSalesTeamUseCase } from "./CreateSalesTeamUseCase"
import { CreateSalesTeamController } from "./CreateSalesTeamController"

const createSalesTeamUseCase = new CreateSalesTeamUseCase()
const createSalesTeamController = new CreateSalesTeamController(createSalesTeamUseCase)

export { createSalesTeamUseCase, createSalesTeamController }