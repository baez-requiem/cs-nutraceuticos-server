import { Request, Response } from 'express'
import { CreateMisplacementUseCase } from '../useCases/createMisplacement/CreateMisplacementUseCase'
import { GetMisplacementsUseCase } from '../useCases/getMisplacements/GetMisplacementsUseCase'

class MisplacementController {

  async createMisplacementHandle(request: Request, response: Response) {
    const createMisplacementUseCase = new CreateMisplacementUseCase()

    const misplacement = await createMisplacementUseCase.execute(request.body)

    return response.json(misplacement)
  }

  async getMisplacementsHandle(request: Request, response: Response) {
    const getMisplacementsUseCase = new GetMisplacementsUseCase()

    const misplacements = await getMisplacementsUseCase.execute()

    return response.json(misplacements)
  }
}

export { MisplacementController }