# LocalStorage With Expiration

1. Store the expected time of expiry along with the original information to be stored
2. When getting the item, compare the current time with the stored expiry time
3. If the current time is greater than stored expiry time, return `null` and remove the item from storage; otherwise, return the original information.

## Usage

```jsx
import { setLocalStorageWithExpiry, getLocalStorageWithExpiry } from '@sainsburys-tech/boltui-utils'

// set one day TTL, in milliseconds
setLocalStorageWithExpiry('food', ['banana'], 86400000)

const item = getLocalStorageWithExpiry('food')
```
