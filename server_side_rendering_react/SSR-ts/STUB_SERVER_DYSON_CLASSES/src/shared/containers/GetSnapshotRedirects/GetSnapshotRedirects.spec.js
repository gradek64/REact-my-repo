import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { waitFor } from '@testing-library/react';

import { render } from '../../utils/@testing-library';
import {
  initialState,
  stateWithIncompleteDeliveryAddress,
  customer,
  savedPaymentMethods,
} from '../../config/testUtils/__mocks__/state';
import { initialPaymentMethodsResponse } from '../../config/testUtils/__mocks__/responses';
import {
  ORDER_REJECTED,
  ORDER_ERROR,
  REQUEST_TIMEOUT,
} from '../../config/testUtils/__mocks__/responses/errors';
import api from '../../api';
import { FulfilmentType } from 'types/api/snapshot';

import GetSnapshotRedirects from './GetSnapshotRedirects';

const mockValidHttpResponse = (body) => ({ status: 200, ok: true, body });

const setupComponent = (config) => {
  const match = config.match || {
    url: '',
    params: {
      id: 'snapshotId',
    },
  };

  const history =
    config.history ||
    createMemoryHistory({
      initialEntries: [
        '/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment',
      ],
    });
  const component = render(
    <Router history={history}>
      <Switch>
        <Route
          path='/checkout/:id/user'
          render={() => <div>Missing billing address</div>}
        />
        <Route path='/login' render={() => <div>Login</div>} />
        <Route path='/checkout/error' render={() => <div>Error</div>} />
        <Route
          path='/confirmation/:id'
          render={() => <div>Confirmation</div>}
        />
        <Route
          path='/checkout/:id/payment'
          render={(props) => (
            <GetSnapshotRedirects {...props} match={match}>
              <div data-test='child' />
            </GetSnapshotRedirects>
          )}
        />
        <Route
          path='/checkout/:id/delivery'
          render={(props) => (
            <GetSnapshotRedirects {...props} match={match}>
              <div data-test='child' />
            </GetSnapshotRedirects>
          )}
        />
      </Switch>
    </Router>,
    { initialState: config.initialState }
  );

  return { component, history };
};

test('When the brand url does not match the snapshot url, we should redirect to an error page', async () => {
  const stateWithMixedBrands = {
    ...initialState,
    app: {
      ...initialState.app,
      brandUrl: 'HABITAT',
    },
    meta: { ...initialState.meta, brand: 'ARGOS' },
  };
  const { history } = setupComponent({
    initialState: stateWithMixedBrands,
    match: {
      url: '/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment',
      params: {},
    },
  });
  await waitFor(() => {
    expect(history.location.pathname).toBe(`/checkout/error`);
  });
  expect(history.location.search).toBe(`?type=payment_brand_mismatch`);
});

test('When an order ID is known, and the status is order pending or placed it should redirect to the order confirmation page', async () => {
  const initialStateWithOrder = {
    ...initialState,
    order: {
      ...initialState.order,
      id: '123',
    },
    meta: {
      ...initialState.meta,
      snapshotStatus: 'ORDER_SNAPSHOT_ORDER_PENDING',
      orderId: '123',
    },
  };
  const { history } = setupComponent({
    initialState: initialStateWithOrder,
  });
  await waitFor(() => {
    expect(history.location.pathname).toBe(`/confirmation/123`);
  });
});

describe('When a place order error is detected', () => {
  test('it should redirect to the confirmation error page for fatal errors', () => {
    const stateWithError = {
      ...initialState,
      order: {
        ...initialState.order,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath: '/confirmation/error',
        },
      },
    };

    const history = createMemoryHistory({
      initialEntries: [
        '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment',
      ],
    });
    setupComponent({ initialState: stateWithError, history });

    expect(history.location.pathname).toBe('/confirmation/error');
  });

  test('it should redirect to the voucher code confirmation error page for a invalid voucher related fatal error', () => {
    const stateWithError = {
      ...initialState,
      order: {
        ...initialState.order,
        placeOrder: {
          placing: false,
          error: true,
          redirectPath:
            '/confirmation/error?promoCode=A309644DV702%2CA309644LV902',
        },
      },
    };

    const history = createMemoryHistory({
      initialEntries: [
        '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment',
      ],
    });
    setupComponent({ initialState: stateWithError, history });

    expect(history.location.pathname).toBe('/confirmation/error');
    expect(history.location.search).toBe(
      '?promoCode=A309644DV702%2CA309644LV902'
    );
  });

  test('it should not redirect to an error page for order rejected error', () => {
    const stateWithError = {
      ...initialState,
      order: {
        ...initialState.order,
        error: { body: { error: ORDER_REJECTED.error } },
      },
    };
    const history = createMemoryHistory({
      initialEntries: [
        '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment',
      ],
    });
    setupComponent({ initialState: stateWithError, history });

    expect(history.location.pathname).toBe(
      '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment'
    );
  });

  test('it should not redirect to an error page for order error', () => {
    const stateWithError = {
      ...initialState,
      order: {
        ...initialState.order,
        error: { body: { error: ORDER_ERROR.error } },
      },
    };
    const history = createMemoryHistory({
      initialEntries: [
        '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment',
      ],
    });
    setupComponent({ initialState: stateWithError, history });

    expect(history.location.pathname).toBe(
      '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment'
    );
  });

  test('it should not redirect to an error page for request timeout error', () => {
    const stateWithError = {
      ...initialState,
      order: {
        ...initialState.order,
        error: { body: { error: REQUEST_TIMEOUT.error } },
      },
    };
    const history = createMemoryHistory({
      initialEntries: [
        '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment',
      ],
    });
    setupComponent({ initialState: stateWithError, history });

    expect(history.location.pathname).toBe(
      '/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment'
    );
  });
});

