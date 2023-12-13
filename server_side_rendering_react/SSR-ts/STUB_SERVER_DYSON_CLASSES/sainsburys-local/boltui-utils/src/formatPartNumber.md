# formatPartNumber

> ~150 bytes gzipped

Format a product part number into a SKU.

Returns unchanged value if not seven characters long.

## Usage

```jsx
import { formatPartNumber } from '@sainsburys-tech/boltui-utils'

const sku = formatPartNumber('1234567') // returns '123/4567'

const sku = formatPartNumber('tuc123456789') // returns 'tuc123456789'
```
