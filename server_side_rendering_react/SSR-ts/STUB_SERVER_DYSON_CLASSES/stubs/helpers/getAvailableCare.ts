import * as uuid from 'uuid'
import {
  Shipment as ShipmentProps,
  OrderLine,
  Fulfilment,
  ShipmentType,
  OrderConfirmationShipment,
} from '../../src/types/api'
import { AvailableCare } from 'types/reducers'

export const getAvailableCare = (shipments: ShipmentProps[], availableMonthlyCare: string): AvailableCare[] => {
  const availableCare: AvailableCare[] = []

  if (availableMonthlyCare === 'noQualifyingMonthlyCareItem' || shipments.length === 0) {
    return availableCare
  }

  if (availableMonthlyCare === 'singleProductSingleQuantity') {
    // attach monthly care to the first product that isn't term care
    shipments.forEach(({ orderLines }: { orderLines: OrderLine[] }) =>
      orderLines.find(({ product }) => {
        if (product.attribute === 'PRODUCT_CARE') return false

        availableCare.push({
          productSku: product.id,
          warranties: [
            {
              sku: '1',
              type: 'monthly_care',
              price: 2.99,
              currency: 'GBP',
            },
          ],
        })
        return true
      }),
    )

    return availableCare
  }

  // attach monthly care every product that isn't term care
  shipments.forEach(({ orderLines }) =>
    orderLines.forEach(({ product }) => {
      if (product.attribute === 'PRODUCT_CARE') return

      availableCare.push({
        productSku: product.id,
        warranties: [
          {
            sku: uuid.v4(),
            type: 'monthly_care',
            price: 2.99,
            currency: 'GBP',
          },
        ],
      })
    }),
  )

  return availableCare
}

export const getAvailableCareForDelivery = (
  fulfilments: Fulfilment[],
  availableMonthlyCare: string,
): AvailableCare[] => {
  const availableCare: AvailableCare[] = []

  fulfilments.forEach((fulfilment) => {
    const shipmentType = (fulfilment.shipments[0] as OrderConfirmationShipment).shipmentType
    if (
      shipmentType &&
      ![ShipmentType.CLOTHING, ShipmentType.WARRANTY, ShipmentType.DIGITAL_DOWNLOAD].includes(shipmentType)
    ) {
      availableCare.push(...getAvailableCare(fulfilment.shipments, availableMonthlyCare))
    }
  })
  return availableCare
}
