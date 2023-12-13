const baseStoreAttributes = {
  addressLine: ['Unit 3', 'Roaring Meg North Retail Park', 'Great North Road'],
  town: 'Stevenage',
  county: null,
  country: null,
  location: {
    longitude: '-0.199480',
    latitude: '51.891770',
  },
  timetable: {
    defaultWeek: {
      monday: [
        {
          open: '09:00',
          close: '21:00',
        },
      ],
      tuesday: [
        {
          open: '09:00',
          close: '21:00',
        },
      ],
      wednesday: [
        {
          open: '09:00',
          close: '21:00',
        },
      ],
      thursday: [
        {
          open: '09:00',
          close: '21:00',
        },
      ],
      friday: [
        {
          open: '09:00',
          close: '21:00',
        },
      ],
      saturday: [
        {
          open: '09:00',
          close: '21:00',
        },
      ],
      sunday: [
        {
          open: '10:30',
          close: '16:30',
        },
      ],
    },
  },
}

const storeDatasets = {
  140: {
    id: '140',
    legacyName: 'Pimlico Argos in Sainsburys (Victoria)',
    postcode: 'SW1V 1DT',
    ...baseStoreAttributes,
  },
  408: {
    id: '408',
    legacyName: 'Stevenage Argos and EE Store',
    postcode: 'SG1 1XN',
    ...baseStoreAttributes,
  },
  1234: {
    id: '1234',
    legacyName: 'Romford Sainsburys Click & Collect',
    postcode: 'RM1 1AU',
    mandatoryPrepay: true,
    ...baseStoreAttributes,
  },
  3333: {
    id: '3333',
    legacyName: 'Habitat store',
    postcode: 'GU10 5TH',
    mandatoryPrepay: true,
    ...baseStoreAttributes,
  },
  852: {
    id: '852',
    legacyName: 'Manchester Hulme',
    postcode: 'M15 5AF',
    mandatoryPrepay: true,
    ...baseStoreAttributes,
  },
  9044: {
    id: '9044',
    legacyName: 'Milton keynes',
    postcode: 'MK9 2FW',
    ...baseStoreAttributes,
  },
  7777: {
    id: '7777',
    legacyName: 'Newcastle',
    postcode: 'NE1 7AG',
    ...baseStoreAttributes,
  },
  4206: {
    id: '4206',
    legacyName: 'Crawley County Oak Retail Park',
    postcode: 'RH11 7XN',
    ...baseStoreAttributes,
  },
  194: {
    id: '194',
    legacyName: 'Redhill',
    postcode: 'RH1 1RH',
    ...baseStoreAttributes,
  },
  4387: {
    id: '4387',
    legacyName: 'Warlingham inside Sainsburys',
    postcode: 'CR6 9DY',
    ...baseStoreAttributes,
  },
  5188: {
    id: '5188',
    legacyName: 'West Green Collect in Sainsburys',
    postcode: 'RH10 8NF',
    mandatoryPrepay: true,
    ...baseStoreAttributes,
  },
  466: {
    id: '466',
    legacyName: 'Crawley Kingsgate',
    postcode: 'RH10 1EN',
    mandatoryPrepay: false,
    ...baseStoreAttributes,
  },
  373: {
    id: '373',
    legacyName: 'East Grinstead',
    postcode: 'RH19 4DW',
    mandatoryPrepay: false,
    ...baseStoreAttributes,
  },
  243: {
    id: '243',
    legacyName: 'Horsham',
    postcode: 'RH12 1SL',
    mandatoryPrepay: true,
    ...baseStoreAttributes,
  },
  4659: {
    id: '4659',
    legacyName: 'Haywards Heath in Sainsburys',
    postcode: 'RH16 1DG',
    mandatoryPrepay: false,
    ...baseStoreAttributes,
  },
  293: {
    id: '293',
    legacyName: 'Burgess Hill',
    postcode: 'RH15 9NN',
    mandatoryPrepay: false,
    ...baseStoreAttributes,
  },
  780: {
    id: '780',
    legacyName: 'Leatherhead',
    postcode: 'KT22 8AA',
    mandatoryPrepay: false,
    ...baseStoreAttributes,
  },
  111: {
    id: '111',
  },
}

export default storeDatasets
