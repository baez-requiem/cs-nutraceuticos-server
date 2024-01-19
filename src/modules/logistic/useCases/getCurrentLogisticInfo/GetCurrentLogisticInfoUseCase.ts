import { client } from '../../../../prisma/client'
import { GetCurrentLogisticInfoRequestDTO } from './GetCurrentLogisticInfoRequestDTO'

class GetCurrentLogisticInfoUseCase {
  
  async execute({ id_sale }: GetCurrentLogisticInfoRequestDTO) {

    const logisticInfo = await client.logisticInfos.findFirst({
      where: {
        id_sale: id_sale,
        current: true
      }
    })
    
    return logisticInfo
  }
}

export { GetCurrentLogisticInfoUseCase }