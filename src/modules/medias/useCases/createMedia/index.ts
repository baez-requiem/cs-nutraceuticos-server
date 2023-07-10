import { CreateMediaUseCase } from "./CreateMediaUseCase"
import { CreateMediaController } from "./CreateMediaController"

const createMediaUseCase = new CreateMediaUseCase()
const createMediaController = new CreateMediaController(createMediaUseCase)

export { createMediaUseCase, createMediaController }