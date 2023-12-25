import * as uuid from 'uuid'
import dayjs from 'dayjs'
import {
  SerialisableStubObject,
  BasketStub,
  BasketTotals,
  ShipmentOptions,
  PromoType,
  FulfilmentStub,
  LocationType,
  ConsignmentStub,
} from '../../../src/types/stubs'
import { ShipmentType } from '../../../src/types/api/snapshot'
import Shipment from '../Shipment/Shipment'
import APILogger from '../../helpers/APILogger'
import { fakeAddresses } from '../Address/AddressDatasets'
import {
  SnapshotPromotion,
  PromotionType,
  FulfilmentType,
  SnapshotAmounts,
  SnapshotShipment,
  SnapshotLine,
  SnapshotStockHoldInfo,
  FulfilmentStatus,
  FulfilmentLocationType,
  Fulfilment,
  OrderAddress,
  Shipment as ShipmentProps,
  OrderLine,
  OrderCharge,
  OrderAmounts,
  GuestRetrievalFulfilment,
  ShipmentStatusType,
  OrderRetrievalShipment,
  OrderAdvice,
} from '../../../src/types/api'
import { OrderStatus, Brand } from 'types/reducers'
import { round2Decimals } from '../../helpers'
import { isPhysicalShipmentType } from '../../../src/helpers/orderHelpers'
import { getUTCFormattedDate } from '../../helpers/dateHelper'
import { getCollectionId } from '../OrderRetrieval/OrderRetrieval'
import { OrderAdviceInfo, Store as CurrentStore } from 'types/api/order'

class Basket implements SerialisableStubObject<BasketStub> {
  private _shipments: Shipment[]
  private _totals: BasketTotals
  private _promos: SnapshotPromotion[]
  private _promoType: PromoType

  get promos() {
    return this._promos
  }

  get totals() {
    return this._totals
  }

  get shipments() {
    return this._shipments
  }

  get promoType() {
    return this._promoType
  }

  set promoType(type) {
    this._promoType = type
  }

  constructor() {
    APILogger('API: Creating Basket!')
    this.setDefaults()
    this.addCollectionShipment()
  }

  setDefaults() {
    this._shipments = []

    this._totals = {
      basketSaving: 0,
      basketTotalWithoutSaving: 0,
      outstanding: 0,
    }
    this._promos = []
  }

  reset() {
    this.setDefaults()
    this.addCollectionShipment()
  }

  toJson() {
    return {
      shipments: this._shipments.map((shipment) => shipment.toJson()),
      totals: this._totals,
      promos: this._promos,
      promoType: this._promoType,
    }
  }

  fromJson(json: BasketStub) {
    this._shipments = json.shipments.map((shipmentJson) => {
      const shipment = new Shipment()
      shipment.fromJson(shipmentJson)
      return shipment
    })
    this._totals = json.totals
    this._promos = json.promos
  }

  addCollectionShipment() {
    // remove any existing collection or delivery shipments
    this.setDefaults()

    const shipment = new Shipment(FulfilmentType.COLLECTION)
    this.addShipment(shipment)
  }

  addDeliveryShipment(options: ShipmentOptions = {}, isWcsHandover: boolean) {
    if (
      this.hasCollectionShipment() ||
      (isWcsHandover && this.hasHomeDeliveryShipment()) ||
      (!isWcsHandover && this.hasDeliveryShipment())
    ) {
      this.setDefaults()
    }

    const shipment = new Shipment(isWcsHandover ? FulfilmentType.DELIVERY : FulfilmentType.HD, options)
    this.addShipment(shipment)
  }

  addAllDeliveryShipments(isWcsHandover: boolean) {
    this.setDefaults()

    Object.values(ShipmentType).forEach((shipmentType) => {
      if (shipmentType !== ShipmentType.PREPAY) {
        const shipment = new Shipment(isWcsHandover ? FulfilmentType.DELIVERY : FulfilmentType.HD, { shipmentType })
        this.addShipment(shipment)
      }
    })
  }

