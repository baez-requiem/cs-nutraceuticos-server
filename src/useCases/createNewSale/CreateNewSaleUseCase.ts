import { client } from '../../prisma/client'
import { formatErrorsZod } from '../../utils/zod.utils'
import { CreateNewSaleSchema, CreateNewSaleSchemaType } from './createNewSaleSchema'

interface INewSaleRequest extends CreateNewSaleSchemaType {}

class CreateNewSaleUseCase {

  async execute(data: INewSaleRequest) {
    const validateData = CreateNewSaleSchema.safeParse(data)

    if (!validateData.success) {
      formatErrorsZod(validateData.error)
      return
    }

    const { products , ...validData } = validateData.data

    const sale = await client.sale.create({
      data: validData
    })

    const dataSaleProducts = products.map(sp => ({ ...sp, id_sale: sale.id }))

    const saleProducts = client.saleProducts.createMany({
      data: dataSaleProducts
    })

    return { ...sale, products: saleProducts }
  }
}

export { CreateNewSaleUseCase }