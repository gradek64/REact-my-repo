# hex2rgba

Converts a hex code to an rgba value. Can also pass through an alpha value to be returned.

All credit goes to this stackoverflow answer: https://stackoverflow.com/a/21648508

## Usage

```jsx
import { hex2rgba } from '@sainsburys-tech/boltui-utils'

hex2rgba('#000000')
hex2rgba('#FFF')
hex2rgba('#e1e1e1')
hex2rgba('#eee', 0.5)
hex2rgba('#000', 0)
```
