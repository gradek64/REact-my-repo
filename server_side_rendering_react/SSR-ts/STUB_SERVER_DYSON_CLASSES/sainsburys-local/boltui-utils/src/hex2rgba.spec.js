import hex2rgba from './hex2rgba'

describe('hex2rgba ', () => {
  it('should correctly calculate the rgba of a hex', () => {
    const testData = [
      {
        hex: '#000000',
        rgba: 'rgba(0,0,0,1)'
      },
      {
        hex: '#FFFFFF',
        rgba: 'rgba(255,255,255,1)'
      },
      {
        hex: '#32BD60',
        rgba: 'rgba(50,189,96,1)'
      },
      {
        hex: '#FFF',
        rgba: 'rgba(255,255,255,1)'
      },
      {
        hex: '#F60',
        rgba: 'rgba(255,102,0,1)'
      }
    ]
    testData.forEach((test) => {
      expect(hex2rgba(test.hex)).toEqual(test.rgba)
      expect(hex2rgba(test.hex.toLowerCase())).toEqual(test.rgba)
    })
  })
  it('should allow alpha values to be passed through', () => {
    const testData = [
      {
        hex: '#000000',
        alpha: '0.5',
        rgba: 'rgba(0,0,0,0.5)'
      },
      {
        hex: '#FFFFFF',
        alpha: '1',
        rgba: 'rgba(255,255,255,1)'
      },
      {
        hex: '#32BD60',
        alpha: '0.12345',
        rgba: 'rgba(50,189,96,0.12345)'
      },
      {
        hex: '#FFF',
        alpha: '',
        rgba: 'rgba(255,255,255,1)'
      },
      {
        hex: '#F60',
        alpha: '0',
        rgba: 'rgba(255,102,0,0)'
      }
    ]
    testData.forEach((test) => {
      expect(hex2rgba(test.hex, test.alpha)).toEqual(test.rgba)
      expect(hex2rgba(test.hex.toLowerCase(), test.alpha)).toEqual(test.rgba)
    })
  })
  it('should fail gracefully with an exception if no hex code sent', () => {
    const hex = 'hello errors'
    expect(hex2rgba(hex)).toEqual('hello errors')
    expect(hex2rgba(hex, 'test alpha')).toEqual('hello errors')
  })
})
