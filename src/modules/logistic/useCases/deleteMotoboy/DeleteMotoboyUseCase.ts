import { client } from '../../../../prisma/client'
import { DeleteMotoboyRequestDTO } from './DeleteMotoboyRequestDTO'

class DeleteMotoboyUseCase {
  
  async execute({ id }: DeleteMotoboyRequestDTO) {    
    const motoBoy = await client.motoBoy.update({
      where: { id },
      data: { deleted: true }
    })
    
    await client.distributionCenter.updateMany({
      where: { id_motoboy: id },
      data: { deleted: true }
    })

    const ok = !!motoBoy.id

    return ok
  }
}

export { DeleteMotoboyUseCase }