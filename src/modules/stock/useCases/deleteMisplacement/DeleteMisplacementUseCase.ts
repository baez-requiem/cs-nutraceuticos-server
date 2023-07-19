import { client } from '../../../../prisma/client'

interface IMisplacementRequest {
  id: string
}

class DeleteMisplacementUseCase {
  
  async execute({ id }: IMisplacementRequest) {
    if (!id) {
      throw new Error("Informe o id do lote!")
    }

    await client.misplacementProducts.deleteMany({
      where: { id_misplacement: id }
    })

    await client.misplacement.delete({
      where: { id }
    })

    return { status: true }
  }
}

export { DeleteMisplacementUseCase }