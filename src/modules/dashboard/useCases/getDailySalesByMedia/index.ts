import { GetDailySalesByMediaUseCase } from "./GetDailySalesByMediaUseCase"
import { GetDailySalesByMediaController } from "./GetDailySalesByMediaController"

const getDailySalesByMediaUseCase = new GetDailySalesByMediaUseCase()
const getDailySalesByMediaController = new GetDailySalesByMediaController(getDailySalesByMediaUseCase)

export { getDailySalesByMediaUseCase, getDailySalesByMediaController }