  getOrderRetrievalCollectionShipments = (
    shipmentStartTime: 'now' | 'tomorrow' | 'dayAfterTomorrow',
    shipmentsCount: number,
    shipmentSortByStartTime: boolean,
    now: Date,
    timeZoneIdentifier: boolean,
    orderRetrieval: {
      status: ShipmentStatusType
      isAmendable: boolean
      isCancellable: boolean
      extended: boolean
    }[],
  ): OrderRetrievalShipment[] => {
    const orderLines = this.getCollectionOrderLines(shipmentsCount)

    const minutesToAppend =
      {
        now: 0,
        tomorrow: 60 * 24,
        dayAfterTomorrow: 60 * 48,
      }[shipmentStartTime] || 0

    const shipments: OrderRetrievalShipment[] = [...Array<undefined>(shipmentsCount)].map(
      (_shipment, index: number) => {
        const orderRetrievalDetails = orderRetrieval && orderRetrieval[index]
        const startTime =
          orderRetrievalDetails?.status === ShipmentStatusType.READY_TO_COLLECT
            ? dayjs(now).subtract(1, 'day')
            : dayjs(now).add(index, 'day').add(minutesToAppend, 'minute')

        return {
          status: orderRetrievalDetails?.status,
          isAmendable: orderRetrievalDetails?.isAmendable,
          isCancellable: orderRetrievalDetails?.isCancellable,
          collectionId: getCollectionId(index),
          timeWindow: {
            start: getUTCFormattedDate(startTime.toDate(), timeZoneIdentifier),
            end: getUTCFormattedDate(
              startTime.add(orderRetrievalDetails?.extended ? 8 : 1, 'day').toDate(),
              timeZoneIdentifier,
            ),
          },
          orderLines: orderLines[index],
        }
      },
    )

    if (!shipmentSortByStartTime) {
      /* Replicate an API edge case where the shipments are returned in a mixed order. As our stub generates shipments by start time, Array.reverse() is a quick way of putting them out of order so that the UI code can then re-sort it */
      shipments.reverse()
    }

    return shipments
  }

  getOrderConfirmationCollectionShipments = (
    shipmentStartTime: 'now' | 'tomorrow' | 'dayAfterTomorrow',
    shipmentsCount: number,
    confirmationType: string,
    shipmentSortByStartTime: boolean,
    now: Date,
    timeZoneIdentifier: boolean,
  ): ShipmentProps[] => {
    const orderLines = this.getCollectionOrderLines(shipmentsCount)

    const minutesToAppend =
      {
        now: 0,
        tomorrow: 60 * 24,
        dayAfterTomorrow: 60 * 48,
      }[shipmentStartTime] || 0

    const shipments: ShipmentProps[] = [...Array<undefined>(shipmentsCount)].map((_shipment, index: number) => {
      const startTime = dayjs(now).add(index, 'day').add(minutesToAppend, 'minute')

      /**
       * NOTE: The following modifications to the model reflect those made in Check & Reserve
       * FOLLOWUP: Awaiting examples of these confirmation types to verify what modifications (if any) should be made to the model
       */
      const collectionDetails = [
        'OrderPlaced',
        'OrderPartiallyFulfilled',
        'OrderPartiallyPlaced',
        'OrderPartiallyRejected',
      ].includes(confirmationType)
        ? {
            collectionId: String(Math.floor(Math.random() * 100000000)),
            timeWindow: {
              start: getUTCFormattedDate(startTime.toDate(), timeZoneIdentifier),
              end: getUTCFormattedDate(startTime.add(1, 'day').toDate(), timeZoneIdentifier),
            },
          }
        : {}

      return {
        ...collectionDetails,
        orderLines: orderLines[index],
      }
    })

    if (!shipmentSortByStartTime) {
      /* Replicate an API edge case where the shipments are returned in a mixed order. As our stub generates shipments by start time, Array.reverse() is a quick way of putting them out of order so that the UI code can then re-sort it */
      shipments.reverse()
    }

    return shipments
  }

