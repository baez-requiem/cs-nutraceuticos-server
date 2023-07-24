import { client } from '../../../../prisma/client'
import { DeleteMotoboyRequestDTO } from './DeleteMotoboyRequestDTO'

class DeleteMotoboyUseCase {
  
  async execute({ id }: DeleteMotoboyRequestDTO) {    
    const motoBoy = await client.motoBoy.delete({
      where: { id }
    })

    const ok = !!motoBoy.id

    return ok
  }
}

export { DeleteMotoboyUseCase }