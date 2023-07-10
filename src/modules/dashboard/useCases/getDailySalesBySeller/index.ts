import { GetDailySalesBySellerUseCase } from "./GetDailySalesBySellerUseCase"
import { GetDailySalesBySellerController } from "./GetDailySalesBySellerController"

const getDailySalesBySellerUseCase = new GetDailySalesBySellerUseCase()
const getDailySalesBySellerController = new GetDailySalesBySellerController(getDailySalesBySellerUseCase)

export { getDailySalesBySellerUseCase, getDailySalesBySellerController }