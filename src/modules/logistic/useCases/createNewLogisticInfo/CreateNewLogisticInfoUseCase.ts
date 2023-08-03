import { client } from '../../../../prisma/client'
import { CreateNewLogisticInfoRequestDTO } from './CreateNewLogisticInfoRequestDTO'

class CreateNewLogisticInfoUseCase {
  
  async execute(request: CreateNewLogisticInfoRequestDTO) {
    const logisticInfo = await client.logisticInfos.create({ data: request })

    const ok = !!logisticInfo.id

    return ok
  }
}

export { CreateNewLogisticInfoUseCase }