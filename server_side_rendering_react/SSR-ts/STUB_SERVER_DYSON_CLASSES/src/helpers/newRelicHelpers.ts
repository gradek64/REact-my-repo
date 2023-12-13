import { canUseDom } from '@sainsburys-tech/boltui-utils'

export const canUseNewRelic = (): boolean =>
  /*
    Object.prototype.hasOwnProperty.call(...) is used as a safe way to call hasOwnProperty in case an
    object does not inherit its prototype from Object.Prototype
  */
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  canUseDom() && !!window.newrelic && Object.prototype.hasOwnProperty.call(window.newrelic, 'addPageAction')

export const maskPersonalData = (data: string): string => {
  let masked: string

  masked = data.replace(/[a-z]/g, 'x')
  masked = masked.replace(/[A-Z]/g, 'X')
  masked = masked.replace(/[0-9]/g, '0')

  return masked
}
