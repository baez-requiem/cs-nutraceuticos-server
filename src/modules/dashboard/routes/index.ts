import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getDailyStatisticsController } from '../useCases/getDailyStatistics'
import { getMonthStatisticsController } from '../useCases/getMonthStatistics'

import { getLastSalesController } from '../useCases/getLastSales'

import { getDailySalesBySellerController } from '../useCases/getDailySalesBySeller'
import { getMonthSalesBySellerController } from '../useCases/getMonthSalesBySeller'

import { getDailySalesByMediaController } from '../useCases/getDailySalesByMedia'
import { getMonthSalesByMediaController } from '../useCases/getMonthSalesByMedia'

import { getDailySalesBySalesTeamController } from '../useCases/getDailySalesBySalesTeam'
import { getMonthSalesBySalesTeamController } from '../useCases/getMonthSalesBySalesTeam'

import { getMonthStatisticsResumeController } from '../useCases/getMonthStatisticsResume'

const dashboardRouter = Router()

dashboardRouter.get('/daily-statistics', ensureAuthenticated, (req, res) => getDailyStatisticsController.execute(req, res))
dashboardRouter.get('/month-statistics', ensureAuthenticated, (req, res) => getMonthStatisticsController.execute(req, res))

dashboardRouter.get('/last-sales', ensureAuthenticated, (req, res) => getLastSalesController.execute(req, res))

dashboardRouter.get('/daily-sales-by-seller', ensureAuthenticated, (req, res) => getDailySalesBySellerController.execute(req, res))
dashboardRouter.get('/month-sales-by-seller', ensureAuthenticated, (req, res) => getMonthSalesBySellerController.execute(req, res))

dashboardRouter.get('/daily-sales-by-media', ensureAuthenticated, (req, res) => getDailySalesByMediaController.execute(req, res))
dashboardRouter.get('/month-sales-by-media', ensureAuthenticated, (req, res) => getMonthSalesByMediaController.execute(req, res))

dashboardRouter.get('/daily-sales-by-sales-team', ensureAuthenticated, (req, res) => getDailySalesBySalesTeamController.execute(req, res))
dashboardRouter.get('/month-sales-by-sales-team', ensureAuthenticated, (req, res) => getMonthSalesBySalesTeamController.execute(req, res))

dashboardRouter.get('/month-statistics-resume', ensureAuthenticated, (req, res) => getMonthStatisticsResumeController.execute(req, res))

export { dashboardRouter }