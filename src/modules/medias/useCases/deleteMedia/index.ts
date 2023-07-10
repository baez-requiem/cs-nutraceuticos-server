import { DeleteMediaUseCase } from "./DeleteMediaUseCase"
import { DeleteMediaController } from "./DeleteMediaController"

const deleteMediaUseCase = new DeleteMediaUseCase()
const deleteMediaController = new DeleteMediaController(deleteMediaUseCase)

export { deleteMediaUseCase, deleteMediaController }