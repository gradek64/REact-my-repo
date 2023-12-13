# hex2rgba

Converts a hex code to an rgb value, changes format if required in cypress test

Credit to:  
https://css-tricks.com/converting-color-spaces-in-javascript/#hex-to-rgb

## Usage

```jsx
import { hex2rgb } from '@sainsburys-tech/boltui-utils'

hex2rgb('#000000')
hex2rgb('#FFF')
hex2rgb('#e1e1e1')
hex2rgb('#000000', false)
hex2rgb('#FFF', true)
```
