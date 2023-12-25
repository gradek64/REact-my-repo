import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import meta from './meta/metaReducer'
import wallet from './wallet/walletReducer'


const createRootReducer = (history) =>
  combineReducers({
    meta,
    router: connectRouter(history),
    wallet,
  })

export default createRootReducer
