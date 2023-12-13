fetch('/checkout/log-debug', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body: JSON.stringify({
    error: 'Resume page started',
    resumePath: window.location.search,
    origin: window.location.origin,
  }),
})
