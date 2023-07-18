import { client } from '../../../../prisma/client'
import { parseSchema } from '../../../../utils/zod.utils'
import { CreateNewLogisticInfoRequestDTO } from './CreateNewLogisticInfoRequestDTO'
import { CreateNewLogisticInfoSchema } from './CreateNewLogisticInfoSchema'

class CreateNewLogisticInfoUseCase {
  
  async execute(request: CreateNewLogisticInfoRequestDTO) {
    const data = parseSchema(CreateNewLogisticInfoSchema, request)

    const logisticInfo = await client.logisticInfos.create({ data })

    return logisticInfo
  }
}

export { CreateNewLogisticInfoUseCase }