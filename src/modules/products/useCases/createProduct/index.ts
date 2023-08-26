import { client } from "../../../../prisma/client"

import { CreateProductUseCase } from "./CreateProductUseCase"
import { CreateProductController } from "./CreateProductController"

const createProductUseCase = new CreateProductUseCase(client)
const createProductController = new CreateProductController(createProductUseCase)

export { createProductUseCase, createProductController }