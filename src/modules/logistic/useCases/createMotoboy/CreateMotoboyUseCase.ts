import { client } from '../../../../prisma/client'
import { CreateMotoboyRequestDTO } from './CreateMotoboyRequestDTO'

class CreateMotoboyUseCase {
  
  async execute(request: CreateMotoboyRequestDTO) {

    const motoBoy = await client.motoBoy.create({ data: request })

    const ok = !!motoBoy.id

    return ok
  }
}

export { CreateMotoboyUseCase }