import React from 'react'
import { render } from '../utils/@testing-library/renderer'
import { camelCase, MatchedString, stripWhitespace, trimWhitespace, stripNonNumbers } from './stringHelpers'

describe('camelCase helper', () => {
  test('Should transform "camel case" to "camelCase"', () => {
    expect(camelCase('camel case')).toBe('camelCase')
  })
  test('Should transform "camel Case" to "camelCase"', () => {
    expect(camelCase('camel Case')).toBe('camelCase')
  })
  test('Should transform "Camel case" to "camelCase"', () => {
    expect(camelCase('Camel case')).toBe('camelCase')
  })
  test('Should transform "Camel Case" to "camelCase"', () => {
    expect(camelCase('Camel Case')).toBe('camelCase')
  })
  test('Should not transform "CAMEL CASE" to "camelCase"', () => {
    expect(camelCase('CAMEL CASE')).not.toBe('camelCase')
    expect(camelCase('CAMEL CASE')).toBe('cAMELCASE')
  })
  test('Should not transform "CaMeL cAsE" to "camelCase"', () => {
    expect(camelCase('CaMeL cAsE')).not.toBe('camelCase')
    expect(camelCase('CaMeL cAsE')).toBe('caMeLCAsE')
  })
})

describe('MatchedString component helper', () => {
  test('Bolding text between two parts of the text', () => {
    const { container } = render(
      <MatchedString
        string='1 Abbotsbury Close, London, W14 ...'
        matches={[
          [3, 6],
          [28, 31],
        ]}
      />,
    )
    expect(container.querySelector('span').outerHTML).toBe(
      '<span>1 A<strong>bbo</strong>tsbury Close, London, <strong>W14</strong> ...</span>',
    )
  })
})

describe('stripWhitespace helper', () => {
  test('Strips all space (codepoint 32, U+0020) characters', () => {
    const { container } = render(
      <pre>&#32;The&#32;quick&#32;brown&#32;fox&#32;jumps&#32;over&#32;the&#32;lazy&#32;dog&#32;</pre>,
    )
    const { textContent } = container.querySelector('pre')
    expect(stripWhitespace(textContent)).toBe('Thequickbrownfoxjumpsoverthelazydog')
  })
  test('Strips all tab (codepoint 9, U+0009) characters', () => {
    const { container } = render(<pre>&#9;The&#9;quick&#9;brown&#9;fox&#9;jumps&#9;over&#9;the&#9;lazy&#9;dog&#9;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(stripWhitespace(textContent)).toBe('Thequickbrownfoxjumpsoverthelazydog')
  })
  test('Strips all line feed (codepoint 10, U+000A) characters', () => {
    const { container } = render(
      <pre>&#10;The&#10;quick&#10;brown&#10;fox&#10;jumps&#10;over&#10;the&#10;lazy&#10;dog&#10;</pre>,
    )
    const { textContent } = container.querySelector('pre')
    expect(stripWhitespace(textContent)).toBe('Thequickbrownfoxjumpsoverthelazydog')
  })
  test('Strips all line tabulation (codepoint 11, U+000B) characters', () => {
    const { container } = render(
      <pre>&#11;The&#11;quick&#11;brown&#11;fox&#11;jumps&#11;over&#11;the&#11;lazy&#11;dog&#11;</pre>,
    )
    const { textContent } = container.querySelector('pre')
    expect(stripWhitespace(textContent)).toBe('Thequickbrownfoxjumpsoverthelazydog')
  })
  test('Strips all form feed (codepoint 12, U+000C) characters', () => {
    const { container } = render(
      <pre>&#12;The&#12;quick&#12;brown&#12;fox&#12;jumps&#12;over&#12;the&#12;lazy&#12;dog&#12;</pre>,
    )
    const { textContent } = container.querySelector('pre')
    expect(stripWhitespace(textContent)).toBe('Thequickbrownfoxjumpsoverthelazydog')
  })
  test('Strips all carriage return (codepoint 13, U+000D) characters', () => {
    const { container } = render(
      <pre>&#13;The&#13;quick&#13;brown&#13;fox&#13;jumps&#13;over&#13;the&#13;lazy&#13;dog&#13;</pre>,
    )
    const { textContent } = container.querySelector('pre')
    expect(stripWhitespace(textContent)).toBe('Thequickbrownfoxjumpsoverthelazydog')
  })
})

describe('trimWhitespace helper', () => {
  test('Trims space (codepoint 32, U+0020) characters from both ends', () => {
    const { container } = render(<pre>&#32;&#32;&#32;The quick brown fox jumps over the lazy dog&#32;&#32;&#32;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(trimWhitespace(textContent)).toBe('The quick brown fox jumps over the lazy dog')
  })
  test('Trims tab (codepoint 9, U+0009) characters from both ends', () => {
    const { container } = render(<pre>&#9;&#9;&#9;The quick brown fox jumps over the lazy dog&#9;&#9;&#9;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(trimWhitespace(textContent)).toBe('The quick brown fox jumps over the lazy dog')
  })
  test('Trims line feed (codepoint 10, U+000A) characters from both ends', () => {
    const { container } = render(<pre>&#10;&#10;&#10;The quick brown fox jumps over the lazy dog&#10;&#10;&#10;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(trimWhitespace(textContent)).toBe('The quick brown fox jumps over the lazy dog')
  })
  test('Trims line tabulation (codepoint 11, U+000B) characters from both ends', () => {
    const { container } = render(<pre>&#11;&#11;&#11;The quick brown fox jumps over the lazy dog&#11;&#11;&#11;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(trimWhitespace(textContent)).toBe('The quick brown fox jumps over the lazy dog')
  })
  test('Trims form feed (codepoint 12, U+000C) characters from both ends', () => {
    const { container } = render(<pre>&#12;&#12;&#12;The quick brown fox jumps over the lazy dog&#12;&#12;&#12;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(trimWhitespace(textContent)).toBe('The quick brown fox jumps over the lazy dog')
  })
  test('Trims carriage return (codepoint 13, U+000D) characters from both ends', () => {
    const { container } = render(<pre>&#13;&#13;&#13;The quick brown fox jumps over the lazy dog&#13;&#13;&#13;</pre>)
    const { textContent } = container.querySelector('pre')
    expect(trimWhitespace(textContent)).toBe('The quick brown fox jumps over the lazy dog')
  })
})

describe('stripNonNumbers helper', () => {
  test('Strips all characters that are not numbers', () => {
    expect(stripNonNumbers('123abc4 5 6!@£789')).toBe('123456789')
  })
  test('Strips nothing if all numbers', () => {
    expect(stripNonNumbers('123456789')).toBe('123456789')
  })
})
