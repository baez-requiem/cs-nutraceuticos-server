import { client } from "../../../../prisma/client"
import { UpdateDistributionCenterRequestDTO } from "./UpdateDistributionCenterRequestDTO"

class UpdateDistributionCenterUseCase {
  async execute({ id, ...request }: UpdateDistributionCenterRequestDTO): Promise<boolean> {
    if (request.name) {
      const distributionCenter = await client.distributionCenter.update({
        where: { id },
        data: { name: request.name }
      })

      if (!distributionCenter?.id) {
        return false
      }
    }

    if (Array.isArray(request.supply_quantity_notice)) {
      await client.distributionCenterSupplyQuantityNotice.deleteMany({ where: { id_distribution_center: id } })

      const dataSupplyQuantityNotice = request.supply_quantity_notice.map(sqn =>({
        ...sqn,
        id_distribution_center: id
      }))

      const distributionCenterSupplyQuantityNotice = await client.distributionCenterSupplyQuantityNotice.createMany({
        data: dataSupplyQuantityNotice
      })

      if (!distributionCenterSupplyQuantityNotice.count) {
        return false
      }
    }

    return true
  }
}

export { UpdateDistributionCenterUseCase }