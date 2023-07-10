import { GetDailyStatisticsUseCase } from "./GetDailyStatisticsUseCase"
import { GetDailyStatisticsController } from "./GetDailyStatisticsController"

const getDailyStatisticsUseCase = new GetDailyStatisticsUseCase()
const getDailyStatisticsController = new GetDailyStatisticsController(getDailyStatisticsUseCase)

export { getDailyStatisticsUseCase, getDailyStatisticsController }