import { promotionDatasets } from '../../data/Promotions/Datasets/PromotionDatasets';
import {
  addPaymentResponseData,
  patchPaymentResponseData,
  deletePaymentResponseData,
  placeOrderResponseData,
} from '../../data/Payments';

const SessionManager = require('../../data/SessionManager');
const snapshotServiceDatasets =
  require('../../data/SnapshotService/SnapshotServiceDatasets').default;

const { PaymentMethod } = require('../../../src/types/api');

const modifyStubPaymentMethod = {
  path: '/payment-stub/payments',
  method: 'GET',
  delay: 100,
  cache: false,
  template(req) {
    const query = req.query;
    const { value } = query;
    const sessionData = SessionManager.getSession(req);
    const { orderPayments, nectar, paymentMethods, basket, snapshotService } =
      sessionData;

    // Handle add payment responses
    if (query.type === 'addPaymentResponseData') {
      if (addPaymentResponseData[value]) {
        orderPayments.updateAddPaymentResponse(addPaymentResponseData[value]);
        console.log(
          `API: Setup Add payment response as - ${addPaymentResponseData[value].description}`
        );
      } else {
        return { error: 'Add Payment response dataset not found' };
      }
    }

    // Handle patch payment responses
    if (query.type === 'patchPaymentResponseData') {
      if (patchPaymentResponseData[value]) {
        orderPayments.updatePatchPaymentResponse(
          patchPaymentResponseData[value]
        );
        console.log(
          `API: Setup Patch payment response as - ${patchPaymentResponseData[value].description}`
        );
      } else {
        return { error: 'Patch Payment response dataset not found' };
      }
    }

    // Handle delete payment responses
    if (query.type === 'deletePaymentResponseData') {
      if (deletePaymentResponseData[value]) {
        orderPayments.updateDeletePaymentResponse(
          deletePaymentResponseData[value]
        );
        console.log(
          `API: Setup Delete payment response as - ${deletePaymentResponseData[value].description}`
        );
      } else {
        return { error: 'Delete Payment response dataset not found' };
      }
    }

    // Handle PayPal force error
    if (query.type === 'showPaypalError') {
      orderPayments.togglePaypalError();
      console.log(
        `API: Set PayPal to throw an error - ${orderPayments.showPaypalError}`
      );
    }

    // Handle place order responses
    if (query.type === 'placeOrderResponseData') {
      console.log({ placeOrderResponseData });
      if (placeOrderResponseData[value]) {
        orderPayments.updatePlaceOrderResponse(placeOrderResponseData[value]);
        console.log(
          `API: Setup Place order response as - ${placeOrderResponseData[value].description}`
        );

        // if placeorder response is 409 voucher not active, set snapshot status to OrderSnapshotUnrecoverablePromotionError
        if (value === 'PromotionVoucherNotActive') {
          // setting up the basket to contain a company voucher
          promotionDatasets.MultiplePromos.setupPromos(basket);

          // seting the snapshot status to OrderSnapshotUnrecoverablePromotionError
          const newPlaceOrderState =
            snapshotServiceDatasets.snapshotStatus
              .OrderSnapshotUnrecoverablePromotionError.response;
          const { id, statusCode, error, body } = newPlaceOrderState;
          snapshotService.setSnapshotStatus({
            type: id,
            status: statusCode,
            body,
            error,
          });
          console.log(
            `API: Setup snapshot service - Snapshot set status - ${newPlaceOrderState.description}`
          );
        }
      } else {
        return { error: 'Place order response dataset not found' };
      }
    }

    if (query.type === 'giftCardData') {
      if (giftcardDatasets[value]) {
        // add the payment
        giftcardDatasets[value].setupGiftcards(orderPayments, basket);

        // update total
        const totalGiftCardAmount = orderPayments.payments
          .filter(
            ({ paymentMethod }) =>
              paymentMethod === PaymentMethod.CARD_GIFT_ARGOS ||
              paymentMethod === PaymentMethod.CARD_GIFT_FLEXECASH
          )
          .reduce((total, { amount }) => total + amount, 0);
        basket.updateTotalWithSaving(totalGiftCardAmount);

        // check compatibility
        paymentMethods.calculateStatuses(
          orderPayments.payments,
          basket.totals.outstanding,
          basket.totals.withoutSavings
        );

        console.log(
          `API: Set order payment data - ${giftcardDatasets[value].description}`
        );
      } else {
        return { error: 'Giftcard Dataset not found' };
      }
    }

    if (query.type === 'nectarData') {
      if (nectarDatasets[value]) {
        nectarDatasets[value].setupNectarCards(orderPayments, basket);

        if (value === 'Default') {
          nectar.isLinked = false;
        } else {
          nectar.isLinked = true;
        }

        const tempTotal = basket.getSnapshotAmounts().total.withSavings;
        switch (value) {
          case 'NectarWithTotal':
            basket.updateTotalWithSaving(tempTotal);
            paymentMethods.calculateStatuses(
              orderPayments.payments,
              basket.totals.outstanding,
              basket.totals.withoutSavings
            );
            break;
          case 'NectarInUse':
            basket.updateTotalWithSaving(orderPayments.payments[0].amount);
            paymentMethods.calculateStatuses(
              orderPayments.payments,
              basket.totals.outstanding,
              basket.totals.withoutSavings
            );
            break;
          default:
            paymentMethods.calculateStatuses(
              orderPayments.payments,
              basket.totals.outstanding,
              basket.totals.withoutSavings
            );
        }
        console.log(
          `API: Set order payment data - ${nectarDatasets[value].description}`
        );
      } else {
        return { error: 'Nectar Dataset not found' };
      }
    }

    SessionManager.saveSession(sessionData, req);
    return { orderPayments, paymentMethods };
  },
  render: (req, res) => {
    res.header(
      'cache-control',
      'no-cache, max-age=0, must-revalidate, no-store'
    );
    res.send(res.body);
  },
};

module.exports = modifyStubPaymentMethod;
