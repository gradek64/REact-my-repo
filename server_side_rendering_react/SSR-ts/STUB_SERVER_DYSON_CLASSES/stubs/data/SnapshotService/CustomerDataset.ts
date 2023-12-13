import SnapshotService from './SnapshotService'

const customerDataset = {
  REGISTERED: {
    description: 'Registered',
    setupCustomer: (snapshotService: SnapshotService) => {
      snapshotService.setCustomerType('REGISTERED')
    },
  },
  GUEST: {
    description: 'Guest',
    setupCustomer: (snapshotService: SnapshotService) => {
      snapshotService.setCustomerType('GUEST')
    },
  },
  NONE: {
    description: 'None',
    setupCustomer: (snapshotService: SnapshotService) => {
      snapshotService.setCustomerType('NONE')
    },
  },
}

module.exports = customerDataset
