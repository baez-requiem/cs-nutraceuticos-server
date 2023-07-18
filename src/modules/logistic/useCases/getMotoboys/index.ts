import { GetMotoboysUseCase } from "./GetMotoboysUseCase"
import { GetMotoboysController } from "./GetMotoboysController"

const getMotoboysUseCase = new GetMotoboysUseCase()
const getMotoboysController = new GetMotoboysController(getMotoboysUseCase)

export { getMotoboysUseCase, getMotoboysController }