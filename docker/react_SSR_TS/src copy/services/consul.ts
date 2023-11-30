import consul from 'consul'
import { Features, FeatureValue } from '../types/features'
import hash from 'object-hash'
import { HashDoesNotMatchException } from '../exceptions'

interface ConsulData {
  LockIndex: number
  Key: string
  Flags: number
  Value: string
  CreateIndex: number
  ModifyIndex: number
}

const CONSUL_KEY = 'config/ui-payment/stub/data'

let consulData: ConsulData | undefined = undefined
let valueHash: string | undefined

let Consul: consul.Consul

if (typeof window === 'undefined') {
  Consul = consul({
    host: 'localhost',
    secure: false,
    port: '8500',
  })

  const watch = Consul.watch({
    method: Consul.kv.get,
    options: { key: CONSUL_KEY },
    backoffFactor: 1000,
  })

  watch.on('change', (data: ConsulData) => {
    consulData = data
    valueHash = hash(data.Value)
  })

  watch.on('error', (error) => {
    console.log(`Consul: There has been an error\n${error}`)
    console.log(
      `Consul: You have probably forgot to start consul using yarn consul:deploy`
    )
  })
}

export const getConsulData = async (): Promise<ConsulData> => {
  while (!consulData) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }
  return consulData
}

export const getFeatures = async (): Promise<Features> => {
  const _consulData = await getConsulData()

  // TODO: expand types to include config as well
  const features: Features = JSON.parse(_consulData.Value).features
  return features
}

export const getConsulHash = () => valueHash

export const setFeatures = async (
  newFeatures: Features,
  requestHash: string
): Promise<{ features: Features; hash: string }> => {
  const _consulData = await getConsulData()

  if (requestHash !== valueHash) {
    throw new HashDoesNotMatchException()
  }

  const newConfiguration = {
    config: JSON.parse(_consulData.Value).config,
    features: newFeatures,
  }

  const newConfigurationStringified = JSON.stringify(
    newConfiguration,
    null,
    '\t'
  )

  return new Promise((resolve, reject) => {
    Consul.kv.set(
      {
        key: CONSUL_KEY,
        value: newConfigurationStringified,
      },
      (err) => {
        if (err) {
          reject(err)
        }

        resolve({
          features: newConfiguration.features,
          hash: hash(newConfigurationStringified),
        })
      }
    )
  })
}
