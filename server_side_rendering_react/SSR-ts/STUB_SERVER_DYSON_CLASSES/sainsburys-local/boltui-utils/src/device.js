const devices = {
  Android: /Android/i,
  iPhone: /iPhone/i,
  iPad: /iPad/i,
  iPod: /iPod/i,
  OperaMini: /Opera Mini/i,
  IEMobile: /IEMobile/i
}

const browsers = {
  Safari: 'Safari',
  Chrome: 'Chrome',
  ChromeIos: 'CriOS'
}

const device = {
  getMobileType: () => {
    const agent = window.navigator.userAgent
    let result
    Object.keys(devices).forEach((key) => {
      if (agent.match(devices[key])) {
        result = key
      }
    })
    return result
  },

  isIphone: () => {
    const agent = window.navigator.userAgent
    return Boolean(agent.match(devices.iPhone))
  },

  isIpad: () => {
    const agent = window.navigator.userAgent
    return Boolean(agent.match(devices.iPad))
  },

  isSafari: () => {
    const agent = window.navigator.userAgent
    return Boolean(agent.match(browsers.Safari) && !agent.match(browsers.Chrome) && !agent.match(browsers.ChromeIos))
  },

  isIphoneSafari: () => device.isIphone() && device.isSafari()
}

export default device
