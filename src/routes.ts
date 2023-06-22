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

router.post('/users', ensureAuthenticated, userController.createUserHandle)
router.get('/users', ensureAuthenticated, userController.getUsersHandle)
router.put('/users', ensureAuthenticated, userController.updateUserHandle)
router.delete('/users', ensureAuthenticated, userController.deleteUserHandle)

router.post('/roles', ensureAuthenticated, roleController.createRoleHandle)
router.get('/roles', ensureAuthenticated, roleController.getRolesHandle)

router.post('/sales-team', ensureAuthenticated, saleTeamController.createSaleTeamHandle)
router.get('/sales-team', ensureAuthenticated, saleTeamController.getSalesTeamHandle)
router.put('/sales-team', ensureAuthenticated, saleTeamController.updateSaleTeamHandle)
router.delete('/sales-team', ensureAuthenticated, saleTeamController.deleteSaleTeamHandle)

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
router.delete('/misplacements', ensureAuthenticated, misplacementController.deleteMisplacementHandle)

router.get('/payment-types', ensureAuthenticated, saleController.getPaymentsTypesHandle)

router.post('/sales', ensureAuthenticated, saleController.newSaleHandle)

export { router }