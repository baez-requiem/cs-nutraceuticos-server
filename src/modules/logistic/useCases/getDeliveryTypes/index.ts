import { GetDeliveryTypesUseCase } from "./GetDeliveryTypesUseCase"
import { GetDeliveryTypesController } from "./GetDeliveryTypesController"

const getDeliveryTypesUseCase = new GetDeliveryTypesUseCase()
const getDeliveryTypesController = new GetDeliveryTypesController(getDeliveryTypesUseCase)

export { getDeliveryTypesUseCase, getDeliveryTypesController }