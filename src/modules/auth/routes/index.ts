import { Router } from 'express'

import { matchUserRoleController } from '../useCases/matchUserRole'

const authRouter = Router()

authRouter.post('/match-user-role', (req, res) => matchUserRoleController.execute(req, res))

export { authRouter }