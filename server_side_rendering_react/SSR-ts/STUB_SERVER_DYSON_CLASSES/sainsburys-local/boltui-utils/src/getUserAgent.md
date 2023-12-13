# getUserAgent helper function

> ~1050 bytes gzipped

Returns an object with a couple helpful user agent values:

```json
{
  "name": "chrome",
  "os": "Mac OS",
  "version": 69,
  "supported": true
}
```

## Usage

```jsx
import { getUserAgent } from '@sainsburys-tech/boltui-utils'

getUserAgent().supported // boolean value if current browser is supported against the table below
```

&nbsp;

## Mobile Browsers

|                               Browser                                | Functional Support | Full Cosmetic Support |
| :------------------------------------------------------------------: | :----------------: | :-------------------: |
|  ![Chrome](http://media.4rgos.it/i/Argos/Chrome_Icon.png?w=20&h=20)  |      **38+**       |        **38+**        |
| ![Firefox](http://media.4rgos.it/i/Argos/Firefox_Icon.png?w=20&h=20) |       **8+**       |        **12+**        |
|  ![Safari](http://media.4rgos.it/i/Argos/Safari_Icon.png?w=20&h=20)  |       **7+**       |        **8+**         |
|   ![Opera](http://media.4rgos.it/i/Argos/Opera_Icon.png?w=20&h=20)   |      **14+**       |        **14+**        |

## Desktop Browsers

|                                  Browser                                  | Functional Support | Full Cosmetic Support |
| :-----------------------------------------------------------------------: | :----------------: | :-------------------: |
|    ![Chrome](http://media.4rgos.it/i/Argos/Chrome_Icon.png?w=20&h=20)     |      **29+**       |        **40+**        |
|   ![Firefox](http://media.4rgos.it/i/Argos/Firefox_Icon.png?w=20&h=20)    |      **35+**       |        **45+**        |
| ![IE](http://media.4rgos.it/i/Argos/Internet_Exlporer_Icon.png?w=20&h=20) |      **11+**       |        **11+**        |
|      ![Edge](http://media.4rgos.it/i/Argos/Edge_Icon.png?w=20&h=20)       |      **14+**       |        **14+**        |
|    ![Safari](http://media.4rgos.it/i/Argos/Safari_Icon.png?w=20&h=20)     |       **9+**       |        **45+**        |
|     ![Opera](http://media.4rgos.it/i/Argos/Opera_Icon.png?w=20&h=20)      |      **37+**       |        **37+**        |