  getCollectionOrderLines = (shipmentsCount: number): OrderLine[][] => {
    /**
     * NOTE: Distribute multiple basket products between shipment(s)
     * basket.products = [item1, item2, item3, item4, item5, item6, item7]
     * shipmentsCount = 2 => shipment1=[item1, item2, item3, item4] shipment2=[item5, item6, item7]
     * shipmentsCount = 3 => shipment1=[item1, item2, item3] shipment2=[item4, item5] shipment3=[item6, item7]
     * shipmentsCount = 4 => shipment1=[item1, item2] shipment2=[item3, item4] shipment3=[item5, item6] shipment4=[item7]
     * shipmentsCount = 5 => shipment1=[item1, item2] shipment2=[item3, item4] shipment3=[item5] shipment4=[item6] shipment5=[item7]
     * shipmentsCount = 6 => shipment1=[item1, item2] shipment2=[item3] shipment3=[item4] shipment4=[item5] shipment5=[item6] shipment6=[item7]
     */

    const products = this.getOrderLines()
    const basketType = this.getShipmentByIndex(0).basketType

    const shouldDistribute =
      (basketType === 'Multiple' || basketType === 'MultipleCare') && products.length >= shipmentsCount
    let orderLines = products

    let remainderCount = products.length % shipmentsCount
    const distributionCount = (products.length - remainderCount) / shipmentsCount
    let startIndex = 0
    let endIndex = 0

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    return [...Array(shipmentsCount)].map(() => {
      if (shouldDistribute) {
        let shareCount = distributionCount

        if (remainderCount) {
          remainderCount -= 1
          shareCount += 1
        }

        endIndex = startIndex + shareCount

        orderLines = products.slice(startIndex, endIndex)

        startIndex += shareCount
      }

      return orderLines
    })
  }

  getDeliveryFulfilments = (
    orderId: string | null,
    timeZoneIdentifier: boolean,
    fulfilmentType: FulfilmentType,
    deliveryAddress?: OrderAddress,
    orderAdviceArray?: OrderAdvice[],
  ): Fulfilment[] => {
    const fulfilments: Fulfilment[] = []
    const deliveryFulfilment = {
      fulfilmentNumber: orderId,
      type: fulfilmentType,
      location: {
        type: FulfilmentLocationType.DELIVERY,
        shipping: deliveryAddress,
      },
      paymentType: 'paid',
      supplier: 'tu_clothing',
      stockHoldId: '',
    }

    if (this.shipments[0].fulfilmentType !== FulfilmentType.DELIVERY) {
      return []
    }

    const isOrderAttributesError =
      Array.isArray(orderAdviceArray) &&
      orderAdviceArray.some(({ regarding }) => regarding === OrderAdviceInfo.ORDER_ATTRIBUTES_ERROR)

    this.shipments.forEach((shipment) => {
      const isSupplierDirectFulfilled = shipment.shipmentType === ShipmentType.SUPPLIER_DIRECT_FULFILLED
      const hasBookingDetails = [
        ShipmentType.CLOTHING,
        ShipmentType.SMALL_ITEM,
        ShipmentType.LARGE_ITEM,
        ShipmentType.SUPPLIER_DIRECT_FULFILLED,
      ].includes(shipment.shipmentType)

      const bookingId = uuid.v4()

      const slot = {
        deliveryTimeWindow: {
          start: getUTCFormattedDate(new Date(shipment.slotStartTime), timeZoneIdentifier),
          end: getUTCFormattedDate(new Date(shipment.slotEndTime), timeZoneIdentifier),
        },
        charges: [{ id: '123445', type: 'STANDARD', amount: shipment.deliveryCharge }],
      }

      const bookingDetails = hasBookingDetails
        ? { bookingId, reservationId: '2002015', slot: isSupplierDirectFulfilled ? null : slot }
        : undefined

      const newFulfilment = {
        ...deliveryFulfilment,
        status: shipment.fulfilmentStatus,
        shipments: [
          {
            bookingId,
            orderLines: shipment.getOrderLines(isOrderAttributesError, shipment.shipmentType),
            shipmentType: isOrderAttributesError ? undefined : shipment.shipmentType,
            instruction: shipment.deliveryInstruction,
            bookingDetails,
          },
        ],
      }
      fulfilments.push(newFulfilment)
    })

    return fulfilments
  }

