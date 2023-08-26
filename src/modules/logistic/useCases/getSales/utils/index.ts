import { Prisma } from "@prisma/client"
import { GetSalesRequestDTO } from "../GetSalesRequestDTO"
import { onlyNumbers } from "../../../../../utils/number"

export const salesWhere = (dto: GetSalesRequestDTO) => {
  const where: Prisma.SaleWhereInput = {}
  const whereSaleProducts: Prisma.SaleProductsListRelationFilter = {}
  const whereSalePayments: Prisma.SalePaymentsListRelationFilter = {}

  if (dto.number) {
    where.number = parseInt(dto.number.toString())

    return where
  }

  if (dto.init_date || dto.end_date) {
    where.created_at = {
      gte: dto.init_date || undefined,
      lte: dto.end_date || undefined,
    }
  }

  if (dto.client_name) {
    where.name = {
      mode: 'insensitive',
      contains: dto.client_name
    }
  }

  if (dto.client_phone) {
    where.phone = {
      mode: 'insensitive',
      contains: onlyNumbers(dto.client_phone)
    }
  }

  if (dto.seller) {
    where.id_user = dto.seller
  }

  if (dto.products?.length) {
    whereSaleProducts.some = {
      id_product: { in: dto.products }
    }
  }

  if (dto.payment_type) {
    whereSalePayments.some = {
      id_payment_type: { equals: dto.payment_type }
    }
  }

  where.SaleProducts = whereSaleProducts
  where.SalePayments = whereSalePayments

  return where
}