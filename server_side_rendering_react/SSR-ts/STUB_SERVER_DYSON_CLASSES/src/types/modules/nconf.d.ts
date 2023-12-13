import 'nconf'

type config = {
  // These are passed in by the command line
  ENV_CONFIG: string
  NODE_ENV: string

  // These are set in all of our envconfig files
  ENV: string
  HEADER_ENV: string
  GATEWAY_API: string
  ACCOUNT_API: string
  WCS_API: string
  SESSION_MANAGER_API: string
  MARKETING_PREFERENCE_API: string
  RECEIPT_API: string
  CONSUL: string
  CONSUL_ENV: string
  BOSUN_CONFIG_MAP: string
  VAULT_ENV: string
  VAULT_ROLE: string
  // This environment variable is provided by Bosun
  BOSUN_ENV?: 'prd' | 'stg' | 'dev'

  // These environment variables are provided by Vault
  PRODUCT_GATEWAY_API_KEY: string
  PRODUCT_GATEWAY_API_URL: string

  // These are set in some of our envconfig files
  NEW_RELIC_ENABLED?: string
  NEW_RELIC_BROWSER_MONITORING_ATTRIBUTES_ENABLED?: string
  NEW_RELIC_LABELS?: string
  NEW_RELIC_APP_NAME?: string
  ACCOUNT_URL?: string

  // Passed in at build time in the Dockerfile.bosun
  PUBLIC_PATH_BOSUN?: string
}

declare module 'nconf' {
  export function get(): config
  export function get<K extends keyof config>(key: K): config[K]
}
