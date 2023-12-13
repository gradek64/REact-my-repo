const thousandsSeperator = (number = '0') => number.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')

const formatPrice = (price, currency = '£') => {
  const numRegex = /^([+-]?)((?:\d*\.)?\d+)$/
  const match = price.toFixed(2).match(numRegex)
  // replace('-', '−') makes a screen reader understand it's a minus not a dash
  return `${match[1] ? `${match[1].replace('-', '−')} ` : ''}${currency}${thousandsSeperator(match[2])}`
}

export default formatPrice
