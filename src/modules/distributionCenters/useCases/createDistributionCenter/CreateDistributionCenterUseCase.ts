import { client } from '../../../../prisma/client'
import { CreateDistributionCenterRequestDTO } from './CreateDistributionCenterRequestDTO'

class CreateDistributionCenterUseCase {
  async execute(request: CreateDistributionCenterRequestDTO): Promise<boolean> {
    const distributionCenter = await client.distributionCenter.create({
      data: request
    })

    const ok = !!distributionCenter.id

    return ok
  }
}

export { CreateDistributionCenterUseCase }