test('When a fatal error is detected, should redirect to the error page and a new entry added to the router history', () => {
  const initialStateWithError = {
    ...initialState,
    order: {
      ...initialState.order,
      placeOrder: {
        placing: false,
        error: true,
        redirectPath: '/confirmation/error',
      },
    },
  };
  const mockHistory = createMemoryHistory({
    initialEntries: ['/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment'],
  });
  const { history } = setupComponent({
    initialState: initialStateWithError,
    history: mockHistory,
  });

  expect(history.entries.length).toEqual(2);
});

test('When the order snapshot status contains the unrecoverable error status redirect to the fraud page', () => {
  const initialStateWithErrorStatus = {
    ...initialState,
    meta: {
      ...initialState.meta,
      snapshotStatus: 'ORDER_SNAPSHOT_UNRECOVERABLE_PAYMENT_ERROR',
    },
  };
  const mockHistory = createMemoryHistory({
    initialEntries: ['/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/payment'],
  });
  const { history } = setupComponent({
    initialState: initialStateWithErrorStatus,
    history: mockHistory,
  });

  expect(history.entries[1].pathname).toEqual('/confirmation/error');
});

// A get snapshot call is not made on the error pages. Refreshing the page and pressing the back button will
// land you on the confirm and pay page with only the initial redux state.
test('When snapshot status is null because a get snapshot call has not been made, call get snapshot to repopulate state', () => {
  const getSnapshotMockResponse = {
    snapshot: {
      ...initialState,
      amounts: {
        total: 12.34,
        outstanding: 12.34,
      },
      source: { deviceId: '123' },
      customer,
    },
  };

  api.getSnapshot = jest.fn(() =>
    mockValidHttpResponse(getSnapshotMockResponse)
  );
  api.getPaymentMethods = jest.fn(() =>
    mockValidHttpResponse(initialPaymentMethodsResponse)
  );
  api.getWallet = jest.fn(() => mockValidHttpResponse({ savedPaymentMethods }));

  setupComponent({
    initialState: {
      ...initialState,
      meta: { ...initialState.meta, snapshotStatus: null },
    },
  });

  expect(api.getSnapshot).toHaveBeenCalledTimes(1);
});

test('When store name is missing it should redirect to error page for Collection', async () => {
  const stateStoreNameMissing = {
    ...initialState,
    store: { id: '1787636' },
  };
  const { history } = setupComponent({
    initialState: stateStoreNameMissing,
    match: {
      url: '/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment',
      params: {},
    },
  });
  await waitFor(() => {
    expect(history.location.pathname).toBe(`/checkout/error`);
  });
  expect(history.location.search).toBe(`?type=internal_store_error`);
});

test('When store name is missing and status has not been returned yet', async () => {
  const stateStoreNameSnapshotStatusNull = {
    ...initialState,
    store: { id: '1787636' },
    meta: {
      ...initialState.meta,
      snapshotStatus: null,
    },
  };

  const { history } = setupComponent({
    initialState: stateStoreNameSnapshotStatusNull,
    match: {
      url: '/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment',
      params: {},
    },
  });
  await waitFor(() => {
    expect(history.location.pathname).toBe(
      `/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment`
    );
  });
});

test('When store name is missing it should NOT redirect to error page for Delivery', async () => {
  const stateStoreNameMissingDelivery = {
    ...initialState,
    store: { id: '1787636' },
    meta: {
      ...initialState.meta,
      fulfilmentType: FulfilmentType.DELIVERY,
    },
  };
  const { history } = setupComponent({
    initialState: stateStoreNameMissingDelivery,
    match: {
      url: '/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment',
      params: {},
    },
  });
  await waitFor(() => {
    expect(history.location.pathname).toBe(
      `/checkout/20ec757a-4f50-43fd-aa35-d79bfc3bf506/payment`
    );
  });
});

test('When Delivery Address is incomplete (only Postcode) should redirect to delivery address modal', async () => {
  const mockHistory = createMemoryHistory({
    initialEntries: ['/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/delivery'],
  });

  const { history } = setupComponent({
    initialState: stateWithIncompleteDeliveryAddress,
    history: mockHistory,
  });
  await waitFor(() => {
    expect(history.location.pathname).toBe(
      `/checkout/7333d738-9f19-4496-b2f1-d5ec43057c44/delivery/address`
    );
  });
});
