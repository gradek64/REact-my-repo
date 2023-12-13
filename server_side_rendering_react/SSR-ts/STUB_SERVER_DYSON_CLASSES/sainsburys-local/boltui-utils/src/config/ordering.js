/**
 * Config map for order of variants
 *
 * Config.entry: Array
 *  @key: Type of variant
 *  @value: Array of Matcher entries
 *
 * Matcher.entry: Array
 *  @first: Expression to match against
 *  @second: Sorting functions or array of those
 *  @remaining: Ignored
 *
 * Note: order of matcher entries is preserved
 */
const variants = {
  variants: {
    colour: [['white'], ['(.+)', 'desc']],
    size: [
      ['(newborn)'],
      ['up to (\\d+) mo?n?ths?', 'asc'],
      ['(\\d+(?:\\.\\d+)?) months?', 'asc'],
      ['(\\d+(?:\\.\\d+)?)-(?:\\d+)(?:\\.\\d+)? months', 'asc'],
      ['(\\d+(?:\\.\\d+)?) years?', 'asc'],
      ['(\\d+(?:\\.\\d+)?)-(?:\\d+)(?:\\.\\d+)? years', 'asc'],
      ['(a+)', 'desc'],
      ['(b|c)', 'desc'],
      ['(d+)', 'asc'],
      ['(e)'],
      ['(f+)', 'asc'],
      ['(g+)', 'asc'],
      ['(h+)', 'asc'],
      ['(j+)', 'asc'],
      ['(one size)'],
      ['(x+s)', 'desc'],
      ['((extra ?)+) small', 'desc'],
      ['(s|small)'],
      ['(m|r|medium|regular)'],
      ['(l|large)'],
      ['((extra ?)+) large', 'asc'],
      ['(x+l)', 'asc'],
      ['w(\\d+) l(\\d+)', ['asc', 'asc']],
      ['(\\d+(?:\\.\\d+)?)(a+|b|c|d+|e|f+|g+|h+|j+|k|x+s|s|r|l|x+l)?', ['asc', 'size']],
      ['(small single|single|twin|small double|double|queen|kingsize|superking)', 'bed size'],
      ['(.+)', 'desc']
    ],
    service: [['storepickup'], ['homedelivery'], ['installation'], ['(.+)', 'desc']],
    'bed size': [
      ['small single'],
      ['single'],
      ['twin'],
      ['small double'],
      ['double'],
      ['queen'],
      ['kingsize'],
      ['superking'],
      ['(.+)', 'desc']
    ],
    '.+': [['(.+)', 'desc']]
  }
}

export default variants
