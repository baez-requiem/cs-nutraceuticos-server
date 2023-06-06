import { Router } from "express"

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

import {
  AuthenticateUserController,
  CreateMediaController,
  CreateProductController,
  CreateUserController,
  DeleteMediaController,
  DeleteProductController,
  GetMediasController,
  GetProductsController,
  RefreshTokenUserController,
  UpdateMediaController,
  UpdateProductController
} from './useCases'

const router = Router()

const createUserController = new CreateUserController()
const authenticateUserController = new AuthenticateUserController()
const refreshTokenUserController = new RefreshTokenUserController()

const createProductController = new CreateProductController()
const getProductsController = new GetProductsController()
const updateProductController = new UpdateProductController()
const deleteProductController = new DeleteProductController()

const createMediaController = new CreateMediaController()
const getMediasController = new GetMediasController()
const updateMediaController = new UpdateMediaController()
const deleteMediaController = new DeleteMediaController()

router.post('/users', createUserController.handle)
router.post('/login', authenticateUserController.handle)
router.post('/refresh-token', refreshTokenUserController.handle)

router.post('/products', ensureAuthenticated, createProductController.handle)
router.get("/products", ensureAuthenticated, getProductsController.handle)
router.put('/products', ensureAuthenticated, updateProductController.handle)
router.delete('/products', ensureAuthenticated, deleteProductController.handle)

router.post('/products', ensureAuthenticated, createProductController.handle)
router.get("/products", ensureAuthenticated, getProductsController.handle)
router.put('/products', ensureAuthenticated, updateProductController.handle)
router.delete('/products', ensureAuthenticated, deleteProductController.handle)

router.post('/medias', ensureAuthenticated, createMediaController.handle)
router.get("/medias", ensureAuthenticated, getMediasController.handle)
router.put('/medias', ensureAuthenticated, updateMediaController.handle)
router.delete('/medias', ensureAuthenticated, deleteMediaController.handle)

export { router }