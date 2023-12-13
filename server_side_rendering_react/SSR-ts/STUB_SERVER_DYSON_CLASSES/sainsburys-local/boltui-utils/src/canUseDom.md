# canUseDom

> ~138 bytes gzipped

Determines whether or not the code is being ran in an environment that has access to the DOM. Used for server/client recognition.

## Usage

```jsx
import { canUseDom } from '@sainsburys-tech/boltui-utils'

// canUseDom on server
canUseDom() // false

// canUseDom on client
canUseDom() // true
```
