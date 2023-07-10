import { GetMonthSalesByMediaUseCase } from "./GetMonthSalesByMediaUseCase"
import { GetMonthSalesByMediaController } from "./GetMonthSalesByMediaController"

const getMonthSalesByMediaUseCase = new GetMonthSalesByMediaUseCase()
const getMonthSalesByMediaController = new GetMonthSalesByMediaController(getMonthSalesByMediaUseCase)

export { getMonthSalesByMediaUseCase, getMonthSalesByMediaController }