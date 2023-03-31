export const isCollectionFulfilment = (req = {}) =>
  req.query.pageName === 'payNow' || req.query.pageName === 'mandatoryPrepay';

export const isDeliveryFulfilment = (req = {}) =>
  req.query.pageName === 'delivery';

// map Brand Names to match ui-payment
export const mapBrandNames = {
  tuc: 'TU',
  arg: 'ARGOS',
  hab: 'HABITAT',
};
