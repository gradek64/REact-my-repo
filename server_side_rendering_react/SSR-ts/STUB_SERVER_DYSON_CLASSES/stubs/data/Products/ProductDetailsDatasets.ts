import Categories, { Category } from './ProductCategoriesDatasets'
import { ProductChannel } from '../../../src/types/api'

export type ProductDetails = {
  [productId: string]: {
    name: string
    attributes: {
      brand: string
      channels: ProductChannel[]
      parentId?: string
    }
    price: number
    categories?: Category[]
    badge?: string
    ageRestricted?: boolean
  }
}

const ProductDetailsDatasets: ProductDetails = {
  tuc131827446: {
    name: 'Blue Long-Sleeved School Shirts 3 Pack - 16 years',
    attributes: {
      brand: 'Tu',
      channels: ['TU_UK'],
      parentId: '3568831.P',
    },
    price: 4.5,
    categories: [
      Categories['Master Category'],
      Categories.Clothing,
      Categories['School uniforms'],
      Categories['Boys school uniforms'],
      Categories['School shirts'],
    ],
  },
  tuc138151830: {
    name: 'Marvel Avengers Iron Man Black T-Shirt - 3 years',
    attributes: {
      brand: 'Disney Marvel',
      channels: ['TU_UK'],
      parentId: '3568830.P',
    },
    price: 7,
    categories: [
      Categories['Master Category'],
      Categories.Clothing,
      Categories.Boys,
      Categories['T-shirts and shirts'],
    ],
  },
  tuc136622829: {
    name: 'White Crew Neck Plain T-Shirt - M',
    attributes: {
      brand: 'Tu',
      channels: ['TU_UK'],
    },
    price: 4,
    categories: [Categories['Master Category'], Categories.Clothing, Categories.Mens, Categories['T-shirts and polos']],
  },
  tuc138992137: {
    name: 'Navy Soft Dressing Gown - M',
    attributes: {
      brand: 'Tu',
      channels: ['TU_UK'],
    },
    price: 22,
    categories: [
      Categories['Master Category'],
      Categories.Clothing,
      Categories.Mens,
      Categories.Nightwear,
      Categories['Dressing gowns'],
    ],
  },
  tuc139476927: {
    name: 'Disney Winnie The Pooh Cream Jumper - 12',
    attributes: {
      brand: 'Tu',
      channels: ['TU_UK'],
    },
    price: 16,
    categories: [
      Categories['Master Category'],
      Categories.Clothing,
      Categories.Womens,
      Categories['Jumpers and cardigans'],
      Categories.Jumpers,
    ],
  },
  8198471: {
    name: 'Russell Hobbs 25510 Worcester Kettle - Red Stainless Steel',
    attributes: {
      brand: 'Russell Hobbs',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 24.99,
    categories: [Categories['Master Category'], Categories.Appliances, Categories.Kettles],
  },
  8097761: {
    name: "Assassin's Creed Valhalla PS5 Game",
    attributes: {
      brand: 'Assassins Creed',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 30.99,
    categories: [
      Categories['Master Category'],
      Categories.Technology,
      Categories['Video games and consoles'],
      Categories.PS5,
      Categories['PS5 games'],
    ],
  },
  9802766: {
    name: 'Duracell Plus Alkaline AAA Batteries - Pack of 4',
    attributes: {
      brand: 'Duracell',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 59.99,
    categories: [
      Categories['Master Category'],
      Categories.Technology,
      Categories['Household batteries and battery chargers'],
      Categories.Batteries,
    ],
  },
  4173548: {
    name: '3yrs Furniture Care - Sofa',
    attributes: {
      brand: '',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'HABITAT_UK'],
    },
    price: 61.99,
    categories: [Categories['Master Category'], Categories['Product care categories'], Categories['Furniture care']],
  },
  8209762: {
    name: '3yrs Breakdown Care - TV',
    attributes: {
      brand: '',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK'],
    },
    price: 88.99,
    categories: [Categories['Master Category'], Categories['Product care categories'], Categories['Breakdown care']],
  },
  5759208: {
    name: 'Play-Doh Super Colour Kit',
    attributes: {
      brand: 'Play-Doh',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 11,
    badge: '2for15',
    categories: [
      Categories['Master Category'],
      Categories.Toys,
      Categories['Art and creativity toys'],
      Categories['Dough and modelling toys'],
    ],
  },
  5577507: {
    name: 'Peppa Pig Giant Talking Peppa Soft Toy',
    attributes: {
      brand: 'Peppa Pig',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 16,
    badge: '2_for_30',
    categories: [Categories['Master Category'], Categories.Toys, Categories['2 for 30 pounds on Toys']],
  },
  9161878: {
    name: 'Argos Home Chesterfield 3 Seater Velvet Sofa - Green',
    attributes: {
      brand: 'Habitat',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT', 'HABITAT_UK'],
    },
    price: 500,
    categories: [
      Categories['Master Category'],
      Categories['Home and furniture'],
      Categories['Living room furniture'],
      Categories.Sofas,
    ],
  },
  9495159: {
    name: 'Bush MESBSX20 American Fridge Freezer - Stainless Steel',
    attributes: {
      brand: 'Bush',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK'],
    },
    price: 499.99,
    categories: [
      Categories['Master Category'],
      Categories.Appliances,
      Categories['Fridges and freezers'],
      Categories['Fridge freezers'],
    ],
  },
  7579730: {
    name: 'Hotpoint NSWM863CBS 8KG 1600 Spin Washing Machine - Black',
    attributes: {
      brand: 'Hotpoint',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 279.99,
    badge: 'Black_Friday_Hot_product',
    categories: [
      Categories['Master Category'],
      Categories.Appliances,
      Categories.Laundry,
      Categories['Washing machines'],
    ],
  },
  2953502: {
    name: 'Sealy Posturepedic Firm Ortho Divan - Kingsize',
    attributes: {
      brand: 'Sealy',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT'],
    },
    price: 599,
    categories: [
      Categories['Master Category'],
      Categories['Home and furniture'],
      Categories['Bedroom furniture'],
      Categories.Beds,
      Categories['Divan beds'],
    ],
  },
  4542162: {
    name: 'Xbox Live Gold 3 Month Subscription Digital Download',
    attributes: {
      brand: 'Xbox',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 17.99,
    categories: [Categories['Master Category'], Categories.Gifts, Categories['Gift cards']],
  },
  9147902: {
    name: "Assassin's Creed Valhalla Season Pass Digital Download",
    attributes: {
      brand: 'Microsoft',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 32.79,
    categories: [Categories['Master Category'], Categories.Gifts, Categories['Gift cards']],
  },
  9335958: {
    name: 'Call Of Duty: Warzone 2400 Point Xbox Digital Download',
    attributes: {
      brand: 'Microsoft',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 16.79,
    categories: [
      Categories['Master Category'],
      Categories.Technology,
      Categories['Video games and consoles'],
      Categories['Xbox Series'],
      Categories['Xbox game currency'],
    ],
  },
  9161885: {
    name: 'FIFA 21 Ultimate Team 4600 FIFA Points Xbox Digital Download',
    attributes: {
      brand: 'Microsoft',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 31.99,
    categories: [
      Categories['Master Category'],
      Categories.Technology,
      Categories['Video games and consoles'],
      Categories['Xbox Series'],
      Categories['Xbox game currency'],
    ],
  },
  9168118: {
    name: 'Minecraft: W10 Starter Collection PC Game - Digital Download',
    attributes: {
      brand: 'Minecraft',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 24.99,
    categories: [
      Categories['Master Category'],
      Categories.Technology,
      Categories['Video games and consoles'],
      Categories['PC gaming'],
      Categories['PC games'],
    ],
  },
  9162011: {
    name: 'Habitat Colour Glaze set of 4 Mugs',
    attributes: {
      brand: 'Habitat',
      channels: ['ARGOS_UK_WEB', 'ARGOS_UK_CAT', 'ARGOS_UK_KIOSK', 'ARGOS_ROI_WEB', 'ARGOS_ROI_CAT', 'HABITAT_UK'],
    },
    price: 7,
    categories: [
      Categories['Master Category'],
      Categories['Home and furniture'],
      Categories.Tableware,
      Categories['Cups and mugs'],
    ],
  },

  // these products no longer exist in the real PDP gateway hence have no categories
  5493179: {
    name: 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
    attributes: {
      brand: 'Russell Hobbs',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 24.99,
  },
  4251824: {
    name: 'Challenge White Desk Fan - 12 Inch',
    attributes: {
      brand: 'Challenge',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 14.99,
  },
  tuc135934388: {
    name: "RUBIE'S Star Wars Darth Vader 3 Piece Set - S/M",
    attributes: {
      brand: 'Tu',
      channels: ['TU_UK'],
    },
    price: 25,
  },
  tuc139523906: {
    name: 'Butterfly Print Palazzo Trousers - 18',
    attributes: {
      brand: 'Tu',
      channels: ['TU_UK'],
    },
    price: 16,
  },
  4049641: {
    name: 'Wilson Roger Federer 27 Inch Adult Tennis Racket',
    attributes: {
      brand: 'Wilson',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 24.99,
  },
  7543412: {
    name: 'Sim Free iPhone X 256GB Mobile Phone- Space Grey',
    attributes: {
      brand: 'Apple',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 1109,
  },
  1061684: {
    name: 'Panasonic TX-L50B6B 50 Inch Full HD 1080p Freeview HD LED TV',
    attributes: {
      brand: 'Panasonic',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 479.99,
  },
  1174715: {
    name: 'Costa Gift Card',
    attributes: {
      brand: 'Costa',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 15,
    categories: [Categories['Master Category'], Categories.Gifts, Categories['Gift cards']],
  },
  3376023: {
    name: 'Campingaz CV470 Plus Gas Cartridge - Set of 4',
    attributes: {
      brand: 'Campingaz',
      channels: ['ARGOS_UK_WEB'],
    },
    price: 34,
    ageRestricted: true,
  },
}

export default ProductDetailsDatasets