  getOrderRetrievalDeliveryFulfilments = (
    orderRetrieval: {
      status: ShipmentStatusType
      isAmendable: boolean
      isCancellable: boolean
    }[],
    email: string,
    deliveryAddress?: OrderAddress,
  ): GuestRetrievalFulfilment[] => {
    if (this.shipments[0].fulfilmentType !== FulfilmentType.DELIVERY) {
      return []
    }

    const fulfilments = this.shipments.map((shipment, index) => {
      const orderRetrievalValues = orderRetrieval[index]
      const { status, isCancellable } = orderRetrievalValues
      return {
        type: FulfilmentType.DELIVERY,
        location: {
          type: FulfilmentLocationType.DELIVERY,
          shipping: {
            lines: { postcode: deliveryAddress?.lines.postcode || '' },
            person: { email },
            type: 'ADDRESS_TYPE_DELIVERY',
          },
        },
        shipments: [
          {
            orderLines: shipment.getOrderLines().map((orderLine) => ({
              ...orderLine,
              status,
              isCancellable,
            })),
            ...orderRetrievalValues,
          },
        ],
      }
    })

    return fulfilments
  }

  getOrderRetrievalCollectionFulfilments(
    collectionShipments: OrderRetrievalShipment[],
    currentStore: CurrentStore,
  ): GuestRetrievalFulfilment[] {
    return [
      {
        type: this.getSnapshotFulfilmentType(),
        location: {
          store: currentStore,
          type: FulfilmentLocationType.STORE,
        },
        shipments: collectionShipments,
      },
    ]
  }

  getOrderConfirmationCollectionFulfilments(
    orderId: string | null,
    orderStatus: OrderStatus,
    fulfilmentSet: string,
    collectionShipments: ShipmentProps[],
    currentStore: CurrentStore,
  ): Fulfilment[] {
    const fulfilment: Fulfilment = {
      fulfilmentNumber: orderId,
      status: FulfilmentStatus.FULFILLED,
      type: this.getSnapshotFulfilmentType(),
      location: {
        store: currentStore,
        type: FulfilmentLocationType.STORE,
      },
      paymentType: '',
      supplier: 'argos',
      shipments: collectionShipments,
      stockHoldId: uuid.v4(),
      collectionPin: '8223',
    }

    const fulfilments: Fulfilment[] = []
    if (orderStatus === OrderStatus.ORDER_PLACED) {
      fulfilments.push(fulfilment)
      if (fulfilmentSet === 'fulfilled2Fulfilments') fulfilments.push(fulfilment)
    }

    if (orderStatus === OrderStatus.ORDER_PARTIALLY_PLACED) {
      fulfilments.push(
        {
          ...fulfilment,
          status: FulfilmentStatus.FULFILLED,
        },
        {
          ...fulfilment,
          status:
            fulfilmentSet === 'partiallyPlaced1FulfilledAnd1Rejected'
              ? FulfilmentStatus.REJECTED
              : FulfilmentStatus.FAILED,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          shipments: collectionShipments.map((shipment) => {
            // The API doesn't send these a time or ID if the shipment is not fulfilled
            const { timeWindow, collectionId, ...failedShipment } = shipment
            return failedShipment
          }),
        },
      )
    }

    if (orderStatus === OrderStatus.ORDER_PARTIALLY_FULFILLED) {
      fulfilments.push(
        {
          ...fulfilment,
          status: FulfilmentStatus.FULFILLED,
        },
        {
          ...fulfilment,
          status: FulfilmentStatus.PENDING,
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          shipments: collectionShipments.map((shipment) => {
            // The API doesn't send these a time or ID if the shipment is not fulfilled
            const { timeWindow, collectionId, ...pendingShipment } = shipment
            return pendingShipment
          }),
        },
      )
    }

    if (orderStatus === OrderStatus.ORDER_PENDING) {
      fulfilments.push({
        ...fulfilment,
        status: FulfilmentStatus.PENDING,
      })
      if (fulfilmentSet === 'pending2Fulfilments') {
        fulfilments.push({
          ...fulfilment,
          status: FulfilmentStatus.PENDING,
        })
      }
    }

    if (orderStatus === OrderStatus.ORDER_REJECTED) {
      fulfilments.push({
        ...fulfilment,
        status: FulfilmentStatus.REJECTED,
      })
      if (fulfilmentSet === 'rejected2Rejected' || fulfilmentSet === 'rejected1RejectedAnd1Failed') {
        fulfilments.push({
          ...fulfilment,
          status: fulfilmentSet === 'rejected2Rejected' ? FulfilmentStatus.REJECTED : FulfilmentStatus.FAILED,
        })
      }
    }

    if (orderStatus === OrderStatus.ORDER_FAILED) {
      fulfilments.push({
        ...fulfilment,
        status: FulfilmentStatus.FAILED,
      })
      if (fulfilmentSet === 'failed2Failed' || fulfilmentSet === 'failed1FailedAnd1Rejected') {
        fulfilments.push({
          ...fulfilment,
          status: fulfilmentSet === 'failed2Failed' ? FulfilmentStatus.FAILED : FulfilmentStatus.REJECTED,
        })
      }
    }

    if (orderStatus === OrderStatus.ORDER_EXCEPTION) {
      fulfilments.push({
        ...fulfilment,
        status: FulfilmentStatus.PENDING,
      })
    }

    return fulfilments
  }

