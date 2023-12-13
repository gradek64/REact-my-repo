# formatPrice

> ~150 bytes gzipped

Format a number and a currency into a price

## Usage

```jsx
import { formatPrice } from '@sainsburys-tech/boltui-utils'

const price = formatPrice(400.5, '£') // returns '£400.50'

const price = formatPrice(1235300.45454, '$') // returns '$1,235,300.45'
```
