# Findability URL Helper

## Usage

Use the module like any usual node module.

```js
import { getSearchPath, encode } from '@sainsburys-tech/boltui-utils'
```

```
Available functions:
  getSearchPath()
  encode()
```

```
getSearchPath('washing machine', {
  categoryId: 33012832
})
```

The above shows a simple input to the module, the method would then return the
following.

```
/search/washing-machine/category:33012832/
```

# Findability URL Builder V1.x

In this version of the module the way in which filters are passed to the module
varies. They are still passed in the filterUriFragments object, however, they
are grouped by type into arrays.

## Usage

```
getSearchPath('washing machine', {
  categoryId: 33012832,
  filterUriFragments: {
    'brands': [
        'colourmatch+by+argos',
        'flair+rugs',
        'home+by+argos'
    ],
    'colour group': [
        'reds'
    ]
  },
  'sortBy': {
    relevance: 'desc'
  }
})
```

The keys in the filterUriFragments represents the facet Id and the values inside
each array are the filter values.The values of the filter must be encoded as
they would by the search API. The reason why we don't encode them in this module
is because it would tightly couple it to the search API. This would result in
any changes to the encoding from the API breaking not only this module but also
any users of this module.

Please note, categoryId must be passed as its own property, external to the
filterUriFragments. It will be ignored if it is passed as part of the
filterUriFragments object.
