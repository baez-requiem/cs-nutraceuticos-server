import { client } from '../../../../prisma/client'
import { CreateMisplacementRequestDTO } from './CreateMisplacementRequestDTO'

class CreateMisplacementUseCase {
  
  async execute(request: CreateMisplacementRequestDTO) {

    const misplacement = await client.misplacement.create({
      data: {
        notes: request.notes,
        id_user: request.id_user,
      }
    })

    const dataMisplacementsProducts = request.products.map(mp => ({...mp, id_misplacement: misplacement.id }))

    const misplacementProducts = await client.misplacementProducts.createMany({
      data: dataMisplacementsProducts
    })

    const ok = !!(misplacement && misplacementProducts.count)
    
    return ok
  }
}

export { CreateMisplacementUseCase }