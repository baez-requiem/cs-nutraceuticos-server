import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { UpdateProductSchemaType, UpdateProductSchema } from './updateProductSchema'

interface IProductRequest extends UpdateProductSchemaType {
  id: string
}

class UpdateProductUseCase {
  
  async execute({ id, ...data }: IProductRequest) {
    const validateData = UpdateProductSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const validData = validateData.data

    const product = await client.product.update({
      where: { id },
      data: {
        ...validData,
        updated_at: new Date()
      }
    })

    return product
  }
}

export { UpdateProductUseCase }