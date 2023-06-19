import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { CreateMisplacementSchema, CreateMisplacementSchemaType } from './createMisplacementSchema'

interface IMisplacementRequest extends CreateMisplacementSchemaType {}

class CreateMisplacementUseCase {
  
  async execute(data: IMisplacementRequest) {
    const validateData = CreateMisplacementSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const validData = validateData.data

    const misplacement = await client.misplacement.create({
      data: {
        notes: validData.notes,
      }
    })

    const dataMisplacementsProducts = validData.products.map(mp => ({...mp, id_misplacement: misplacement.id }))

    const misplacementProducts = await client.misplacementProducts.createMany({
      data: dataMisplacementsProducts
    })
    
    return {...misplacement, products: misplacementProducts }
  }
}

export { CreateMisplacementUseCase }