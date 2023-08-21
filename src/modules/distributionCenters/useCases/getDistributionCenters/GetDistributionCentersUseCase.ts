import { client } from '../../../../prisma/client'

class GetDistributionCentersUseCase {
  async execute() {
    const distributionCenters = await client.distributionCenter.findMany({
      include: {
        motoboy: true,
        DistributionCenterSupplyQuantityNotice: true,
        DistributionCenterMovement: true
      },
      where: { deleted: false }
    })

    const mapDistributionCenters = distributionCenters
      .filter(dc => !dc.id_motoboy || !dc.motoboy?.deleted)
      .map(({ DistributionCenterMovement, DistributionCenterSupplyQuantityNotice, ...dc }) => ({
        ...dc,
        movements: DistributionCenterMovement,
        supply_quantity_notice: DistributionCenterSupplyQuantityNotice,
      }))

    return mapDistributionCenters
  }
}

export { GetDistributionCentersUseCase }