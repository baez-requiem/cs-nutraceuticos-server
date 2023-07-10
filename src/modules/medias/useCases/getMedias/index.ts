import { GetMediasUseCase } from "./GetMediasUseCase"
import { GetMediasController } from "./GetMediasController"

const getMediasUseCase = new GetMediasUseCase()
const getMediasController = new GetMediasController(getMediasUseCase)

export { getMediasUseCase, getMediasController }