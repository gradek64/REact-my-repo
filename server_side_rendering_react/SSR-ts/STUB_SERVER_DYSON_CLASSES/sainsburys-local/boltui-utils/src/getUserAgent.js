const buildRules = (ruleTuples) =>
  ruleTuples.map((tuple) => ({
    name: tuple[0],
    rule: tuple[1]
  }))
/* eslint-disable */
const getBrowserRules = () =>
  buildRules([
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['vivaldi', /Vivaldi\/([0-9\.]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)$/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FBAV\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/]
  ])

const getOperatingSystemRules = () =>
  buildRules([
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['Search Bot', /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]
  ])
/* eslint-enable */

const detectOS = (userAgentString) => {
  const rules = getOperatingSystemRules()
  const detected = rules.filter((os) => os.rule && os.rule.test(userAgentString))[0]
  return detected ? detected.name : null
}

const getNodeVersion = () => {
  const isNode = typeof process !== 'undefined' && process.version
  return (
    isNode && {
      name: 'node',
      version: process.version.slice(1),
      os: process.platform
    }
  )
}

const getSupportedState = (browserName, version) => {
  switch (browserName) {
    case 'chrome':
      if (version >= 38) return true
      return false
    case 'crios':
      if (version >= 38) return true
      return false
    case 'ie':
      if (version >= 10) return true
      return false
    case 'ios':
      if (version >= 9) return true
      return false
    case 'firefox':
      if (version >= 35) return true
      return false
    case 'fxios':
      if (version >= 7) return true
      return false
    case 'safari':
      if (version >= 7) return true
      return false
    case 'opera':
      if (version >= 7) return true
      return false
    case 'edge':
      if (version >= 14) return true
      return false
    case 'facebook':
    case 'instagram':
    case 'samsung':
      return true
    default:
      return false
  }
}

const parseUserAgent = (userAgentString) => {
  const browsers = getBrowserRules()
  if (!userAgentString) return null
  const detected =
    browsers
      .map((browser) => {
        const match = browser.rule.exec(userAgentString)
        let browserVersion = match && match[1].split(/[._]/).slice(0, 3)
        if (browserVersion && browserVersion.length < 3) {
          browserVersion = browserVersion.concat(browserVersion.length === 1 ? [0, 0] : [0])
        }
        const { name } = browser
        const version = parseFloat(browserVersion)

        if (match) {
          const supported = getSupportedState(name, version)
          return { name, version, supported }
        }
        return null
      })
      .filter(Boolean)[0] || null
  if (detected) detected.os = detectOS(userAgentString)
  // if (/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/i.test(userAgentString)) {
  //   detected = detected || {}
  //   detected.bot = true
  // }
  return detected
}

const getUserAgent = () => {
  if (typeof navigator !== 'undefined') return parseUserAgent(navigator.userAgent) // eslint-disable-line no-undef
  return getNodeVersion()
}

export default getUserAgent
