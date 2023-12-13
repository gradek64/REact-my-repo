import {
  ShipmentType,
  FulfilmentStatus,
  PaymentMethodStatus,
} from '../../../src/types/api';
import { PaymentMethodTitles } from '../../data/Payments/PaymentEnums';
import basketDatasets from '../../data/Shipment/BasketDatasets';
import addressDatasets from '../../data/Address/AddressDatasets';
import userDatasets from '../../data/User/UserDatasets';
import monthlyCareDatasets from '../../data/GetOrder/MonthlyCareDatasets';
import storeDatasets from '../../data/Store/StoreDatasets';
import shipmentCountDatasets from '../../data/GetOrder/ShipmentCountDatasets';
import advicesDatasets from '../../data/GetOrder/AdvicesDatasets';
import datacashErrorDataset from '../../data/Payments/DatacashErrorDataset';
import brandsDataset from '../../data/SnapshotService/BrandsDataset';
import { userSessionManagerResponseData } from '../../data/UserSessionManager/UserSessionManagerResponseData';
import { checkUserAccountServiceResponseData } from '../../data/User/CheckUserAccountService/CheckUserAccountResponseData';
import { createUserAccountServiceResponseData } from '../../data/User/CreateUserAccountService/CreateUserAccountResponseData';
import { CheckoutEndPointsResponseData } from '../../data/CheckoutApi/CheckoutEndPointsResponseData';
import { patchCustomerResponseData } from '../../data/Customer/PatchCustomerResponseData';
import { cancelOrderResponseData } from '../../data/ManageOrder/CancelOrderResponseData';
import { extendOrderResponseData } from '../../data/ManageOrder/ExtendOrderResponseData';
import {
  createFulfilmentResponseData,
  getConsignmentsResponseData,
  getSlotsResponseData,
  createBookingResponseData,
} from '../../data/ArrangeDelivery/Datasets';
import {
  updateBillingAddressResponseData,
  updateContactAddressResponseData,
  updateDeliveryAddressResponseData,
} from '../../data/Address';
import {
  argosCardCreditPlansDatasets,
  creditPlansResponseDatasets,
  monthlyPaymentCreditPlanDatasets,
} from '../../data/CreditPlans/Datasets';
import snapshotServiceDatasets from '../../data/SnapshotService/SnapshotServiceDatasets';
import { receiptsDatasets } from '../../data/OrderRetrieval/ReceiptsDatasets';
import { ShipmentStatusType } from '../../../src/types/api/order';
import { SlotAvailability, DeliverableDays } from '../../../src/types/stubs';

const fs = require('fs');
const handlebars = require('handlebars');
const uuidv4 = require('uuid/v4');
const promotionDatasets = require('../../data/Promotions/Datasets');
const SessionManager = require('../../data/SessionManager');
const addressDatasetResponses = require('../../data/Address');
const fulfilmentDatasets = require('../../data/Confirmation/FulfilmentDatasets');
const shipmentStartTimeDatasets = require('../../data/Confirmation/ShipmentStartTimeDatasets');
const confirmationDatasets = require('../../data/Confirmation/ConfirmationDataset');
const orderRetrievalDatasets = require('../../data/OrderRetrieval/OrderRetrievalDatasets');
const walletDataset = require('../../data/Wallet/WalletDataset');
const { productResponseData } = require('../../data/Products/ProductDatasets');
const paymentsDatasets = require('../../data/Payments');
const customerDataset = require('../../data/SnapshotService/CustomerDataset');

