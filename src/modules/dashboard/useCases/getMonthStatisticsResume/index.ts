import { GetMonthStatisticsResumeController } from "./GetMonthStatisticsResumeController"
import { GetMonthStatisticsResumeUseCase } from "./GetMonthStatisticsResumeUseCase"

const getMonthStatisticsResumeUseCase = new GetMonthStatisticsResumeUseCase()
const getMonthStatisticsResumeController = new GetMonthStatisticsResumeController(getMonthStatisticsResumeUseCase)

export { getMonthStatisticsResumeUseCase, getMonthStatisticsResumeController }