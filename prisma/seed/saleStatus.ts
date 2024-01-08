import { PrismaClient } from "@prisma/client"

export const saleStatus = [
  { id: 'aguardando-aprovacao', status: "Aguardando aprovação", color: 'yellow_600',  order: 1 },
  { id: 'venda-agendada',       status: "Venda agendada",       color: 'yellow_800',  order: 2 },
  { id: 'enviada',              status: "Enviada",              color: 'purple_600',  order: 3 },
  { id: 'entregue',             status: "Entregue",             color: 'teal_500',    order: 4 },
  { id: 'cancelada',            status: "Cancelada",            color: 'red_600',     order: 5 },
  { id: 'retorno',              status: "Retorno",              color: 'orange_500',  order: 6 },
]

export const insertSaleStatus = async (client: PrismaClient) => {
  for (let status of saleStatus) {
    await client.saleStatus.create({ data: status })
  }
}