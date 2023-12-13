# Consent Cookie Helper

Helper methods for handling consent cookies.

## Usage

Use the module like any usual default node module as an object.

```js
import { consentCookieHelper } from '@sainsburys-tech/boltui-utils'
```

```
Available constants:
  consentCookieHelper.cookieName
  consentCookieHelper.categories
```

```
Available functions:
  consentCookieHelper.getConsentCookieValue()
  consentCookieHelper.getCategorySection()
  consentCookieHelper.hasOptedIn()
```

## Usage

### getConsentCookieValue

```
consentCookieHelper.getConsentCookieValue('other_cookie=abc;CONSENTMGR=consent:true|ts:1575020721807')
```

```
consentCookieHelper.getConsentCookieValue('other_cookie=abc;CONSENTMGR=c1:1|c2:0|c3:1|c4:0|c5:0|ts:1575020721807|consent:true')
```

### getCategorySection

```
consentCookieHelper.getCategorySection('c1:1|c2:0|c3:1|c4:0|c5:0|ts:1575020721807|consent:true', 'marketing')
```

### hasOptedIn

```
consentCookieHelper.hasOptedIn('c1:1')
```