  hasPhysicalDeliveryShipment(): boolean {
    return this._shipments.some(
      (shipment) =>
        shipment.fulfilmentType === FulfilmentType.DELIVERY && isPhysicalShipmentType(shipment.shipmentType),
    )
  }

  hasCollectionShipment(): boolean {
    return this._shipments.some((shipment) => shipment.fulfilmentType === FulfilmentType.COLLECTION)
  }

  hasDeliveryShipment(): boolean {
    return this._shipments.some((shipment) => shipment.rawFulfilmentType === FulfilmentType.DELIVERY)
  }

  hasHomeDeliveryShipment(): boolean {
    return this._shipments.some((shipment) => shipment.rawFulfilmentType === FulfilmentType.HD)
  }

  private addShipment(shipment: Shipment) {
    this._shipments.push(shipment)
    this.calculateTotals()
  }

  deleteShipment(shipmentToDelete: Shipment) {
    this._shipments = this._shipments.filter((shipment) => shipment !== shipmentToDelete)

    if (this._shipments.length === 0) {
      this.addCollectionShipment()
    }

    this.calculateTotals()
  }

  getSnapshotFulfilmentType(): FulfilmentType {
    const numberOfEachFulfilmentType = {
      [FulfilmentType.DELIVERY]: 0,
      [FulfilmentType.COLLECTION]: 0,
      [FulfilmentType.HD]: 0,
    }

    this._shipments.forEach((shipment) => {
      numberOfEachFulfilmentType[shipment.rawFulfilmentType] += 1
    })

    if (numberOfEachFulfilmentType.DELIVERY === 0 && numberOfEachFulfilmentType.HD === 0) {
      return FulfilmentType.COLLECTION
    }

    if (numberOfEachFulfilmentType.DELIVERY === 0 && numberOfEachFulfilmentType.COLLECTION === 0) {
      return FulfilmentType.HD
    }

    if (numberOfEachFulfilmentType.COLLECTION === 0 && numberOfEachFulfilmentType.HD === 0) {
      return FulfilmentType.DELIVERY
    }

    return FulfilmentType.MIXED
  }

  isDeliveryFulfilment(): boolean {
    const fulfilmentType = this.getSnapshotFulfilmentType()
    return fulfilmentType === FulfilmentType.DELIVERY || fulfilmentType === FulfilmentType.HD
  }

  calculateTotals() {
    const totals = {
      basketSaving: 0,
      basketTotalWithoutSaving: 0,
      outstanding: 0,
    }
    this._shipments.forEach((shipment) => {
      const lines = shipment.getLines()
      lines.forEach((line) => {
        totals.basketTotalWithoutSaving += line.total.withoutSavings
        totals.basketSaving += line.total.saving
        totals.outstanding += line.total.withSavings
      })
    })

    this._totals = totals
  }

  getShipmentByIndex(shipmentIndex: number): Shipment {
    return this._shipments[shipmentIndex]
  }

  getShipmentById(shipmentId: string): Shipment | undefined {
    return this._shipments.find((shipment) => shipment.shipmentId === shipmentId)
  }

