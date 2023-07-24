import { Router } from 'express'
import { ensureAuthenticated } from '../../../middlewares/ensureAuthenticated'

import { getSalesTeamController } from '../useCases/getSalesTeam'
import { createSalesTeamController } from '../useCases/createSalesTeam'
import { deleteSalesTeamController } from '../useCases/deleteSalesTeam'
import { updateSalesTeamController } from '../useCases/updateSalesTeam'

const salesTeamsRouter = Router()

salesTeamsRouter.get('', ensureAuthenticated, (req, res) => getSalesTeamController.exec(req, res))
salesTeamsRouter.put('', ensureAuthenticated, (req, res) => updateSalesTeamController.exec(req, res))
salesTeamsRouter.post('', ensureAuthenticated, (req, res) => createSalesTeamController.exec(req, res))
salesTeamsRouter.delete('', ensureAuthenticated, (req, res) => deleteSalesTeamController.exec(req, res))

export { salesTeamsRouter }