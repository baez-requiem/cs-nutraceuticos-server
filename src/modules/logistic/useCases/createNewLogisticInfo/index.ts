import { CreateNewLogisticInfoUseCase } from "./CreateNewLogisticInfoUseCase"
import { CreateNewLogisticInfoController } from "./CreateNewLogisticInfoController"

const createNewLogisticInfoUseCase = new CreateNewLogisticInfoUseCase()
const createNewLogisticInfoController = new CreateNewLogisticInfoController(createNewLogisticInfoUseCase)

export { createNewLogisticInfoUseCase, createNewLogisticInfoController }