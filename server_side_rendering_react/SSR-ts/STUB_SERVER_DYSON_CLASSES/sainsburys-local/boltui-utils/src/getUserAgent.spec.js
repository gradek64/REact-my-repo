/* eslint-disable no-plusplus */
/* eslint-disable id-length */
import getUserAgent from './getUserAgent'

const users = [
  {
    browser: 'ios',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Version/10.0 Mobile/14E304 Safari/602.1',
    assertion: { name: 'ios', os: 'iOS', supported: true, version: 10 }
  },
  {
    browser: 'crios',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1 (KHTML, like Gecko) CriOS/51.0.2704.104 Mobile/13F69 Safari/601.1.46',
    assertion: { name: 'crios', os: 'iOS', supported: true, version: 51 }
  },
  {
    browser: 'ie11',
    userAgent: 'Mozilla/5.0 (compatible, MSIE 11, Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko',
    assertion: { name: 'ie', os: null, supported: true, version: 11 }
  },
  {
    browser: 'ie9',
    userAgent: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.0; Trident/5.0;  Trident/5.0)',
    assertion: { name: 'ie', os: null, supported: false, version: 9 }
  },
  {
    browser: 'edge17',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.140 Safari/537.36 Edge/17.17134',
    assertion: { name: 'edge', os: 'Windows 10', supported: true, version: 17 }
  },
  {
    browser: 'edge12',
    userAgent:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.246',
    assertion: {
      name: 'edge',
      os: 'Windows 10',
      supported: false,
      version: 12
    }
  },
  {
    browser: 'opera54',
    userAgent:
      'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36 OPR/54.0.2952.64',
    assertion: { name: 'opera', os: null, supported: true, version: 54 }
  },
  {
    browser: 'opera6',
    userAgent: 'Opera/6.05 (Windows 98; U)  [fr]',
    assertion: { name: 'opera', os: null, supported: false, version: 6 }
  },
  {
    browser: 'safari11',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.1.2 Safari/605.1.15',
    assertion: { name: 'safari', os: 'Mac OS', supported: true, version: 11 }
  },
  {
    browser: 'safari5',
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_6_8) AppleWebKit/537.13+ (KHTML, like Gecko) Version/5.1.7 Safari/534.57.2',
    assertion: { name: 'safari', os: 'Mac OS', supported: false, version: 5 }
  },
  {
    browser: 'fxios7',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) FxiOS/7.5b3349 Mobile/14F89 Safari/603.2.4',
    assertion: { name: 'fxios', os: 'iOS', supported: true, version: 7 }
  },
  {
    browser: 'fxios4',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_2 like Mac OS X) AppleWebKit/603.2.4 (KHTML, like Gecko) FxiOS/4.5b3349 Mobile/14F89 Safari/603.2.4',
    assertion: { name: 'fxios', os: 'iOS', supported: false, version: 4 }
  },
  {
    browser: 'firefox62',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.13; rv:62.0) Gecko/20100101 Firefox/62.0',
    assertion: { name: 'firefox', os: 'Mac OS', supported: true, version: 62 }
  },
  {
    browser: 'firefox29',
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:29.0) Gecko/20100101 Firefox/29.0',
    assertion: { name: 'firefox', os: 'Mac OS', supported: false, version: 29 }
  },
  {
    browser: 'facebook',
    userAgent:
      'Mozilla/5.0 (iPad; CPU OS 8_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Mobile/12B410 [FBAN/FBIOS;FBAV/174.0.0.48.98;FBBV/110921384;FBDV/iPad4,1;FBMD/iPad;FBSN/iPhone OS;FBSV/8.1;FBSS/2;FBCR/;FBID/tablet;FBLC/en_GB;FBOP/5;FBRV/0]',
    assertion: { name: 'facebook', os: 'iOS', supported: true, version: 174 }
  },
  {
    browser: 'instagram',
    userAgent:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69 Instagram 8.4.0 (iPhone7,2; iPhone OS 9_3_2; nb_NO; nb-NO; scale=2.00; 750x1334',
    assertion: { name: 'instagram', os: 'iOS', supported: true, version: 8 }
  },
  {
    browser: 'samsung',
    userAgent:
      'Mozilla/5.0 (Linux; Android 7.0; SAMSUNG SM-G955F/G955FXXU1AQK7 Build/NRD90M) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/7.4 Chrome/59.0.3071.125 Mobile Safari/537.36',
    assertion: {
      name: 'samsung',
      os: 'Android OS',
      supported: true,
      version: 7
    }
  }
]

const changeUserAgent = (value) =>
  Object.defineProperty(window.navigator, 'userAgent', {
    value,
    configurable: true
  })
describe('test indiv user agents cases', () => {
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    it(`should getUserAgent for ${user.browser}`, () => {
      changeUserAgent(user.userAgent)
      expect(getUserAgent()).toEqual(user.assertion)
    })
  }
})
