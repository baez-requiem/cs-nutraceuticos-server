import { GetMonthStatisticsController } from "./GetMonthStatisticsController"
import { GetMonthStatisticsUseCase } from "./GetMonthStatisticsUseCase"

const getMonthStatisticsUseCase = new GetMonthStatisticsUseCase()
const getMonthStatisticsController = new GetMonthStatisticsController(getMonthStatisticsUseCase)

export { getMonthStatisticsUseCase, getMonthStatisticsController }