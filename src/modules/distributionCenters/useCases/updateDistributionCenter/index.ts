import { UpdateDistributionCenterUseCase } from "./UpdateDistributionCenterUseCase"
import { UpdateDistributionCenterController } from "./UpdateDistributionCenterController"

const updateDistributionCenterUseCase = new UpdateDistributionCenterUseCase()
const updateDistributionCenterController = new UpdateDistributionCenterController(updateDistributionCenterUseCase)

export { updateDistributionCenterUseCase, updateDistributionCenterController }