import config from '../config/config'

export const formatThousandthSeperator = (number: number): string => {
  return number.toLocaleString('en-GB')
}

export function rem(px: string, rootFontSize = config.app.rootFontSize): string {
  return `${parseFloat(px) / rootFontSize}rem`
}
