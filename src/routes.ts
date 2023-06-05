import { Router } from "express"

import { CreateUserController } from "./useCases/createUser/CreateUserController"
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { RefreshTokenUserController } from "./useCases/refreshTokenUser/RefreshTokenUserController"
import { CreateProductController } from "./useCases/createProduct/CreateProductController"
import { GetProductsController } from "./useCases/getProducts/GetProductsController"

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()
const createProductController = new CreateProductController()
const getProductsController = new GetProductsController()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/refresh-token', refreshTokenUserController.handle)

router.post('/products', ensureAuthenticated, createProductController.handle)
router.get("/products", ensureAuthenticated, getProductsController.handle)


export { router }