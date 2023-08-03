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

import { getSellerDashboardController } from '../useCases/getSellerDashboard'

const dashboardRouter = Router()

dashboardRouter.get('/daily-statistics', ensureAuthenticated, (req, res) => getDailyStatisticsController.exec(req, res))
dashboardRouter.get('/month-statistics', ensureAuthenticated, (req, res) => getMonthStatisticsController.exec(req, res))

dashboardRouter.get('/last-sales', ensureAuthenticated, (req, res) => getLastSalesController.exec(req, res))

dashboardRouter.get('/daily-sales-by-seller', ensureAuthenticated, (req, res) => getDailySalesBySellerController.exec(req, res))
dashboardRouter.get('/month-sales-by-seller', ensureAuthenticated, (req, res) => getMonthSalesBySellerController.exec(req, res))

dashboardRouter.get('/daily-sales-by-media', ensureAuthenticated, (req, res) => getDailySalesByMediaController.exec(req, res))
dashboardRouter.get('/month-sales-by-media', ensureAuthenticated, (req, res) => getMonthSalesByMediaController.exec(req, res))

dashboardRouter.get('/daily-sales-by-sales-team', ensureAuthenticated, (req, res) => getDailySalesBySalesTeamController.exec(req, res))
dashboardRouter.get('/month-sales-by-sales-team', ensureAuthenticated, (req, res) => getMonthSalesBySalesTeamController.exec(req, res))

dashboardRouter.get('/month-statistics-resume', ensureAuthenticated, (req, res) => getMonthStatisticsResumeController.exec(req, res))

dashboardRouter.get('/seller-resume', ensureAuthenticated, (req, res) => getSellerDashboardController.exec(req, res))

export { dashboardRouter }