# Fuzzy Mail Match

Takes possibly misspelled email address string and returns the closest matching email address.

```js
import { fuzzyMailCheck } from '@sainsburys-tech/boltui-utils'

const valid = fuzzyMailCheck('yourValid@email.co')
// => domain@gmail.com

const invalid = fuzzyMailCheck('invalid')
// => undefined
```

Optionally, pass a custom config object:

```js
const customConfig = {
  domains: ['greg.com'],                      
  topLevelDomains: ['greg'],       
  secondLevelDomains: ['com'], 
}

const suggestions = fuzzyMailCheck('info@grego.co', customConfig)
// => info@greg.com
```