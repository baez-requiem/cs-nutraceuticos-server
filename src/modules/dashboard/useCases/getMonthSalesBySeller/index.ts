import { GetMonthSalesBySellerUseCase } from "./GetMonthSalesBySellerUseCase"
import { GetMonthSalesBySellerController } from "./GetMonthSalesBySellerController"

const getMonthSalesBySellerUseCase = new GetMonthSalesBySellerUseCase()
const getMonthSalesBySellerController = new GetMonthSalesBySellerController(getMonthSalesBySellerUseCase)

export { getMonthSalesBySellerUseCase, getMonthSalesBySellerController }