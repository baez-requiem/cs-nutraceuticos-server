import { Router } from 'express'

import { authenticateUserRoleController } from '../useCases/authenticateUser'
import { refreshTokenUserController } from '../useCases/refreshTokenUser'
import { matchUserRoleController } from '../useCases/matchUserRole'

const authRouter = Router()

authRouter.post('/login', (req, res) => authenticateUserRoleController.exec(req, res))
authRouter.post('/refresh-token', (req, res) => refreshTokenUserController.exec(req, res))

authRouter.post('/match-user-role', (req, res) => matchUserRoleController.exec(req, res))

export { authRouter }