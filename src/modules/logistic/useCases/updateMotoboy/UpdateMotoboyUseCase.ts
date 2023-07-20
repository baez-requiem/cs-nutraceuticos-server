import { client } from '../../../../prisma/client'
import { UpdateMotoboyRequestDTO } from './UpdateMotoboyRequestDTO'

class UpdateMotoboyUseCase {
  
  async execute({ id, ...data }: UpdateMotoboyRequestDTO) {

    const motoBoy = await client.motoBoy.update({ 
      where: { id },
      data
     })

    const ok = !!motoBoy.id

    return ok
  }
}

export { UpdateMotoboyUseCase }