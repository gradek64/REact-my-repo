import hex2rgb from './hex2rgb'

describe('hex2rgb ', () => {
  it('should correctly calculate the rgb of a hex', () => {
    const testData = [
      {
        hex: '#000000',
        rgb: 'rgb(0,0,0)',
        rgbCypress: 'rgb(0, 0, 0)'
      },
      {
        hex: '#FFFFFF',
        rgb: 'rgb(255,255,255)',
        rgbCypress: 'rgb(255, 255, 255)'
      },
      {
        hex: '#32BD60',
        rgb: 'rgb(50,189,96)',
        rgbCypress: 'rgb(50, 189, 96)'
      },
      {
        hex: '#FFF',
        rgb: 'rgb(255,255,255)',
        rgbCypress: 'rgb(255, 255, 255)'
      },
      {
        hex: '#F60',
        rgb: 'rgb(255,102,0)',
        rgbCypress: 'rgb(255, 102, 0)'
      }
    ]
    testData.forEach((test) => {
      expect(hex2rgb(test.hex)).toEqual(test.rgb)
      expect(hex2rgb(test.hex, false)).toEqual(test.rgb)
      expect(hex2rgb(test.hex, true)).toEqual(test.rgbCypress)
      expect(hex2rgb(test.hex.toLowerCase())).toEqual(test.rgb)
      expect(hex2rgb(test.hex.toLowerCase(), false)).toEqual(test.rgb)
      expect(hex2rgb(test.hex.toLowerCase(), true)).toEqual(test.rgbCypress)
    })
  })
  it('it returns default values if no hex code sent', () => {
    const hex = 'invalid request'
    expect(hex2rgb(hex)).toEqual('rgb(0,0,0)')
    expect(hex2rgb(hex, false)).toEqual('rgb(0,0,0)')
    expect(hex2rgb(hex, true)).toEqual('rgb(0, 0, 0)')
  })
})