  getOrderStatusFromFulfilmentStatuses(): string {
    const fulfilmentStatuses = this._shipments.map((shipment) => shipment.fulfilmentStatus)

    const hasFulfilledstatus = fulfilmentStatuses.some((status) => status === FulfilmentStatus.FULFILLED)

    const hasPendingStatus = fulfilmentStatuses.some((status) => status === FulfilmentStatus.PENDING)

    const hasRejectedStatus = fulfilmentStatuses.some((status) => status === FulfilmentStatus.REJECTED)

    const hasFailedStatus = fulfilmentStatuses.some((status) => status === FulfilmentStatus.FAILED)

    // This logic derived from /stubs/services/get/modifyStubConfirmation.js
    // As well as gitbook http://sales-order-documentation.service.eu-west-1.dev.deveng.systems/docs/future-devs/mixed-basket/MIXED.BASKET#order-status-workflow
    if (hasFulfilledstatus && !hasPendingStatus && !hasRejectedStatus && !hasFailedStatus) {
      return 'OrderPlaced'
    }
    if (hasFulfilledstatus && !hasPendingStatus && (hasRejectedStatus || hasFailedStatus)) {
      return 'OrderPartiallyPlaced'
    }
    if (hasFulfilledstatus && hasPendingStatus && !hasRejectedStatus && !hasFailedStatus) {
      return 'OrderPartiallyFulfilled'
    }
    if (!hasFulfilledstatus && hasPendingStatus && !hasRejectedStatus && !hasFailedStatus) {
      return 'OrderPending'
    }
    if (!hasFulfilledstatus && !hasPendingStatus && hasRejectedStatus && !hasFailedStatus) {
      return 'OrderRejected'
    }
    if (!hasFulfilledstatus && !hasPendingStatus && !hasRejectedStatus && hasFailedStatus) {
      return 'OrderFailed'
    }
    return 'OrderPlaced'
  }

  getSnapshotShipments(): SnapshotShipment[] {
    return this._shipments.map((shipment) => shipment.getSnapshotShipment())
  }

  getSnapshotLines(): SnapshotLine[] {
    return this._shipments.flatMap((shipment) => shipment.getLines())
  }

  getOrderLines(): OrderLine[] {
    return this._shipments.flatMap((shipment) => shipment.getOrderLines())
  }

  private getDeliveryCharge(): OrderCharge {
    const deliveryCharge: OrderCharge = {
      type: 'SHIPPING',
      total: {
        withSavings: 0,
        withoutSavings: 0,
        saving: 0.0,
      },
    }

    this._shipments.forEach((shipment) => {
      const shipmentDeliveryCharge = shipment.deliveryCharge
      deliveryCharge.total.withSavings += shipmentDeliveryCharge
      deliveryCharge.total.withoutSavings += shipmentDeliveryCharge
    })

    return deliveryCharge
  }

  getSnapshotAmounts(hasBookedSlots = true): SnapshotAmounts {
    const total = {
      withSavings: this._totals.outstanding,
      withoutSavings: this._totals.basketTotalWithoutSaving,
      saving: this._totals.basketSaving,
    }

    if (this.getSnapshotFulfilmentType() === FulfilmentType.COLLECTION) {
      return {
        total,
        outstanding: this._totals.outstanding,
      }
    }

    const subtotalCharge: OrderCharge = {
      type: 'SUBTOTAL',
      total: {
        withSavings: total.withoutSavings,
        withoutSavings: total.withoutSavings,
        saving: 0,
      },
    }

    if (!hasBookedSlots) {
      return { total, breakdown: [subtotalCharge], outstanding: this._totals.outstanding }
    }

    const deliveryCharge = this.getDeliveryCharge()

    return {
      total: {
        withSavings: this._totals.outstanding + deliveryCharge.total.withSavings,
        withoutSavings: this._totals.basketTotalWithoutSaving + deliveryCharge.total.withoutSavings,
        saving: this._totals.basketSaving + deliveryCharge.total.saving,
      },
      breakdown: [subtotalCharge, deliveryCharge],
      outstanding: this._totals.outstanding + deliveryCharge.total.withSavings,
    }
  }

  getOrderAmounts(): OrderAmounts {
    const total = {
      withSavings: this._totals.outstanding,
      withoutSavings: this._totals.basketTotalWithoutSaving,
      saving: this._totals.basketSaving,
    }

    if (this.getSnapshotFulfilmentType() === FulfilmentType.COLLECTION) {
      return {
        total,
      }
    }

    const subtotalCharge: OrderCharge = {
      type: 'SUBTOTAL',
      total: {
        withSavings: total.withoutSavings,
        withoutSavings: total.withoutSavings,
        saving: 0,
      },
    }

    const deliveryCharge = this.getDeliveryCharge()

    return {
      total: {
        withSavings: total.withSavings + deliveryCharge.total.withSavings,
        withoutSavings: total.withoutSavings + deliveryCharge.total.withoutSavings,
        saving: total.saving + deliveryCharge.total.saving,
      },
      breakdown: [subtotalCharge, deliveryCharge],
    }
  }

