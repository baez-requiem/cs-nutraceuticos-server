import { client } from '../../../../prisma/client'

class GetPaymentTypesUseCase {
  
  async execute() {
    const paymentTypes = await client.paymentType.findMany({
      orderBy: { name: 'asc' }
    })

    console.log('a')

    return paymentTypes
  }
}

export { GetPaymentTypesUseCase }