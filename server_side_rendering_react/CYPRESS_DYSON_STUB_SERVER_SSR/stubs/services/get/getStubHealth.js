
const getStubHealth = {
  path: '/health',
  method: 'GET',
  delay: 100,
  cache: false,
  render: (req, res) => res.status(200).send()
}

module.exports = getStubHealth