  /**
   * Picks which promos to return from the snapshot call. When there are 'exclusive' promos it should make other 'normal'
   * promos have amount of 0, but still return them.
   */
  getSnapshotPromotions(): SnapshotPromotion[] {
    const exclusivePromos = this.getExclusivePromos()
    const normalPromos = this.getNormalPromos()

    const specialOfferSavingAmount = this._shipments.reduce((acc, shipment) => acc + shipment.specialOfferSaving, 0)

    const specialOfferSavings: SnapshotPromotion[] =
      specialOfferSavingAmount > 0
        ? [
            {
              type: PromotionType.PROMOTION_TYPE_DISCOUNT,
              reference: 'ConsistentPromotion',
              amount: specialOfferSavingAmount,
              message: 'ConsistentPromotion',
            },
          ]
        : []

    if (exclusivePromos.length > 0) {
      const resetAmountPromos = normalPromos.map((currentPromo): SnapshotPromotion => {
        return { ...currentPromo, amount: 0 }
      })

      return [...exclusivePromos, ...resetAmountPromos, ...specialOfferSavings]
    }

    return [...normalPromos, ...specialOfferSavings]
  }

  getSnapshotStockholds(): SnapshotStockHoldInfo[] | [] {
    const emptyStockHold = [ShipmentType.PRE_ORDER, ShipmentType.RECYCLING_SERVICE, ShipmentType.DIGITAL_DOWNLOAD]

    if (this._shipments.every((shipment) => emptyStockHold.includes(shipment.shipmentType))) return []
    return this._shipments.map((shipment) => shipment.getSnapshotStockhold())
  }

  clearPromos() {
    const nonDiscountPromoTotal = this.promos.reduce((total, { amount }) => total + amount, 0)
    this.updateTotalRemovingSaving(nonDiscountPromoTotal)

    this._promos = []
  }

  addPromo(promo: SnapshotPromotion) {
    if (!this._promos.some((existingPromo) => existingPromo.reference === promo.reference)) {
      this._promos.push(promo)
      this.addPromoAmount(promo)
    }
  }

  /**
   * When there are only promotions left to pay outstanding and outstanding is negative, we need to either recalculate
   * or remove promotions to bring the total to 0
   */
  updatePromoAmount(reference: string) {
    if (this._totals.outstanding > 0) return
    const index = this._promos.findIndex((existingPromo) => existingPromo.reference === reference)
    if (index === -1) return

    const currentOutstanding = Math.abs(this._totals.outstanding)
    const amountDifference = currentOutstanding - this._promos[index].amount
    if (amountDifference <= 0) {
      this._promos[index].amount = Math.abs(amountDifference)
      this.updateTotalRemovingSaving(currentOutstanding)
    } else {
      this.deletePromo(this._promos[index])
    }
  }

  updatePromoTotals() {
    const exclusivePromos = this.getExclusivePromos()
    const normalPromos = this.getNormalPromos()
    if (exclusivePromos.length > 0) {
      exclusivePromos.forEach((promo) => {
        this.updatePromoAmount(promo.reference)
      })
    } else {
      normalPromos.forEach((promo) => {
        this.updatePromoAmount(promo.reference)
      })
    }
  }

  private getExclusivePromos() {
    return this._promos.filter((promo) => promo.reference && promo.reference.toLowerCase().endsWith('exclusive'))
  }

  private getNormalPromos() {
    return this._promos.filter(
      (promo) =>
        promo.type !== PromotionType.PROMOTION_TYPE_DISCOUNT &&
        promo.reference &&
        !promo.reference.toLowerCase().endsWith('exclusive'),
    )
  }

