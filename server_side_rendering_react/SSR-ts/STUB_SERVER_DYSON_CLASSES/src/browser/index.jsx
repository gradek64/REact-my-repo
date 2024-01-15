import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import { createBrowserHistory } from 'history'
import rootSaga from '../sagas'
import createStore from '../store'
import App from '../shared/components/App'

const browserHistory = createBrowserHistory()

const dest = document.getElementById('app')

// this has to match the server content
const store = createStore(browserHistory, window.__data)
if (process.env.NODE_ENV !== 'development') {
  delete window.__data
}

store.runSaga(rootSaga)

const renderApp = (Component) => {
  // Use Loadable to preload any modules we need for initial render
  Loadable.preloadReady().then(() => {
    const app = (
        <Provider store={store}>
          <ConnectedRouter history={browserHistory}>
            <Component />
          </ConnectedRouter>
        </Provider>
    )
    hydrate(app, dest)
  })
}

renderApp(App)

// Enable hot module reloading
if (module.hot) {
  module.hot.accept('../shared/components/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../shared/components/App').default
    renderApp(NextApp)
  })
}
