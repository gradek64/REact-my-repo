import {
  isCollectionFulfilment,
  isDeliveryFulfilment,
  mapBrandNames,
} from '../helpers/requestSelectors';
import { calculateRequestConfig } from '../helpers/calculateConsulConfig';

export const flattenConsulValues = (req, res, next) => {
  const { cookies } = req;
  const { brand } = cookies;
  const collection = isCollectionFulfilment(req) ? 'COLLECTION' : undefined;
  const delivery = isDeliveryFulfilment(req) ? 'DELIVERY' : undefined;

  const details = {
    brands: mapBrandNames[brand],
    fulfilments: collection || delivery,
  };
  const { features } = req.consulState;

  const calculateFeatures = calculateRequestConfig(features, details);
  // override Consul state with calculated values
  req.consulState = { ...req.consulState, features: calculateFeatures };

  next();
};
