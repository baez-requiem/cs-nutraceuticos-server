import { Router } from "express"

import { dashboardRouter } from "./modules/dashboard/routes"
import { mediasRouter } from "./modules/medias/routes"
import { productsRouter } from "./modules/products/routes"
import { salesTeamsRouter } from "./modules/salesTeams/router"
import { usersRouter } from "./modules/users/routes"
import { salesRouter } from "./modules/sales/routes"
import { logisticRouter } from "./modules/logistic/routes"
import { authRouter } from "./modules/auth/routes"
import { stockRouter } from "./modules/stock/routes"

const router = Router()

router.use('/dashboard', dashboardRouter)
router.use('/medias', mediasRouter)
router.use('/products', productsRouter)
router.use('/sales-team', salesTeamsRouter)
router.use('/users', usersRouter)
router.use('/sales', salesRouter)
router.use('/logistic', logisticRouter)
router.use('/auth', authRouter)
router.use('/stock', stockRouter)

export { router }