import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { CreateProductSchemaType, CreateProductSchema } from './createProductSchema'

interface IProductRequest extends CreateProductSchemaType {}

class CreateProductUseCase {
  
  async execute(data: IProductRequest) {
    const validateData = CreateProductSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const validData = validateData.data
    
    const product = await client.product.create({
      data: validData
    })

    return product
  }
}

export { CreateProductUseCase }