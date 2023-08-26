import { GetDistributionCentersUseCase } from "./GetDistributionCentersUseCase"
import { GetDistributionCentersController } from "./GetDistributionCentersController"

const getDistributionCentersUseCase = new GetDistributionCentersUseCase()
const getDistributionCentersController = new GetDistributionCentersController(getDistributionCentersUseCase)

export { getDistributionCentersUseCase, getDistributionCentersController }