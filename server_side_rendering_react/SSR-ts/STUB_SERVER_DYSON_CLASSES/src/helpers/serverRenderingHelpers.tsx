import React from 'react'
import { Request, Response } from 'express'
import { nconf } from '../../config/envconfig/envConfig'
import Logger from '../utils/Logger'
import { ErrorPageTypeParam } from '../types/routes'

export const isDevelopment = () => !(nconf.get('NODE_ENV') === 'production' || nconf.get('NODE_ENV') === 'staging')

const publicPath: string = nconf.get('PUBLIC_PATH_BOSUN') || '/assets/payment/'

// eslint-disable-next-line no-unused-vars
export function internalErrorHandler(error: { message: string; stack: string }, req: Request, res: Response, _next) {
  Logger.error({ name: 'server', msg: 'Internal server error', detail: error.message })

  if (!isDevelopment()) {
    return res.redirect(`error?type=${ErrorPageTypeParam.INTERNAL_ERROR}`)
  }

  return res.status(500).send(`
        <img src="https://media.giphy.com/media/uOAXDA7ZeJJzW/giphy.gif" /><br />
        <pre>${error.message}</pre>
        <pre>${error.stack}</pre>
      `)
}

// Manifest doesn't exist in dev-mode, hence the hacky try/catch around the
// require statement. In dev mode we can just pull in `chunk-home.js` so we
// don't need the manifest, whereas in prod mode we need to use unique file
// names (i.e. `chunk-home.a1b2c3d4.js`) which comes from the manifest.
let manifest = {}

try {
  // If you're here because of the "Module not found" warning in dev mode,
  // ignore it!

  // eslint-disable-next-line import/no-unresolved, global-require, @typescript-eslint/no-unsafe-assignment
  manifest = require('../../dist/asset-manifest.json')
} catch (e) {
  if (!isDevelopment()) {
    throw new ReferenceError('The manifest file is missing! ')
  }
}

// Some modules have multiple files (e.g. formik is split into it's own file
// that is shared between all modules that use a form)
const moduleFiles: { [key: string]: string[] } = {}
Object.keys(manifest).forEach((file: `${string}.js`) => {
  const name = file.match(/(.*).(js)/)?.[1] // remove file extension
  const modules = name?.split('~')

  modules?.forEach((module) => {
    if (module === 'vendors') return
    if (!moduleFiles[module]) moduleFiles[module] = []

    moduleFiles[module].push(manifest[file])
  })
})

// Gets all the chunked JS files as well as the base 'client' file. 'client'
// must be the last thing loaded as it depends on the prev files.
export const getJsFiles = (modules: string[] = []) => {
  const files: string[] = []

  ;[...modules, 'client'].forEach((module) => {
    if (isDevelopment()) {
      files.push(`${publicPath}client/${module === 'client' ? module : `chunk-${module}`}.js`)
    } else if (moduleFiles[module]) {
      moduleFiles[module].forEach((file) => file.endsWith('.js') && !files.includes(file) && files.push(file))
    }
  })

  return (
    <>
      {files.map((file) => (
        <script key={file} type='text/javascript' charSet='UTF-8' src={file} />
      ))}
    </>
  )
}



// Gets the CSS file for the theme, defaults to argos
export const getThemeCss = (theme) => {
  if (theme === 'HABITAT') return 'bolt-habitat.min.css'
  if (theme === 'TU') return 'bolt-tu.min.css'

  return 'bolt.min.css'
}

export const getTealiumBrand = (brand) => {
  if (brand === 'HABITAT') return 'habitat'
  if (brand === 'TU') return 'tuc'

  return 'main'
}

export const getTealiumEnv = () => (nconf.get('NODE_ENV') === 'production' ? 'prod' : 'qa')

/**
 * Checks if the given value is NOT in the list of values that the condition
 * accepts. If the condition has no possible values, then all values are a
 * match.
 */
const conditionDoesNotMatchValue = (possibleValues, value) =>
  Array.isArray(possibleValues) &&
  !possibleValues.map((possibleValue) => String(possibleValue).toLowerCase()).includes(String(value).toLowerCase())

/**
 * Checks if any of the given values are NOT in the list of values that the
 * condition accepts. Only one of the values needs to match. If the condition
 * has no possible values, then all values are a match.
 */
