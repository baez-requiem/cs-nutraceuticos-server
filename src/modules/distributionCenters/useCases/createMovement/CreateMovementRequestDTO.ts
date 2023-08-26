export type CreateMovementRequestDTO = {
  id_distribution_center: string
  id_distribution_center_rel?: string
  operation: 'IN' | 'OUT' | 'TRANSFER_IN' | 'TRANSFER_OUT'
  products: {
    id: string
    quantity: number
  }[]
}