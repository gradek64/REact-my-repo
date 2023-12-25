import { PreloadedState } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware, { END, SagaMiddleware } from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'

import createRootReducer from '../reducers'
import { RootState } from 'types/reducers'

type StoreType = ReturnType<typeof configureStore> & {
  runSaga: SagaMiddleware['run']
  close: () => typeof END
}

export default function createStore(history: History, initialState: PreloadedState<RootState>): StoreType {
  /* eslint-disable @typescript-eslint/no-unsafe-member-access */
  const isDev = process.env.NODE_ENV === 'development'
  const isProduction = process.env.NODE_ENV === 'production'
  /* eslint-enable */

  const sagaMiddleware = createSagaMiddleware()
  const reduxRouterMiddleware = routerMiddleware(history)

  const store = configureStore({
    reducer: createRootReducer(history),
    preloadedState: initialState as any,
    devTools: !isProduction,
    middleware: [sagaMiddleware, reduxRouterMiddleware],
  })

  if (isDev && module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment */
      const createNewRootReducer = require('../reducers').default // eslint-disable-line global-require
      store.replaceReducer(createNewRootReducer(history))
      /* eslint-enable */
    })
  }

  // Used for calling sagas during server-side rendering
  const runSaga = sagaMiddleware.run // eslint-disable-line @typescript-eslint/unbound-method
  const close = () => store.dispatch(END)

  return {
    ...store,
    runSaga,
    close,
  }
}
