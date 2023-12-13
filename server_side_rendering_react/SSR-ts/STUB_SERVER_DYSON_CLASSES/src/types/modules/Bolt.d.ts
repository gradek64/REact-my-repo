declare module '@sainsburys-tech/boltui-utils' {
  export function canUseDom(): boolean
  export function fuzzyMailCheck(email: string): string | undefined
  export function formatPrice(price: number): number
  export function getUserAgent(): { os: string; version: string }
  export const commonEmailDomains: string[]
  export namespace smooth {
    export function scrollHere(
      destination: number | HTMLElement,
      padding?: number,
      duration?: number,
      easing?: string,
      callback?: () => void,
    ): void
  }
}

declare module '@sainsburys-tech/boltui-hooks' {
  import { DefaultTheme, ThemeContext } from 'styled-components'

  export function useStyledTheme(Theme: typeof ThemeContext): DefaultTheme
  export function useResizeEvent({ resizeHandler }: { resizeHandler: () => void }): void
}

declare module '@sainsburys-tech/bolt-node' {
  type URLConfig = {
    dev: string
    staging: string
    production: string
  }

  type APIConfig = {
    key: string
    url: string
  }

  type VaultClient = import('node-vault').client & {
    getAPIGatewayConfig(api: string): Promise<APIConfig>
  }

  export const vault: {
    VAULT_PROXY_URL: URLConfig
    VAULT_URL: URLConfig

    /**
     * Gets the token needed to start initialising with Vault.
     */
    getInitialAuthToken(role: string, environment: string): Promise<string>

    /**
     * Wrapper around node-vault which logs your app in automatically.
     *
     * Also adds a `getAPIGatewayConfig` method to easily get the config for an
     * API using the API Gateway.
     */
    createVaultClient(role: string, environment: string): Promise<VaultClient>
  }
}

type IconProps = React.SVGProps<SVGSVGElement>

declare module '@sainsburys-tech/bolt-icons' {
  const PaymentIcon: React.FunctionComponent<IconProps>
  const HelpIcon: React.FunctionComponent<IconProps>
  const PercentIcon: React.FunctionComponent<IconProps>
  const ClockIcon: React.FunctionComponent<IconProps>
  const OneManDeliveryIcon: React.FunctionComponent<IconProps>
  const HomeIcon: React.FunctionComponent<IconProps>
  const PhoneIcon: React.FunctionComponent<IconProps>
  const ChevronIcon: React.FunctionComponent<IconProps & { dir?: 'up' | 'left' | 'right' }>
  const StoreIcon: React.FunctionComponent<IconProps>
  const TwoManDeliveryIcon: React.FunctionComponent<IconProps>
  const LocationIcon: React.FunctionComponent<IconProps>
  const EmailIcon: React.FunctionComponent<IconProps>
  const UnavailableIcon: React.FunctionComponent<IconProps>
  const InsuranceIcon: React.FunctionComponent<IconProps>
  const AlertIcon: React.FunctionComponent<IconProps>
  const AvailableIcon: React.FunctionComponent<IconProps & { filled?: boolean }>
  const InfoIcon: React.FunctionComponent<IconProps>
  const ArgosCardIcon: React.FunctionComponent<IconProps>
  const MonthlyPaymentPlanIcon: React.FunctionComponent<IconProps>
  const SettingsIcon: React.FunctionComponent<IconProps>
}

declare module '@sainsburys-tech/bolt-footer' {
  export const legalText: { ARGOS: string; HABITAT: string }
  const Footer: React.FunctionComponent<{
    /**
     * Either default of checkout footer
     */
    type?: 'default' | 'checkout'
    /**
     * If navigation/primary section should not be rendered
     */
    navigationHidden?: boolean
    /**
     * If grid/secondary section should not be rendered
     */
    gridHidden?: boolean
    /**
     * If brand section should not be rendered
     */
    brandHidden?: boolean
    /**
     * If legal section should not be rendered
     */
    legalHidden?: boolean
    /**
     * If credit section should not be rendered
     */
    creditHidden?: boolean
    /**
     * Optionally, for SSR, set to {true} to avoid using <InView/>
     */
    nativeLazy?: boolean
    /**
     * Specify the brand name
     */
    brand?: string
    /**
     * Specify an optional data-test attribute to be added to your Footer for e2e testing
     */
    'data-test'?: string
    /**
     * Optional prop to pass through onClick events when legal footer links are clicked
     */
    onClick?: () => void
  }>
  export default Footer
}
