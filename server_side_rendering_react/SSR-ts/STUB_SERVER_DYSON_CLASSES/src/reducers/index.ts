import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import meta from './meta/metaReducer'
import payments from './payments/paymentsReducer'
import store from './store/storeReducer'
import basket from './basket/basketReducer'
import totals from './totals/totalsReducer'
import customer from './customer/customerReducer'
import promotions from './promotions/promosReducer'
import app from './app/appReducer'
import order from './order/orderReducer'
import wallet from './wallet/walletReducer'
import nectar from './nectar/nectarReducer'
import delivery from './delivery/deliveryReducer'

const createRootReducer = (history) =>
  combineReducers({
    meta,
    payments,
    store,
    basket,
    totals,
    customer,
    app,
    promotions,
    order,
    router: connectRouter(history),
    wallet,
    nectar,
    delivery,
  })

export default createRootReducer
