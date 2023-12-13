const SessionManager = require('../../data/SessionManager');
const MonthlyCareDatasets =
  require('../../data/GetOrder/MonthlyCareDatasets').default;
const AdvicesDatasets = require('../../data/GetOrder/AdvicesDatasets').default;
const ShipmentsCountDatasets =
  require('../../data/GetOrder/ShipmentCountDatasets').default;

const modifyStubGetOrder = {
  path: '/payment-stub/get-order',
  method: 'GET',
  delay: 0,
  cache: false,
  template(req) {
    const query = req.query;
    const { value } = query;
    const sessionData = SessionManager.getSession(req);
    const { getOrder, orderRetrieval } = sessionData;
    let dataset;

    if (query.type === 'availableMonthlyCare') {
      dataset = MonthlyCareDatasets[value];
      if (dataset) {
        getOrder.availableMonthlyCare = value;
        console.log(`API: Set getOrder data - ${dataset.description}`);
      } else {
        return { error: 'Available monthly care option not found' };
      }
    }
    if (query.type === 'paymentMethod') {
      dataset = PaymentMethodsDatasets.paymentDatasets[value];
      if (dataset || value === 'CARD_NECTAR_SPEND') {
        getOrder.paymentType = value;
        console.log(`API: Set getOrder data - ${value}`);
      } else {
        return { error: `Payment method dataset not found for '${value}'` };
      }
    }
    if (query.type === 'nectarLinked') {
      getOrder.nectarLinked = !getOrder.nectarLinked;
      console.log(`API: Set Nectar card linked - ${getOrder.nectarLinked}`);
    }
    if (query.type === 'eligibleCompanyVoucher') {
      getOrder.eligibleCompanyVoucher = value === 'true';
      console.log(`API: Set eligible company voucher to ${value}`);
    }
    if (query.type === 'sortShipmentsByStartTime') {
      getOrder.shipmentSortByStartTime = !getOrder.shipmentSortByStartTime;
      console.log(`API: Force shipments mixed sorting - ${value}`);
    }
    if (query.type === 'shipmentCountData') {
      dataset = ShipmentsCountDatasets[value];
      if (dataset) {
        const newCount = parseInt(value, 10);
        getOrder.shipmentsCount = newCount;
        orderRetrieval.buildOrders(newCount);
        console.log(`API: Set confirmation data - ${dataset.description}`);
      } else {
        return { error: 'Shipment option not found' };
      }
    }
    if (query.type === 'advices') {
      dataset = AdvicesDatasets[value];
      getOrder.orderAdvice = AdvicesDatasets[value] ? [dataset] : undefined;
      console.log(`API: Set confirmation data - ${value}`);
    }

    SessionManager.saveSession(sessionData, req);
    return getOrder.toJson();
  },
  render: (_req, res) => {
    res.header(
      'cache-control',
      'no-cache, max-age=0, must-revalidate, no-store'
    );
    res.send(res.body);
  },
};

module.exports = modifyStubGetOrder;
