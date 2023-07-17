import { UpdateSaleUseCase } from "./UpdateSaleUseCase"
import { UpdateSaleController } from "./UpdateSaleController"

const updateSaleUseCase = new UpdateSaleUseCase()
const updateSaleController = new UpdateSaleController(updateSaleUseCase)

export { updateSaleUseCase, updateSaleController }