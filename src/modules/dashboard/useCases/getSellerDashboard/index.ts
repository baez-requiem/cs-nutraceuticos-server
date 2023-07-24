import { GetSellerDashboardUseCase } from "./GetSellerDashboardUseCase"
import { GetSellerDashboardController } from "./GetSellerDashboardController"

const getSellerDashboardUseCase = new GetSellerDashboardUseCase()
const getSellerDashboardController = new GetSellerDashboardController(getSellerDashboardUseCase)

export { getSellerDashboardUseCase, getSellerDashboardController }