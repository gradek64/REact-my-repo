# isEmpty

> ~143 bytes gzipped

Determines whether or not an array or object is empty.

## Usage

```jsx
import { isEmpty } from '@sainsburys-tech/boltui-utils'

isEmpty([1, 2, 3, 4]) // false
isEmpty({ name: 'hello world' }) // false
isEmpty('hello world') // false
isEmpty([]) // true
isEmpty({}) // true
isEmpty(null) // true
```
