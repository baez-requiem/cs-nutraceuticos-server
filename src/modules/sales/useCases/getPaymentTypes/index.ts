import { GetPaymentTypesUseCase } from "./GetPaymentTypesUseCase"
import { GetPaymentTypesController } from "./GetPaymentTypesController"

const getPaymentTypesUseCase = new GetPaymentTypesUseCase()
const getPaymentTypesController = new GetPaymentTypesController(getPaymentTypesUseCase)

export { getPaymentTypesUseCase, getPaymentTypesController }