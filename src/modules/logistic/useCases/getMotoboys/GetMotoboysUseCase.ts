import { client } from '../../../../prisma/client'

class GetMotoboysUseCase {
  
  async execute() {
    const motoboys = await client.motoBoy.findMany({
      orderBy: { name: 'asc' },
      where: { deleted: false }
    })

    return motoboys
  }
}

export { GetMotoboysUseCase }