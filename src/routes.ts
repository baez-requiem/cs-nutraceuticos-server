import { Router } from "express"

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

import {
  UserController,
  MediaController,
  ProductController,
  RoleController,
  SaleTeamController,
  AuthController,
  StockController,
  MisplacementController,
  SaleController
} from './controllers'

const router = Router()

const authController         = new AuthController()
const userController         = new UserController()
const roleController         = new RoleController()
const saleController         = new SaleController()
const mediaController        = new MediaController()
const stockController        = new StockController()
const productController      = new ProductController()
const saleTeamController     = new SaleTeamController()
const misplacementController = new MisplacementController()

router.post('/login', authController.authenticateUserHandle)
router.post('/refresh-token', authController.refreshTokenUserHandle)

router.post('/users', userController.createUserHandle)
router.get('/users', userController.getUsersHandle)
router.put('/users', userController.updateUserHandle)
router.delete('/users', userController.deleteUserHandle)

router.post('/roles', roleController.createRoleHandle)
router.get('/roles', roleController.getRolesHandle)

router.post('/sales-team', saleTeamController.createSaleTeamHandle)
router.get('/sales-team', saleTeamController.getSalesTeamHandle)
router.put('/sales-team', saleTeamController.updateSaleTeamHandle)
router.delete('/sales-team', saleTeamController.deleteSaleTeamHandle)

router.post('/products', ensureAuthenticated, productController.createProductHandle)
router.get("/products", ensureAuthenticated, productController.getProductsHandle)
router.put('/products', ensureAuthenticated, productController.updateProductHandle)
router.delete('/products', ensureAuthenticated, productController.deleteProductHandle)

router.post('/medias', ensureAuthenticated, mediaController.createMediaHandle)
router.get("/medias", ensureAuthenticated, mediaController.getMediasHandle)
router.put('/medias', ensureAuthenticated, mediaController.updateMediaHandle)
router.delete('/medias', ensureAuthenticated, mediaController.deleteMediaHandle)

router.post('/stock-new-batch', ensureAuthenticated, stockController.createNewBatchHandle)
router.get('/stock-products', ensureAuthenticated, stockController.getStockProductsHandle)

router.get('/batches', ensureAuthenticated, stockController.getBatchesHandle)
router.put('/batches', ensureAuthenticated, stockController.updateBatchHandle)
router.delete('/batches', ensureAuthenticated, stockController.deleteBatchHandle)

router.get('/misplacements', ensureAuthenticated, misplacementController.getMisplacementsHandle)
router.post('/misplacements', ensureAuthenticated, misplacementController.createMisplacementHandle)

router.get('/payment-types', ensureAuthenticated, saleController.getPaymentsTypesHandle)

router.post('/sales', ensureAuthenticated, saleController.newSaleHandle)

export { router }