const conditionDoesNotMatchAnyValue = (possibleValues, values: string[]) =>
  Array.isArray(possibleValues) &&
  !possibleValues.some((item) =>
    values.map((value) => String(value).toLowerCase()).includes(String(item).toLowerCase()),
  )

type ConsulValue = boolean | string | number | { value?: string }

const getConsulValue = (consulValue: ConsulValue, conditionKeyValueMap) => {
  if (typeof consulValue === 'boolean' || typeof consulValue === 'string' || typeof consulValue === 'number') {
    return consulValue
  }

  if (typeof consulValue !== 'object' || consulValue === null) {
    return false
  }

  const conditionNotSatisfied = Object.entries(conditionKeyValueMap).some(([conditionKey, conditionValue]) =>
    Array.isArray(conditionValue)
      ? conditionDoesNotMatchAnyValue(consulValue[conditionKey], conditionValue)
      : conditionDoesNotMatchValue(consulValue[conditionKey], conditionValue),
  )

  if (conditionNotSatisfied) {
    return false
  }

  if (typeof consulValue.value !== 'undefined') {
    return consulValue.value
  }

  return true
}

/**
 * Given a consul object (see below), calculate if the current user qualifies for the consul, given
 * their brand, channel, fulfilment type and segment.
 *
 * e.g.
 *
 * if the consul object is:
 *
 * ```js
 * {
 *   season: [
 *     {
 *       brands: [Brand.ARGOS],
 *       channels: [Channel.WEB],
 *       fulfilmentType: [FulfilmentType.COLLECTION],
 *       value: 'pride',
 *     },
 *     {
 *       brands: [Brand.ARGOS],
 *       channels: [Channel.WEB],
 *       fulfilmentType: [FulfilmentType.COLLECTION],
 *       value: 'xmas',
 *     },
 *     {
 *       value: 'default',
 *     },
 *   ],
 *   cape: {
 *     brands: [Brand.ARGOS, Brand.HABITAT],
 *     channels: [Channel.WEB],
 *     fulfilmentType: [FulfilmentType.COLLECTION],
 *   },
 * }
 * ```
 *
 * and the brand is HABITAT, channel WEB and fulfilmentType WEB, then it will return
 *
 * ```js
 * {
 *  season: 'default',
 *  cape: true,
 * }
 * ```
 *
 * @param config - the consul config
 * @param details - the details of the current request (e.g. brand, fulfilment, channel)
 */
export const calculateRequestConfig = (config: [string, ConsulValue], details) => {
  const flatConfig = {}

  Object.entries(config).forEach(([consulKey, consulValue]) => {
    if (Array.isArray(consulValue)) {
      for (let i = 0; i < consulValue.length; i += 1) {
        const consulOption = consulValue[i] as ConsulValue
        const actualConsulValue = getConsulValue(consulOption, details)

        if (actualConsulValue !== false) {
          flatConfig[consulKey] = actualConsulValue
          return
        }
      }
      flatConfig[consulKey] = false
      return
    }

    flatConfig[consulKey] = getConsulValue(consulValue, details)
  })

  return flatConfig
}

/**
 * Return the user agent operating system
 * @param {Express.Request} req
 */
export const getUserAgentOS = (req: Request) => {
  const userAgent = req.get('User-Agent') ?? ''

  if (userAgent.startsWith('Argos|')) {
    return 'ANDROID'
  }

  if (userAgent.startsWith('Argos Consumer App |')) {
    return 'IOS'
  }

  return 'OTHER'
}

export const isGuestCheckoutEnabled = (toggle: ConfigToggle, query: QueryObject): boolean => {
  const parsedToggle = (typeof toggle === 'string' ? JSON.parse(toggle) : toggle) as boolean | ConfigObject

  if (typeof parsedToggle === 'boolean') return parsedToggle

  const allowedFulfilments = (parsedToggle.fulfilments || []) as string[]
  const fulfilmentQuery = query.fulfilment || ''

  return allowedFulfilments.includes(fulfilmentQuery.toUpperCase())
}

type QueryObject = Record<string, string>
type ConfigObject = Record<string, unknown>
type ConfigToggle = string | boolean | ConfigObject
