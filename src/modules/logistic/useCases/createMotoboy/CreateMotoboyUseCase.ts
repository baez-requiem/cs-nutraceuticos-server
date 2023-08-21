import { client } from '../../../../prisma/client'
import { createDistributionCenterUseCase } from '../../../distributionCenters/useCases/createDistributionCenter'
import { CreateMotoboyRequestDTO } from './CreateMotoboyRequestDTO'

class CreateMotoboyUseCase {
  
  async execute(request: CreateMotoboyRequestDTO) {

    const motoBoy = await client.motoBoy.create({ data: request })

    const hascreateDistributionCenter = await createDistributionCenterUseCase.execute({
      name: motoBoy.name.includes("CD") ? motoBoy.name : (motoBoy.name + " CD"),
      id_motoboy: motoBoy.id
    })

    const ok = (!!motoBoy.id && hascreateDistributionCenter)

    return ok
  }
}

export { CreateMotoboyUseCase }