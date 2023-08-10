import { DeliveryType, LogisticInfos, Media, MotoBoy, PaymentType, Product, Sale, SaleProducts, SaleStatus, User } from "@prisma/client"
import { GetSalesTeamController } from "../../../salesTeams/useCases/getSalesTeam/GetSalesTeamController"

export type GetSalesResponseDTO = (Sale & {
  media: Media
  payment_type: PaymentType
  sales_team: GetSalesTeamController | null
  user: User
  logistic_infos: (LogisticInfos & {
    delivery_type: DeliveryType | null
    motoboy: MotoBoy | null
    user: User
    sale_status: SaleStatus
  })[]
  sale_products: (SaleProducts & {
    product: Product
  })[]
})[]