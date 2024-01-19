import { GetCurrentLogisticInfoUseCase } from "./GetCurrentLogisticInfoUseCase"
import { GetCurrentLogisticInfoController } from "./GetCurrentLogisticInfoController"

const getCurrentLogisticInfoUseCase = new GetCurrentLogisticInfoUseCase()
const getCurrentLogisticInfoController = new GetCurrentLogisticInfoController(getCurrentLogisticInfoUseCase)

export { getCurrentLogisticInfoUseCase, getCurrentLogisticInfoController }