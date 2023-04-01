import { PreloadedState } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { END, SagaMiddleware } from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import createRootReducer from '../../shared/Redux/reducers';

export default function createStore(history, initialState) {
  const isDev = process.env.NODE_ENV === 'development';
  const isProduction = process.env.NODE_ENV === 'production';

  const sagaMiddleware = createSagaMiddleware();
  const reduxRouterMiddleware = routerMiddleware(history);

  const store = configureStore({
    reducer: createRootReducer(history),
    preloadedState: initialState,
    devTools: !isProduction,
    middleware: [sagaMiddleware, reduxRouterMiddleware],
  });

  /* if (isDev && module.hot) {
    module.hot.accept('../../../shared/Redux/reducers', () => {
      const createNewRootReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(createNewRootReducer(history));
    });
  } */

  // Used for calling sagas during server-side rendering
  const runSaga = sagaMiddleware.run; // eslint-disable-line @typescript-eslint/unbound-method
  const close = () => store.dispatch(END);

  return {
    ...store,
    runSaga,
    close,
  };
}
