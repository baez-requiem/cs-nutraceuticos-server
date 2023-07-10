import { Router } from "express"

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"

import {
  RoleController,
  AuthController,
  StockController,
  MisplacementController,
  SaleController
} from './controllers'
import { dashboardRouter } from "./modules/dashboard/routes"
import { mediasRouter } from "./modules/medias/routes"
import { productsRouter } from "./modules/products/routes"
import { salesTeamsRouter } from "./modules/salesTeams/router"
import { usersRouter } from "./modules/users/routes"

const router = Router()

const authController         = new AuthController()
const roleController         = new RoleController()
const saleController         = new SaleController()
const stockController        = new StockController()
const misplacementController = new MisplacementController()

router.post('/login', authController.authenticateUserHandle)
router.post('/refresh-token', authController.refreshTokenUserHandle)

router.post('/roles', ensureAuthenticated, roleController.createRoleHandle)
router.get('/roles', ensureAuthenticated, roleController.getRolesHandle)

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

router.use('/dashboard', dashboardRouter)
router.use('/medias', mediasRouter)
router.use('/products', productsRouter)
router.use('/sales-team', salesTeamsRouter)
router.use('/users', usersRouter)

export { router }