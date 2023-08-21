import { CreateDistributionCenterUseCase } from "./CreateDistributionCenterUseCase"
import { CreateDistributionCenterController } from "./CreateDistributionCenterController"

const createDistributionCenterUseCase = new CreateDistributionCenterUseCase()
const createDistributionCenterController = new CreateDistributionCenterController(createDistributionCenterUseCase)

export { createDistributionCenterUseCase, createDistributionCenterController }