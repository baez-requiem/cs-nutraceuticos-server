import { GetStatusUseCase } from "./GetStatusUseCase"
import { GetStatusController } from "./GetStatusController"

const getStatusUseCase = new GetStatusUseCase()
const getStatusController = new GetStatusController(getStatusUseCase)

export { getStatusUseCase, getStatusController }