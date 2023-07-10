import { UpdateMediaUseCase } from "./UpdateMediaUseCase"
import { UpdateMediaController } from "./UpdateMediaController"

const updateMediaUseCase = new UpdateMediaUseCase()
const updateMediaController = new UpdateMediaController(updateMediaUseCase)

export { updateMediaUseCase, updateMediaController }