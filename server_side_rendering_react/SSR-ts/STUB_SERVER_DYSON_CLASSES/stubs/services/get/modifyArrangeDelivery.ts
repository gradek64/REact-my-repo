import { Response } from 'express'
import SessionManager from '../../data/SessionManager'
import {
  createFulfilmentResponseData,
  getConsignmentsResponseData,
  getSlotsResponseData,
  createBookingResponseData,
} from '../../data/ArrangeDelivery/Datasets'
import { RequestWithSession } from 'types/stubs/session'
import { ModifyArrangeDeliveryType } from 'types/stubs'

type Queries =
  | { type: ModifyArrangeDeliveryType.createFulfilment; value: keyof typeof createFulfilmentResponseData }
  | { type: ModifyArrangeDeliveryType.getConsignments; value: keyof typeof getConsignmentsResponseData }
  | { type: ModifyArrangeDeliveryType.getSlots; value: keyof typeof getSlotsResponseData }
  | { type: ModifyArrangeDeliveryType.createBooking; value: keyof typeof createBookingResponseData }

const modifyArrangeDeliveryService = {
  path: '/payment-stub/arrange-delivery',
  method: 'GET',
  delay: 0,
  cache: false,
  render: (req: RequestWithSession & { query: Queries }, res: Response) => {
    const { type, value } = req.query

    const sessionData = SessionManager.getSession(req)
    const { arrangeDelivery } = sessionData

    if (type === ModifyArrangeDeliveryType.createFulfilment) {
      const updatedResponse = createFulfilmentResponseData[value]

      if (updatedResponse) {
        arrangeDelivery.updateCreateFulfilmentResponse(updatedResponse.response)
        console.log(`API: Set create fulfilment service response - ${updatedResponse.description}`)
      }
    }

    if (type === ModifyArrangeDeliveryType.getConsignments) {
      const updatedResponse = getConsignmentsResponseData[value]

      if (updatedResponse) {
        arrangeDelivery.updateGetConsignmentsResponse(updatedResponse.response)
        console.log(`API: Set get consignments service response - ${updatedResponse.description}`)
      }
    }

    if (type === ModifyArrangeDeliveryType.getSlots) {
      const updatedResponse = getSlotsResponseData[value]

      if (updatedResponse) {
        arrangeDelivery.updateGetSlotsResponse(updatedResponse.response)
        console.log(`API: Set get slots service response - ${updatedResponse.description}`)
      }
    }

    if (type === ModifyArrangeDeliveryType.createBooking) {
      const updatedResponse = createBookingResponseData[value]

      if (updatedResponse) {
        arrangeDelivery.updateCreateBookingResponse(updatedResponse.response)
        console.log(`API: Set create booking response - ${updatedResponse.description}`)
      }
    }

    SessionManager.saveSession(sessionData, req)
    res.header('cache-control', 'no-cache, max-age=0, must-revalidate, no-store')
    res.send(arrangeDelivery.toJson())
  },
}

module.exports = modifyArrangeDeliveryService
