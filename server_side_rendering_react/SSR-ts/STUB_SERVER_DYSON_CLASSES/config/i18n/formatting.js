import { formatPrice } from '@sainsburys-tech/boltui-utils'
import { formatThousandthSeperator } from '../../src/helpers/numberHelpers'

export default function formatting(value, format) {
  if (format === 'price') {
    return formatPrice(value)
  }

  if (format === 'seperator') {
    return formatThousandthSeperator(value)
  }

  return value
}