  deletePromo(promo: { reference: string; amount: number }) {
    const exclusivePromos = this.getExclusivePromos()
    const exclusiveIndex = exclusivePromos.findIndex((existingPromo) => existingPromo.reference === promo.reference)
    const index = this._promos.findIndex((existingPromo) => existingPromo.reference === promo.reference)
    if (exclusiveIndex > -1) {
      this._promos.splice(index, 1)
      this.updateTotalRemovingSaving(promo.amount)
      if (exclusivePromos.length === 1) {
        this.calculatePromos()
      }
    } else if (index > -1) {
      this._promos.splice(index, 1)
      if (exclusivePromos.length === 0 && promo.amount) {
        this.updateTotalRemovingSaving(promo.amount)
      }
    }
  }

  private calculatePromos() {
    const exclusivePromos = this.getExclusivePromos()
    if (exclusivePromos.length > 0) {
      exclusivePromos.forEach((promo) => {
        this.updateTotalWithSaving(promo.amount)
      })
    } else {
      this._promos.forEach((promo) => {
        this.updateTotalWithSaving(promo.amount)
      })
    }
  }

  private addPromoAmount(promo: SnapshotPromotion) {
    const exclusivePromos = this.getExclusivePromos()
    const isExclusive = promo.reference && promo.reference.toLowerCase().endsWith('exclusive')
    const shouldUpdateNotExclusive = !isExclusive && exclusivePromos.length === 0
    if (isExclusive || shouldUpdateNotExclusive) {
      if (isExclusive && exclusivePromos.length === 1) {
        this.removeNormalPromosFromTotal()
      }
      this.updateTotalWithSaving(promo.amount)
    }
  }

  getPromoAmount(reference: string) {
    const index = this._promos.findIndex((existingPromo) => existingPromo.reference === reference)
    if (index > -1) {
      if (reference.toLowerCase().endsWith('expired')) {
        this._promos[index].amount = 0
      }
      return this._promos[index].amount
    }
    return null
  }

  private removeNormalPromosFromTotal() {
    const normalPromos = this.getNormalPromos()
    normalPromos.forEach((promo) => {
      this.updateTotalRemovingSaving(promo.amount)
    })
  }

  expireExistingPromos() {
    this._promos.forEach((promo) => {
      if (promo.type === PromotionType.PROMOTION_TYPE_CODE) {
        this.updateTotalRemovingSaving(promo.amount)
        promo.amount = 0
      }
    })
  }

  updateTotalRemovingSaving(amount: number) {
    this._totals.outstanding = round2Decimals(this._totals.outstanding + amount)
  }

  updateTotalWithSaving(amount: number) {
    this._totals.outstanding = round2Decimals(this._totals.outstanding - amount)
  }

  addGiftCardAmount(cardNumber: string) {
    const index = cardNumber.lastIndexOf('0000')
    let amount = Number(cardNumber.slice(cardNumber.length - (cardNumber.length - index)).replace(/^0+/, '')) / 100
    if (amount >= this._totals.outstanding) amount = this._totals.outstanding
    if (amount === 0) amount = 10
    this.updateTotalWithSaving(amount)
    return amount
  }

  isFullyReserved(): boolean {
    const allProducts = this.shipments.flatMap((shipment) => shipment.products)
    return allProducts.every((product) => product.allocated === product.requested)
  }

  createArrangeDeliveryFulfilment(): FulfilmentStub {
    return {
      fulfilmentType: FulfilmentType.DELIVERY,
      fulfilmentId: uuid.v4(),
      stockHoldInformation: {
        stockHolds: this.shipments.flatMap((shipment) => shipment.createStockHolds()),
        fullyReserved: this.isFullyReserved(),
        masterStockHoldId: '98765',
      },
      consignments: this.createConsignments(),
      brand: Brand.ARGOS,
      location: {
        locationType: LocationType.ADDRESS,
        deliveryLocation: fakeAddresses[0].postcode,
      },
    }
  }

  getSlots(consignmentId): ConsignmentStub {
    return {
      ...(this.getConsignment(consignmentId) as ConsignmentStub),
    }
  }

  getConsignment(consignmentId): ConsignmentStub | undefined {
    const shipment = this.shipments.find((_shipment) => {
      return _shipment.shipmentId === consignmentId
    })

    return shipment ? shipment.createConsignment() : undefined
  }

  createConsignments(): ConsignmentStub[] {
    return this.shipments
      .map((shipment) => shipment.createConsignment())
      .filter((consignment) => {
        return consignment.parcelItems.filter((item) => item.quantity > 0).length > 0
      })
  }
}

export default Basket
