# formatVariants

> ~150 bytes gzipped

Format a list of product variants into readable array split into types

## Usage

```jsx
import { formatVariants } from '@sainsburys-tech/boltui-utils'

const variants = [...]
const currentVariantPartNumber = '1234123'
const formattedVariants = formatVariants(variants, currentVariantPartNumber);
```

Returns

```
[
    {
        type: 'Colour',
        products: [
            {
                partNumber: '1234123',
                value: 'Red',
                shortValue: 'Red',
                isActive: true
            }
        ]
    },
    { type: 'Sizes', products: [] },
    { type: 'Bed sizes', products: [] }
]
```
