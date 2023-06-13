import { Request, Response } from 'express'

import { CreateRoleUseCase } from '../useCases/createRole/CreateRoleUseCase'
import { GetRolesUseCase } from '../useCases/getRoles/GetRolesUseCase'

class RoleController {
  async createRoleHandle(request: Request, response: Response) {
    const createRoleUseCase = new CreateRoleUseCase()

    const role = await createRoleUseCase.execute(request.body)

    return response.json(role)
  }

  async getRolesHandle(_request: Request, response: Response) {
    const getRolesUseCase = new GetRolesUseCase()

    const roles = await getRolesUseCase.execute()

    return response.json(roles)
  }
}

export { RoleController }