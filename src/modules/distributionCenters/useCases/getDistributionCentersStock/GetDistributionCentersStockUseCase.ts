import { client } from "../../../../prisma/client";

class GetDistributionCentersStockUseCase {
  async execute (){
    const distributionCenters = await client.distributionCenter.findMany({
      where: { deleted: false },
      include: {
        DistributionCenterSupplyQuantityNotice: true,
        DistributionCenterMovement: { include: { DistributionCenterProductsMovement: true } }
      }
    })

    const dbProducts = await client.product.findMany({
      where: { deleted: false },
      select: { id: true, name: true }
    })

    const logisticInfos = await client.logisticInfos.findMany({
      where: {
        current: true,
        id_sale_status: { notIn: ['aguardando-aprovacao', 'retorno'] },
        id_delivery_type: { not: null } },
      include: {
        motoboy: true,
        delivery_type: true,
        sale: { include: { SaleProducts: { include: { product: true } } } }
      }
    })

    const dcMotoboys = distributionCenters
      .filter(dc => dc.id_motoboy)
      .map(({ DistributionCenterSupplyQuantityNotice, DistributionCenterMovement, ...dc }) => {
        const stock: {
          id: string,
          quantity: number,
          name: string,
          supply_quantity_notice?: number | null
        }[] = dbProducts.map(p => ({
          ...p,
          quantity: 0,
        }))

        logisticInfos
          .filter(li => li.id_motoboy === dc.id_motoboy)
          .flatMap(li => li.sale.SaleProducts)
          .forEach(sp => {
            const inArr = stock.find(s => s.id === sp.id_product)

            inArr && (inArr.quantity -= sp.quantity)
          })
        
        DistributionCenterMovement.forEach(dcm => {
          const dcpm = dcm.DistributionCenterProductsMovement.map(dcpm => ({ id: dcpm.id_product, quantity: dcpm.quantity }))

          dcm.operation.includes('OUT')
            ? dcpm.forEach(p => {
              const inArr = stock.find(s => s.id === p.id)

              inArr && (inArr.quantity -= p.quantity)
            })
            : dcpm.forEach(p => {
              const inArr = stock.find(s => s.id === p.id)

              inArr && (inArr.quantity += p.quantity)
            })
        })
      
        DistributionCenterSupplyQuantityNotice.forEach(dcsqn => {
          const inArr = stock.find(s => s.id === dcsqn.id_product)

          inArr && (inArr.supply_quantity_notice = dcsqn.quantity)
        })

        return {
          ...dc,
          type: 'motoboy',
          stock
        }
      })

    const dcMatriz = (() => {
      const { DistributionCenterSupplyQuantityNotice, DistributionCenterMovement, ...dc } = distributionCenters.find(dc => dc.id === 'matriz')!

      const stock: {
        id: string,
        quantity: number,
        name: string,
        supply_quantity_notice?: number | null
      }[] = dbProducts.map(p => ({
        ...p,
        quantity: 0,
      }))

      logisticInfos
        .filter(li => li.id_delivery_type === 'correios')
        .flatMap(li => li.sale.SaleProducts)
        .forEach(sp => {
          const inArr = stock.find(s => s.id === sp.id_product)

          inArr && (inArr.quantity -= sp.quantity)
        })
      
      DistributionCenterMovement.forEach(dcm => {
        const dcpm = dcm.DistributionCenterProductsMovement.map(dcpm => ({ id: dcpm.id_product, quantity: dcpm.quantity }))

        dcm.operation.includes('OUT')
          ? dcpm.forEach(p => {
            const inArr = stock.find(s => s.id === p.id)

            inArr && (inArr.quantity -= p.quantity)
          })
          : dcpm.forEach(p => {
            const inArr = stock.find(s => s.id === p.id)

            inArr && (inArr.quantity += p.quantity)
          })
      })

      DistributionCenterSupplyQuantityNotice.forEach(dcsqn => {
        const inArr = stock.find(s => s.id === dcsqn.id_product)

        inArr && (inArr.supply_quantity_notice = dcsqn.quantity)
      })

      return {
        ...dc,
        type: 'matriz',
        stock
      }
    })()

    const result = [ { ...dcMatriz }, ...dcMotoboys ]

    return result
  }
}

export { GetDistributionCentersStockUseCase }