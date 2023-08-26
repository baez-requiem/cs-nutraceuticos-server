import { client } from '../../../../prisma/client'
import { updateDistributionCenterUseCase } from '../../../distributionCenters/useCases/updateDistributionCenter'
import { UpdateMotoboyRequestDTO } from './UpdateMotoboyRequestDTO'

class UpdateMotoboyUseCase {

  async execute({ id, ...data }: UpdateMotoboyRequestDTO) {

    const motoBoy = await client.motoBoy.update({
      where: { id },
      data
    })

    if (data.name) {
      const hasDc = await client.distributionCenter.findFirst({
        where: { id_motoboy: id },
      })

      hasDc && await updateDistributionCenterUseCase.execute({ id: hasDc.id, name: data.name })
    }

    const ok = !!motoBoy.id

    return ok
  }
}

export { UpdateMotoboyUseCase }