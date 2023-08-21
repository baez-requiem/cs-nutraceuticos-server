import { GetDistributionCentersStockUseCase } from "./GetDistributionCentersStockUseCase"
import { GetDistributionCentersStockController } from "./GetDistributionCentersStockController"

const getDistributionCentersStockUseCase = new GetDistributionCentersStockUseCase()
const getDistributionCentersStockController = new GetDistributionCentersStockController(getDistributionCentersStockUseCase)

export { getDistributionCentersStockUseCase, getDistributionCentersStockController }