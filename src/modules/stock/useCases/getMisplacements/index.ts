import { GetMisplacementsUseCase } from "./GetMisplacementsUseCase"
import { GetMisplacementsController } from "./GetMisplacementsController"

const getMisplacementsUseCase = new GetMisplacementsUseCase()
const getMisplacementsController = new GetMisplacementsController(getMisplacementsUseCase)

export { getMisplacementsUseCase, getMisplacementsController }