export type Category = {
  id: string
  type: string
  name: string
  url: string
}

type CategoriesDataset = {
  [name: string]: Category
}

const ProductCategoriesDatasets: CategoriesDataset = {
  'Master Category': {
    id: '10000001',
    type: 'Master Category',
    name: 'Master Category',
    url: '',
  },
  Clothing: {
    id: '29131',
    type: 'Top Level Category',
    name: 'Clothing',
    url: '/browse/clothing/c:29131/',
  },
  Mens: {
    id: '691144',
    type: 'CLP',
    name: 'Mens',
    url: '/browse/clothing/mens/c:691144/',
  },
  'T-shirts and polos': {
    id: '691164',
    type: 'PLP',
    name: 'T-shirts and polos',
    url: '/browse/clothing/mens/t-shirts-and-polos/c:691164/',
  },
  Technology: {
    id: '29949',
    type: 'Top Level Category',
    name: 'Technology',
    url: '/browse/technology/c:29949/',
  },
  'Household batteries and battery chargers': {
    id: '29962',
    type: 'PLPPLUS',
    name: 'Household batteries and battery chargers',
    url: '/browse/technology/household-batteries-and-battery-chargers/c:29962/',
  },
  Batteries: {
    id: '30218',
    type: 'PLP',
    name: 'Batteries',
    url: '/browse/technology/household-batteries-and-battery-chargers/batteries/c:30218/',
  },
  'Product care categories': {
    id: '690245',
    type: 'CLP',
    name: 'Product care categories',
    url: '/browse/product-care-categories/c:690245/',
  },
  'Furniture care': {
    id: '690248',
    type: 'PLP',
    name: 'Furniture care',
    url: '/browse/product-care-categories/furniture-care/c:690248/',
  },
  Appliances: {
    id: '787124',
    type: 'Top Level Category',
    name: 'Appliances',
    url: '/browse/appliances/c:787124/',
  },
  'Fridges and freezers': {
    id: '788338',
    type: 'CLP',
    name: 'Fridges and freezers',
    url: '/browse/appliances/fridges-and-freezers/c:788338/',
  },
  'Fridge freezers': {
    id: '29617',
    type: 'PLP',
    name: 'Fridge freezers',
    url: '/browse/appliances/fridges-and-freezers/fridge-freezers/c:29617/',
  },
  'School uniforms': {
    id: '812482',
    type: 'CLP',
    name: 'School uniforms',
    url: '/browse/clothing/school-uniforms/c:812482/',
  },
  'Boys school uniforms': {
    id: '812483',
    type: 'PLPPLUS',
    name: 'Boys school uniforms',
    url: '/browse/clothing/school-uniforms/boys-school-uniforms/c:812483/',
  },
  'School shirts': {
    id: '812516',
    type: 'PLP',
    name: 'School shirts',
    url: '/browse/clothing/school-uniforms/boys-school-uniforms/school-shirts/c:812516/',
  },
  Boys: {
    id: '812621',
    type: 'CLP',
    name: 'Boys',
    url: '/browse/clothing/boys/c:812621/',
  },
  'T-shirts and shirts': {
    id: '691097',
    type: 'PLP',
    name: 'T-shirts and shirts',
    url: '/browse/clothing/boys/t-shirts-and-shirts/c:691097/',
  },
  'Breakdown care': {
    id: '690250',
    type: 'PLP',
    name: 'Breakdown care',
    url: '/browse/product-care-categories/breakdown-care/c:690250/',
  },
  'Video games and consoles': {
    id: '29952',
    type: 'CLP',
    name: 'Video games and consoles',
    url: '/browse/technology/video-games-and-consoles/c:29952/',
  },
  PS5: {
    id: '812419',
    type: 'CLP',
    name: 'PS5',
    url: '/browse/technology/video-games-and-consoles/ps5/c:812419/',
  },
  'PS5 games': {
    id: '812420',
    type: 'PLP',
    name: 'PS5 games',
    url: '/browse/technology/video-games-and-consoles/ps5/ps5-games/c:812420/',
  },
  Nightwear: {
    id: '826692',
    type: 'PLPPLUS',
    name: 'Nightwear',
    url: '/browse/clothing/mens/nightwear/c:826692/',
  },
  'Dressing gowns': {
    id: '826693',
    type: 'PLP',
    name: 'Dressing gowns',
    url: '/browse/clothing/mens/nightwear/dressing-gowns/c:826693/',
  },
  Womens: {
    id: '691104',
    type: 'CLP',
    name: 'Womens',
    url: '/browse/clothing/womens/c:691104/',
  },
  'Jumpers and cardigans': {
    id: '691117',
    type: 'PLPPLUS',
    name: 'Jumpers and cardigans',
    url: '/browse/clothing/womens/jumpers-and-cardigans/c:691117/',
  },
  Jumpers: {
    id: '691119',
    type: 'PLP',
    name: 'Jumpers',
    url: '/browse/clothing/womens/jumpers-and-cardigans/jumpers/c:691119/',
  },
  Toys: {
    id: '30299',
    type: 'Top Level Category',
    name: 'Toys',
    url: '/browse/toys/c:30299/',
  },
  'Art and creativity toys': {
    id: '30302',
    type: 'CLP',
    name: 'Art and creativity toys',
    url: '/browse/toys/art-and-creativity-toys/c:30302/',
  },
  'Dough and modelling toys': {
    id: '42641',
    type: 'PLP',
    name: 'Dough and modelling toys',
    url: '/browse/toys/art-and-creativity-toys/dough-and-modelling-toys/c:42641/',
  },
  Kettles: {
    id: '29560',
    type: 'PLP',
    name: 'Kettles',
    url: '/browse/appliances/kettles/c:29560/',
  },
  'Home and furniture': {
    id: '29351',
    type: 'Top Level Category',
    name: 'Home and furniture',
    url: '/browse/home-and-furniture/c:29351/',
  },
  'Living room furniture': {
    id: '29368',
    type: 'CLP',
    name: 'Living room furniture',
    url: '/browse/home-and-furniture/living-room-furniture/c:29368/',
  },
  Sofas: {
    id: '29643',
    type: 'PLP',
    name: 'Sofas',
    url: '/browse/home-and-furniture/living-room-furniture/sofas/c:29643/',
  },
  'Xbox Series': {
    id: '812424',
    type: 'CLP',
    name: 'Xbox Series',
    url: '/browse/technology/video-games-and-consoles/xbox-series/c:812424/',
  },
  'Xbox game currency': {
    id: '824650',
    type: 'PLP',
    name: 'Xbox game currency',
    url: '/browse/technology/video-games-and-consoles/xbox-series/xbox-game-currency/c:824650/',
  },
  Tableware: {
    id: '29707',
    type: 'CLP',
    name: 'Tableware',
    url: '/browse/home-and-furniture/tableware/c:29707/',
  },
  'Cups and mugs': {
    id: '29739',
    type: 'PLP',
    name: 'Cups and mugs',
    url: '/browse/home-and-furniture/tableware/cups-and-mugs/c:29739/',
  },
  Gifts: {
    id: '29164',
    type: 'Top Level Category',
    name: 'Gifts',
    url: '/browse/gifts/c:29164/',
  },
  'Gift cards': {
    id: '29202',
    type: 'PLP',
    name: 'Gift cards',
    url: '/browse/gifts/gift-cards/c:29202/',
  },
  'Bedroom furniture': {
    id: '29366',
    type: 'CLP',
    name: 'Bedroom furniture',
    url: '/browse/home-and-furniture/bedroom-furniture/c:29366/',
  },
  Beds: {
    id: '29865',
    type: 'CLP',
    name: 'Beds',
    url: '/browse/home-and-furniture/bedroom-furniture/beds/c:29865/',
  },
  'Divan beds': {
    id: '29866',
    type: 'PLP',
    name: 'Divan beds',
    url: '/browse/home-and-furniture/bedroom-furniture/beds/divan-beds/c:29866/',
  },
  'PC gaming': {
    id: '29986',
    type: 'CLP',
    name: 'PC gaming',
    url: '/browse/technology/video-games-and-consoles/pc-gaming/c:29986/',
  },
  'PC games': {
    id: '30005',
    type: 'PLP',
    name: 'PC games',
    url: '/browse/technology/video-games-and-consoles/pc-gaming/pc-games/c:30005/',
  },
  Laundry: {
    id: '788337',
    type: 'CLP',
    name: 'Laundry',
    url: '/browse/appliances/laundry/c:788337/',
  },
  'Washing machines': {
    id: '29612',
    type: 'PLP',
    name: 'Washing machines',
    url: '/browse/appliances/laundry/washing-machines/c:29612/',
  },
  '2 for 30 pounds on Toys': {
    id: '30314',
    type: 'PLP',
    name: '2 for 30 pounds on Toys',
    url: '/browse/toys/2-for-30-pounds-on-toys/c:30314/',
  },
}

export default ProductCategoriesDatasets
