import { GetLastSalesUseCase } from "./GetLastSalesUseCase"
import { GetLastSalesController } from "./GetLastSalesController"

const getLastSalesUseCase = new GetLastSalesUseCase()
const getLastSalesController = new GetLastSalesController(getLastSalesUseCase)

export { getLastSalesUseCase, getLastSalesController }