import { client } from '../../../../prisma/client'

interface IMisplacementRequest {
  id: string
}

class DeleteMisplacementUseCase {
  
  async execute({ id }: IMisplacementRequest) {
    if (!id) {
      throw new Error("Informe o id do lote!")
    }

    const misplacementProducts = await client.misplacementProducts.deleteMany({
      where: { id_misplacement: id }
    })

    const misplacement = await client.misplacement.delete({
      where: { id }
    })

    const ok = !!misplacementProducts.count && !!misplacement.id

    return ok
  }
}

export { DeleteMisplacementUseCase }