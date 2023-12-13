/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { FC, ReactElement } from 'react'
// eslint-disable-next-line no-restricted-imports
import { render, configure, RenderResult } from '@testing-library/react'

import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import { ThemeProvider } from 'styled-components'
import { Themes } from '@sainsburys-tech/bolt'
import { I18nextProvider } from 'react-i18next'
import { PreloadedState } from 'redux'

import i18n from '../../../config/i18n/test'
import rootSaga from '../../sagas'
import createStoreActual from '../../store'
import { RootState } from '../../types/reducers'
import { initialState as reducerInitialState } from '../../config/testUtils/__mocks__/state'

const browserHistory = createBrowserHistory()

configure({ testIdAttribute: 'data-test' })

export const createStore = (
  initialState: PreloadedState<RootState>,
  initialHistory: typeof browserHistory | undefined,
): ReturnType<typeof createStoreActual> => {
  const history = initialHistory || browserHistory
  const store = createStoreActual(history, initialState)

  store.runSaga(rootSaga)
  return store
}

/* https://testing-library.com/docs/react-testing-library/setup */
const customRender = (
  ui: ReactElement,
  {
    initialState = reducerInitialState,
    initialHistory = browserHistory,
    store = createStore(initialState, initialHistory),
    ...renderOptions
  } = {},
): RenderResult => {
  const AllTheProviders: FC = ({ children }) => {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <ConnectedRouter history={initialHistory}>
            <ThemeProvider theme={Themes.ArgosTheme}>{children}</ThemeProvider>
          </ConnectedRouter>
        </Provider>
      </I18nextProvider>
    )
  }
  return render(ui, { wrapper: AllTheProviders, ...renderOptions })
}

// eslint-disable-next-line no-restricted-imports
export * from '@testing-library/react'

export { customRender as render }
