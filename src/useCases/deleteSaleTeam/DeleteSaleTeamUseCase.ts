import { client } from '../../prisma/client'

interface ISaleTeamRequest {
  id: string
}

class DeleteSaleTeamUseCase {
  
  async execute({ id }: ISaleTeamRequest) {
    if (!id) {
      throw new Error("Informe o id do time de vendas!")
    }

    await client.salesTeam.delete({
      where: { id }
    })

    await client.user.updateMany({
      where: { salesTeamId: id },
      data: {
        salesTeamId: null
      }
    })

    return { status: true }
  }
}

export { DeleteSaleTeamUseCase }