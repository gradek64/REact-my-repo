import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import promotions from './promotions/promosReducer'

const createRootReducer = (history) =>
  combineReducers({
    promotions,
    router: connectRouter(history)

  })

export default createRootReducer
