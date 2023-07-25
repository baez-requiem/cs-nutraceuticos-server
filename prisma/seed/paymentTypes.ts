import { PrismaClient } from "@prisma/client"

export const paymentTypes = [
  { id: 'deposit', name: 'Depósito' },
  { id: 'credit_card', name: 'Cartão Crédito' },
  { id: 'debit_card', name: 'Cartão Débito' },
  { id: 'pix', name: 'Pix' },
  { id: 'cash', name: 'Dinheiro' },
]

export const insertPaymentTypes = async (client: PrismaClient) => {
  for (let paymentType of paymentTypes) {
    await client.paymentType.create({ data: paymentType })
  }
}