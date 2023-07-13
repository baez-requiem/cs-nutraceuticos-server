import { GetSalesUseCase } from "./GetSalesUseCase"
import { GetSalesController } from "./GetSalesController"

const getSalesUseCase = new GetSalesUseCase()
const getSalesController = new GetSalesController(getSalesUseCase)

export { getSalesUseCase, getSalesController }