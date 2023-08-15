import { onlyNumbers } from "../../src/utils/number"
import { generateRandomNumber, generateUniqueRandomNumbers, getSalesQuantity } from "./utils"

import { products as mockProducts } from './products'
import { paymentTypes } from './paymentTypes'
import dayjs from "dayjs"
import { PrismaClient } from "@prisma/client"

const generateData = () => {
  const productsQuantity = generateRandomNumber(1, 9)

  const productsIdx = generateUniqueRandomNumbers(1, 9, productsQuantity)

  const products: { id_product: string, quantity: number }[] = []

  productsIdx.forEach(idx => {
    const id_product = 'p' + idx

    products.push({
      id_product,
      quantity: generateRandomNumber(1, 4)
    })
  })

  const productsValues = products.map(p => {

    const product = mockProducts.find(mp => mp.id === p.id_product)!

    const value = product.amount * p.quantity

    return value
  })

  const sales_quantity = getSalesQuantity(productsValues)

  const discounts = (generateRandomNumber(1, 10) >= 5) ? 15 : 30

  const media_id = 'm' + generateRandomNumber(1, 5)
  const id_user = (generateRandomNumber(1, 10) >= 5) ? 'leo' : 'ge'

  let id_sales_team = 'alpha'
  switch (generateRandomNumber(1, 3)) {
    case 1: (id_sales_team = 'beta'); break;
    case 2: (id_sales_team = 'omega'); break;
    case 3: (id_sales_team = 'alpha'); break;
  }

  const paymentsIdx = generateUniqueRandomNumbers(0, 4, 2)

  const payment_types: {
    id_payment_type: string,
    amount: number,
    card_installments?: number | null,
    paid: boolean
  }[] = []

  const totalInProducts = productsValues.reduce((pv, cv) => pv + cv, 0) - discounts
  const partTotal = (totalInProducts / 3)
  const restValue = totalInProducts - partTotal

  paymentsIdx.forEach((idx, i) => {
    const paymentType = paymentTypes[idx]!

    payment_types.push({
      id_payment_type: paymentType.id,
      amount: i ? partTotal : restValue,
      paid: !!i,
      card_installments: paymentType.id === 'credit_card' ? generateRandomNumber(1, 10) : null
    })

  })

  let name = 'Mustang'
  switch (generateRandomNumber(1, 10)) {
    case 1: (name = 'Ametista'); break;
    case 2: (name = 'Moana'); break;
    case 3: (name = 'Cris'); break;
    case 4: (name = 'Polenta'); break;
    case 5: (name = 'Barbie'); break;
    case 6: (name = 'Melissa'); break;
    case 7: (name = 'Rhonda'); break;
    case 8: (name = 'Laurence'); break;
  }

  let phone = '(93) 98244-4926'
  switch (generateRandomNumber(1, 10)) {
    case 1: (phone = '(95) 98635-1793'); break;
    case 2: (phone = '(73) 99519-2800'); break;
    case 3: (phone = '(85) 97174-7806'); break;
    case 4: (phone = '(95) 97432-0937'); break;
    case 5: (phone = '(48) 98362-2397'); break;
    case 6: (phone = '(46) 99244-8043'); break;
    case 7: (phone = '(32) 98636-0115'); break;
    case 8: (phone = '(68) 97313-1717'); break;
  }

  const dataAllAddress = [
    { cep: "12345678", state: "SP", city: "São Paulo", neighborhood: "Centro", address: "Rua A", complement: "Apartment 101" },
    { cep: "98765432", state: "RJ", city: "Rio de Janeiro", neighborhood: "Copacabana", address: "Avenida B", complement: "Floor 5" },
    { cep: "54321876", state: "MG", city: "Belo Horizonte", neighborhood: "Savassi", address: "Rua C", complement: "Suite 202" },
    { cep: "89012345", state: "RS", city: "Porto Alegre", neighborhood: "Moinhos de Vento", address: "Avenida D", complement: "Unit 10" },
    { cep: "23456789", state: "PR", city: "Curitiba", neighborhood: "Batel", address: "Rua E", complement: "Apartment 303" },
    { cep: "76543210", state: "BA", city: "Salvador", neighborhood: "Barra", address: "Avenida F", complement: "House 25" },
    { cep: "67890123", state: "PE", city: "Recife", neighborhood: "Boa Viagem", address: "Rua G", complement: "Flat 8" },
    { cep: "45678901", state: "CE", city: "Fortaleza", neighborhood: "Aldeota", address: "Avenida H", complement: "Penthouse 501" },
  ];

  const dataAddress = dataAllAddress[generateRandomNumber(1, 8)] || dataAllAddress[0]

  return {
    name,
    phone: onlyNumbers(phone),
    id_user,
    id_sales_team,
    discounts,
    sales_quantity,
    products,
    media_id,
    payment_types,
    ...dataAddress
  }
}

const initDate = dayjs().subtract(20, 'day')

const generateSales = Array(40).fill(null).map((_, i) => {
  const created_at = initDate.add(i * 10.5, 'hour').toISOString()

  return {
    created_at,
    ...generateData()
  }
})

export const insertSales = async (client: PrismaClient) => {
  const sales = generateSales

  for (let i = 0; i < sales.length; i++) {
    const { products, payment_types, ...data } = sales[i]

    const sale = await client.sale.create({ data })

    const mapSaleProducts = products.map(sp => {
      const unit_value = mockProducts.find(dbp => dbp.id === sp.id_product)?.amount!
      
      return { ...sp, id_sale: sale.id, unit_value }
    })

    await client.saleProducts.createMany({
      data: mapSaleProducts
    })

    await client.logisticInfos.create({
      data: {
        id_sale: sale.id,
        id_user: data.id_user,
        id_sale_status: 'aguardando-aprovacao'
      }
    })

    const dataPaymentTypes = payment_types.map(pt => ({
      ...pt,
      id_sale: sale.id
    }))

    await client.salePayments.createMany({
      data: dataPaymentTypes
    })
  }

}