module.exports = {
  path: '/',
  render(req, res) {
    const sessionData = SessionManager.getSession(req);
    const basket = sessionData.basket;
    const user = sessionData.user;
    const store = sessionData.store;
    const paymentMethods = sessionData.paymentMethods;
    const orderPayments = sessionData.orderPayments;
    const snapshotService = sessionData.snapshotService;
    const creditPlans = sessionData.creditPlans;
    const confirmation = sessionData.confirmation;
    const datacashError = sessionData.datacashError;
    const checkoutApi = sessionData.checkoutApi;
    const promotion = sessionData.promotion;
    const wallet = sessionData.wallet;
    const productService = sessionData.productService;
    const allPaymentMethods = paymentMethods.paymentMethods;
    const userSessionManager = sessionData.userSessionManager;
    const nectar = sessionData.nectar;
    const checkUserAccountService = sessionData.checkUserAccountService;
    const createUserAccountService = sessionData.createUserAccountService;
    const patchCustomer = sessionData.patchCustomer;
    const orderRetrieval = sessionData.orderRetrieval;
    const getOrder = sessionData.getOrder;
    const cancelOrder = sessionData.cancelOrder;
    const extendOrder = sessionData.extendOrder;
    const arrangeDelivery = sessionData.arrangeDelivery;

    const userSessionType = req.cookies.session_token || 'none';

    // If current confirmation payment method is not 'AVAILABLE' (due to incompatible stub combinations), change it to first available type
    if (
      allPaymentMethods[getOrder.paymentType].status !==
      PaymentMethodStatus.AVAILABLE
    ) {
      const firstAvailable =
        Object.entries(allPaymentMethods).find(
          ([, { status }]) => status === PaymentMethodStatus.AVAILABLE
        ) || [];
      getOrder.paymentType = firstAvailable.length
        ? firstAvailable[0]
        : getOrder.defaultPaymentType;
    }

    const {
      addAccountAddress: selectedAddAddressResponseType,
      updateAccountAddress: selectedUpdateAddressResponseType,
      getAccountAddresses: selectedGetAddressResponseType,
      updateBillingAddress: selectedUpdateBillingAddressType,
      updateContactAddress: selectedUpdateContactAddressResponseType,
      updateDeliveryAddress: selectedUpdateDeliveryAddressResponseType,
    } = user.addresses.getResponseTypes();

    const billingAddress = user.addresses.getSnapshotBillingAddress();
    const contactAddress = user.addresses.getSnapshotContactAddress();
    const deliveryAddress = user.addresses.getSnapshotDeliveryAddress();

    const data = {
      selectedStore: store.currentStore.id,
      isClickAndCollect: store.isClickAndCollect,
      storeDatasets,
      userDatasets,
      brandsDataset,
      customerDataset,
      user: user.userOptions,
      selectedUser: user.userType,
      basketDatasets,
      datacashErrorDataset,
      showDatacashError: datacashError.showDatacashError,
      selectedBasketType: basket.basketType,
      selectedPromoType: basket.promoType,
      selectedGiftCardType: orderPayments.giftCardType,
      selectedNectarType: orderPayments.nectarType,
      selectedDatacashErrorType: datacashError.type,
      userJson: JSON.stringify(user.toJson(), null, 2),
      paymentMethodJson: JSON.stringify(paymentMethods.toJson(), null, 2),
      orderPaymentsJson: JSON.stringify(
        orderPayments.toJson().payments,
        null,
        2
      ),
      creditPlansJson: JSON.stringify(creditPlans.toJson(), null, 2),
      promotionsInSnapshot: JSON.stringify(basket.promos, null, 2),
      showPaypalError: orderPayments.showPaypalError,

      /* Shipments */
      shipments: basket.toJson().shipments,
      shipmentsJson: JSON.stringify(basket.toJson().shipments, null, 2),
      deliveryShipmentTypes: {
        [ShipmentType.SMALL_ITEM]: 'Small item',
        [ShipmentType.LARGE_ITEM]: 'Large item',
        [ShipmentType.CLOTHING]: 'Clothing',
        [ShipmentType.DIGITAL_DOWNLOAD]: 'Digital download',
        [ShipmentType.WARRANTY]: 'Warranty',
        [ShipmentType.PRE_ORDER]: 'Pre-order',
        [ShipmentType.SUPPLIER_DIRECT_FULFILLED]: 'Supplier Direct Fulfilled',
        [ShipmentType.RECYCLING_SERVICE]: 'Recycling',
      },
      fulfilmentStatus: {
        [FulfilmentStatus.FULFILLED]: 'Fulfilled',
        [FulfilmentStatus.PENDING]: 'Pending',
        [FulfilmentStatus.REJECTED]: 'Rejected',
        [FulfilmentStatus.FAILED]: 'Failed',
      },
      slotAvailability: {
        [SlotAvailability.ALL_AVAILABLE]: 'All slots available',
        [SlotAvailability.PARTIALLY_AVAILABLE]: 'Some slots available',
        [SlotAvailability.NONE_AVAILABLE]: 'No slots available',
      },
      deliverableDays: {
        [DeliverableDays.SEVEN]: '7 days',
        [DeliverableDays.FOURTEEN]: '14 days',
        [DeliverableDays.TWENTY_ONE]: '21 days',
        [DeliverableDays.TWENTY_EIGHT]: '28 days',
        [DeliverableDays.THIRTY_FIVE]: '35 days',
        [DeliverableDays.FORTY_TWO]: '42 days',
        [DeliverableDays.FORTY_NINE]: '49 days',
        [DeliverableDays.FIFTY_SIX]: '56 days',
      },
      /* Payment methods */
      paymentMethods: allPaymentMethods,
      paymentMethodsTitles: PaymentMethodTitles,

      /* Snapshot */
      selectedSnapshotStatus: snapshotService.snapshotStatus.type,
      hasOrderId: !!snapshotService.orderId,
      brandMismatch: snapshotService.brandMismatch,
      selectedSnapshotInitialisation:
        snapshotService.snapshotInitialisation.type,
      selectedSnapshotGet: snapshotService.snapshotGet.type,
      selectedPrepareForCheckoutType: snapshotService.prepareForCheckout.type,
      selectedCalculatePricesType: snapshotService.calculatePrices.type,
      selectedCustomerType: snapshotService.customerType,
      isWcsHandover: snapshotService.isWcsHandover,

      /* Wallet */
      wallet: JSON.stringify(wallet.toJson(), null, 2),
      walletData: walletDataset.walletData,
      walletResponseData: walletDataset.walletResponseData,
      selectedWalletType: wallet.walletType,
      selectedWalletResponseType: wallet.responseType.toString(),

      /* Product Service */
      productResponseData,
      selectedProductResponseType: productService.responseType.toString(),

      /* Checkout API  */
      CheckoutEndPointsResponseData,
      selectedApiErrorResponsesType: checkoutApi.responseType,
      hasTimeZoneIdentifier: checkoutApi.timeZoneIdentifier,

      /* Add payment */
      addPaymentResponseData: paymentsDatasets.addPaymentResponseData,
      selectedAddPaymentResponseType: orderPayments.addPaymentResponseType,

      /* Patch Payment */
      patchPaymentResponseData: paymentsDatasets.patchPaymentResponseData,
      selectedPatchPaymentResponseType: orderPayments.patchPaymentResponseType,

      /* Delete Payment */
      deletePaymentResponseData: paymentsDatasets.deletePaymentResponseData,
      selectedDeletePaymentResponseType:
        orderPayments.deletePaymentResponseType,

      /* Place Order */
      placeOrderResponseData: paymentsDatasets.placeOrderResponseData,
      selectedPlaceOrderResponseType: orderPayments.placeOrderResponseType,
      snapshotServiceDatasets,

      /* Patch Customer */
      patchCustomerResponseData,
      selectedPatchCustomerResponse: patchCustomer.responseType,

      /* Get Order (OCP + Order Retrieval) */
      getOrderJson: JSON.stringify(getOrder.toJson(), null, 2),
      shipmentsCount: basket.isDeliveryFulfilment()
        ? basket.shipments.length
        : getOrder.shipmentsCount,
      selectedShipmentsCount: getOrder.shipmentsCount.toString(),
      shipmentSortByStartTime: getOrder.shipmentSortByStartTime,
      monthlyCareDatasets,
      selectedAvailableMonthlyCare: getOrder.availableMonthlyCare,
      advicesDatasets,
      selectedAdvice: Object.keys(advicesDatasets).find((key) =>
        getOrder.orderAdvice?.find(
          ({ regarding }) => regarding === advicesDatasets[key]?.regarding
        )
      ),
      selectedPaymentType: getOrder.paymentType,
      nectarLinked: getOrder.nectarLinked,
      isEligibleCompanyVoucher: getOrder.eligibleCompanyVoucher,

      /* Get Order (OCP) */
      fulfilmentDatasets,
      shipmentCountDatasets,
      hasMissingStoreInfo: store.hasMissingStoreInfo,
      shipmentStartTimeDatasets,
      selectedFulfilmentSet: confirmation.fulfilmentSet,
      selectedShipmentsStartTime: confirmation.shipmentStartTime,
      confirmationJson: JSON.stringify(confirmation.toJson(), null, 2),
      confirmationDatasets,
      selectedConfirmationType: confirmation.confirmationType,
      shouldDisablePaymentMethod: {
        [PaymentMethodStatus.AVAILABLE]: false,
        [PaymentMethodStatus.TEMPORARILY_DISABLED]: true,
        [PaymentMethodStatus.INCOMPATIBLE]: true,
        [PaymentMethodStatus.OVER_SPEND_LIMIT]: true,
      },

      /* Get Order (Order Retrieval) */
      selectedOrderRetrievalType: orderRetrieval.orderRetrievalType,
      selectedReceiptType: orderRetrieval.receiptType,
      orderRetrievalJson: JSON.stringify(orderRetrieval.toJson(), null, 2),
      orderRetrievalDatasets,
      receiptsDatasets,
      orderRetrievalOrders: orderRetrieval.orders,
      orderRetrievalShipmentStatus: {
        [ShipmentStatusType.READY_TO_COLLECT]: 'Ready to Collect',
        [ShipmentStatusType.CANCELLED]: 'Cancelled',
        [ShipmentStatusType.COLLECTED]: 'Collected',
        [ShipmentStatusType.FAILED]: 'Failed',
        [ShipmentStatusType.IN_PROGRESS]: 'In Progress',
        [ShipmentStatusType.RETURNED]: 'Returned',
        [ShipmentStatusType.UNKNOWN]: 'Unknown',
      },

      /* Cancel Order */
      cancelOrderResponseData,
      selectedCancelOrderResponseType: cancelOrder.responseType,

      /* Extend Order */
      extendOrderResponseData,
      selectedExtendOrderResponseType: extendOrder.responseType,

      /* Promotions */
      promotionDatasets: promotionDatasets.promotionDatasets,
      addPromotionResponseData: promotionDatasets.addPromotionResponseDatasets,
      deletePromotionResponseData:
        promotionDatasets.deletePromotionResponseData,
      selectedAddPromotionResponseType: promotion.addPromotionResponseType,
      selectedDeletePromotionResponseType:
        promotion.deletePromotionResponseType,
      shouldExpireSubsequentPromos: promotion.shouldExpireSubsequentPromos,

      /* CreditPlans */
      monthlyPaymentCreditPlanDatasets,
      argosCardCreditPlansDatasets,
      creditPlansResponseDatasets,
      monthlyPaymentCreditPlanType:
        creditPlans.getMonthlyPaymentCreditPlanType(),
      monthlyPaymentCreditPlanAPR:
        creditPlans.getMonthlyPaymentPlanValues('apr'),
      monthlyPaymentMinDuration:
        creditPlans.getMonthlyPaymentPlanValues('minimumDuration'),
      monthlyPaymentMaxDuration:
        creditPlans.getMonthlyPaymentPlanValues('maximumDuration'),
      argosCardCreditPlanType: creditPlans.getArgosCardCreditPlanType(),
      creditPlansResponseType: creditPlans.getCreditPlansResponseType(),

      /* Addresses */
      addressDatasets,
      selectedAddressType: user.addresses.getAddressType(),
      // Response data
      addAddressResponseData: addressDatasetResponses.addAddressResponseData,
      getAddressResponseData: addressDatasetResponses.getAddressResponseData,
      updateAddressResponseData:
        addressDatasetResponses.updateAddressResponseData,
      updateBillingAddressResponseData,
      updateContactAddressResponseData,
      updateDeliveryAddressResponseData,
      // Response types
      selectedUpdateBillingAddressType,
      selectedAddAddressResponseType,
      selectedGetAddressResponseType,
      selectedUpdateAddressResponseType,
      selectedUpdateContactAddressResponseType,
      selectedUpdateDeliveryAddressResponseType,
      // Other
      checkoutUrlFulfilmentParam: basket.isDeliveryFulfilment()
        ? 'delivery'
        : 'collection',
      isFirstAddressPreferred: user.addresses.isFirstAddressPreferred(),
      isPreferredAddressDisabled:
        user.addresses.getAccountAddresses().length <= 1,
      addressCount: user.addresses.getAccountAddresses().length,
      argosMarketingPreference: user.marketingPreferences.ARGOS,
      habitatMarketingPreference: user.marketingPreferences.HABITAT,
      tuMarketingPreference: user.marketingPreferences.TU,
      marketingPreferenceResponseStatus:
        user.marketingPreferences.responseStatus.toString(),
      marketingPreferenceResponseStatusData: {
        200: { description: '200 - Marketing Preference Retrieved' },
        400: { description: '400 - Bad Request' },
        401: { description: '401 - Authentication Error' },
        404: { description: '404 - User Not Found' },
        500: { description: '500 - Server Error' },
      },
      marketingPreferenceData: {
        null: { description: 'No Marketing Preference Set' },
        Y: { description: 'Hard Opted In to Marketing' },
        LI: { description: 'Soft Opted In to Marketing' },
        N: { description: 'Opted Out to Marketing' },
      },

      userSessionType,
      userSessionManagerResponseData,
      selectedUserSessionManagerResponse: userSessionManager.responseType,

      checkUserAccountServiceResponseData,
      selectedUserAccountServiceResponseData:
        checkUserAccountService.responseType,

      createUserAccountServiceResponseData,
      selectedUserCreateAccountServiceResponseData:
        createUserAccountService.responseType,

      createFulfilmentResponseData,
      selectedCreateFulfilmentResponseData:
        arrangeDelivery.createFulfilmentResponseType,
      getConsignmentsResponseData,
      selectedGetConsignmentsResponseData:
        arrangeDelivery.getConsignmentsResponseType,
      getSlotsResponseData,
      selectedGetSlotsResponseData: arrangeDelivery.getSlotsResponseType,
      createBookingResponseData,
      selectedCreateBookingResponseData:
        arrangeDelivery.createBookingResponseType,

      // Snapshot addresses
      billing: {
        id: billingAddress?.id,
        isUK: billingAddress?.lines.country === 'United Kingdom',
        isSingleCharFirstName: billingAddress?.person.firstName.length === 1,
        contactMismatch:
          contactAddress?.id && billingAddress?.id !== contactAddress.id,
        deliveryMismatch:
          deliveryAddress?.id && billingAddress?.id !== deliveryAddress.id,
      },
      contact: {
        id: contactAddress?.id,
        isUK: contactAddress?.lines.country === 'United Kingdom',
        isSingleCharFirstName: contactAddress?.person.firstName.length === 1,
        billingMismatch:
          billingAddress?.id && contactAddress?.id !== billingAddress.id,
        deliveryMismatch:
          deliveryAddress?.id && contactAddress?.id !== deliveryAddress.id,
      },
      delivery: {
        id: deliveryAddress?.id,
        isSingleCharFirstName: deliveryAddress?.person?.firstName?.length === 1,
        billingMismatch:
          billingAddress?.id && deliveryAddress?.id !== billingAddress.id,
        contactMismatch:
          contactAddress?.id && deliveryAddress?.id !== contactAddress.id,
      },
    };

    fs.readFile(
      './stubs/services/get/controlPanel.hbs',
      'utf-8',
      (error, source) => {
        const template = handlebars.compile(source);

        handlebars.registerHelper('ifvalue', (conditional, options) => {
          if (options.hash.values) {
            const values = options.hash.values.split(',');
            if (values.includes(conditional)) {
              return options.fn(this);
            }
            return options.inverse(this);
          }

          if (options.hash.value === conditional) {
            return options.fn(this);
          }
          return options.inverse(this);
        });

        handlebars.registerHelper(
          'option',
          (value, label, info = '', disabled = false, selectedValue) => {
            const selectedAttr =
              value === selectedValue ? ' selected="selected"' : '';
            const disabledAttr = disabled ? ' disabled' : '';
            return new handlebars.SafeString(
              `<option value="${value}" title="${
                disabled ? 'DISABLED SCENARIO' : ''
              }${info}"${selectedAttr}${disabledAttr}>${label}</option>`
            );
          }
        );

        handlebars.registerHelper('uuid', () => {
          return uuidv4();
        });

        handlebars.registerHelper('capitaliseFirstLetter', (string) => {
          return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
        });

        handlebars.registerHelper('inc', (value) => {
          return value + 1;
        });

        handlebars.registerHelper('times', (n, block) => {
          let accum = '';
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < n; ++i) accum += block.fn(i);
          return accum;
        });

        const html = template(data);
        res.status(200).send(html);
      }
    );
  },
};
