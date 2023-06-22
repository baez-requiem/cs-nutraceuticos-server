import { Request, Response } from 'express'

import { CreateMisplacementUseCase } from '../useCases/createMisplacement/CreateMisplacementUseCase'
import { GetMisplacementsUseCase } from '../useCases/getMisplacements/GetMisplacementsUseCase'
import { DeleteMisplacementUseCase } from '../useCases/deleteMisplacement/DeleteMisplacementUseCase'
import { GetUserByAuthProvider } from '../provider/GetUserByTokenProvider'

class MisplacementController {

  async createMisplacementHandle(request: Request, response: Response) {
    const createMisplacementUseCase = new CreateMisplacementUseCase()
    const getTokenSubjectProvider = new GetUserByAuthProvider()

    const authToken = request.headers.authorization!
    const user = await getTokenSubjectProvider.execute(authToken)

    const misplacement = await createMisplacementUseCase.execute({ ...request.body, id_user: user?.id })

    return response.json(misplacement)
  }

  async getMisplacementsHandle(_request: Request, response: Response) {
    const getMisplacementsUseCase = new GetMisplacementsUseCase()

    const misplacements = await getMisplacementsUseCase.execute()

    return response.json(misplacements)
  }

  async deleteMisplacementHandle(request: Request, response: Response) {
    const { id } = request.body

    const deleteMisplacementUseCase = new DeleteMisplacementUseCase()

    const status = await deleteMisplacementUseCase.execute({ id })

    return response.json(status)
  }
}

export { MisplacementController }