import ProductService from './ProductService'

export const productDatasets = {
  kettle: { id: '5493179' },
  fan: { id: '4251824' },
  tuItem: { id: 'tuc131827446' },
  tuIronMan: { id: 'tuc138151830' },
  tuDarthVader: { id: 'tuc135934388' },
  tuTshirt: { id: 'tuc136622829' },
  tuTrousers: { id: 'tuc139523906' },
  tuDressingGown: { id: 'tuc138992137' },
  tuJumper: { id: 'tuc139476927' },
  tennisRacket: { id: '4049641' },
  redKettle: { id: '8198471' },
  iphone: { id: '7543412' },
  game: { id: '8097761' },
  battery: { id: '9802766' },
  tv: { id: '1061684' },
  furnitureCare: { id: '4173548', isProductCare: true },
  breakdownCare: { id: '8209762', isProductCare: true },
  productWithPromotionBadge: { id: '5759208' },
  anotherProductWithPromotionBadge: { id: '5577507' },
  sofa: { id: '9161878' },
  fridgeFreezer: { id: '9495159' },
  washingMachine: { id: '7579730' },
  bed: { id: '2953502' },
  digitalDownloadXboxLive: { id: '4542162' },
  digitalDownloadGame: { id: '9147902' },
  digitalDownloadWarzone: { id: '9335958' },
  digitalDownloadFifa: { id: '9161885' },
  digitalDownloadMinecraft: { id: '9168118' },
  habitatMug: { id: '9162011' },
  costaGiftCard: { id: '1174715' },
  gas: { id: '3376023' },
}

export const productData = {
  products: {
    description: 'default products',
    setupProduct: [productDatasets],
  },
}

export const productResponseData = {
  200: {
    description: '200 Products retrieved successfully',
    setupProduct: (productService: ProductService) => productService.updateResponse(200, ''),
  },
  404: {
    description: '404 Products not found',
    setupProduct: (productService: ProductService) => productService.updateResponse(404, '404: Products not found'),
  },
  500: {
    description: '500 Internal server error',
    setupProduct: (productService: ProductService) => productService.updateResponse(500, '500: Internal server error'),
  },
}
