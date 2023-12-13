import React, { Fragment, ReactElement } from 'react'

export const camelCase = (str: string): string =>
  str
    .replace(/\s(.)/g, (char: string): string => char.toUpperCase())
    .replace(/\s/g, '')
    .replace(/^(.)/, (char: string): string => char.toLowerCase())

type MatchStart = number
type MatchEnd = number
type Match = [MatchStart, MatchEnd]
type Matches = Match[]
interface MatchedStringProps {
  string: string
  matches: Matches
}

export const MatchedString = ({ string, matches }: MatchedStringProps): ReactElement => {
  let cursor = 0
  return (
    <span>
      {matches.map((match) => {
        const normal = string.slice(cursor, match[0])
        const bold = string.slice(match[0], match[1])

        cursor = match[1]
        return (
          <Fragment key={normal}>
            {normal}
            <strong>{bold}</strong>
          </Fragment>
        )
      })}

      {string.slice(cursor)}
    </span>
  )
}

export const stripWhitespace = (value: string): string => value.replace(/\s+/g, '')

export const trimWhitespace = (value: string): string => value.trim()

export const stripNonNumbers = (value: string): string => value.replace(/[^0-9]/g, '')
