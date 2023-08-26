import { client } from '../../../../prisma/client'
import { CreateNewLogisticInfoRequestDTO } from './CreateNewLogisticInfoRequestDTO'

class CreateNewLogisticInfoUseCase {
  
  async execute(request: CreateNewLogisticInfoRequestDTO) {

    await client.logisticInfos.updateMany({
      where: { id_sale: request.id_sale },
      data: { current: false }
    })

    const logisticInfo = await client.logisticInfos.create({ data: request })

    const ok = !!logisticInfo.id

    return ok
  }
}

export { CreateNewLogisticInfoUseCase }