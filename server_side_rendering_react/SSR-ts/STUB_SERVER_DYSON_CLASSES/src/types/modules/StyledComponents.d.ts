/* eslint-disable camelcase */
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    channel: 'argos'
    color: {
      alias: {
        cta: {
          primary: {
            default: {
              background: '#008844'
              text: '#ffffff'
            }
            hover: {
              background: 'rgba(36,97,39,0.8)'
              text: '#ffffff'
            }
            active: {
              background: '#246127'
              text: '#ffffff'
            }
            disabled: {
              background: 'rgba(0,136,68,0.5)'
              text: 'rgba(255,255,255,0.5)'
              opacity: '0.5'
            }
          }
          secondary: {
            default: {
              background: 'rgba(255,255,255,0.8)'
              border: '#008844'
              text: '#008844'
            }
            hover: {
              background: 'rgba(0,136,68,0.2)'
              border: '#246127'
              text: '#246127'
            }
            active: {
              background: 'rgba(0,136,68,0.2)'
              border: '#246127'
              text: '#246127'
            }
            disabled: {
              background: 'rgba(255,255,255,0)'
              border: 'rgba(0,136,68,0.5)'
              text: 'rgba(0,136,68,0.5)'
              opacity: '0.5'
              overlay: 'rgba(255,255,255,0.5)'
            }
          }
          tertiary: {
            default: {
              background: 'rgba(0, 0, 0, 0)'
              text: '#008844'
            }
            hover: {
              background: 'rgba(240,245,225,0.6)'
              border: '#246127'
              text: '#246127'
            }
            active: {
              background: 'rgba(0,136,68,0.2)'
              border: '#008844'
              text: '#f0f5e1'
            }
            disabled: {
              background: 'rgba(0,0,0,0)'
              text: 'rgba(0,136,68,0.5)'
              opacity: '0.5'
              overlay: 'rgba(255,255,255,0.5)'
            }
          }
        }
        form: {
          default: {
            hover: {
              outline: 'rgba(55,94,169,0)'
            }
          }
          error: {
            hover: {
              outline: 'rgba(212,33,20,0)'
            }
          }
          warning: {
            hover: {
              outline: 'rgba(255,217,0,0)'
            }
          }
          disabled: {
            selected: {
              background: 'rgba(55,94,169,0.3)'
            }
          }
        }
        link: {
          default: {
            color: '#375ea9'
          }
          hover: {
            text: {
              color: '#08305f'
            }
          }
        }
        ratings: {
          filled: '#404040'
          'filled-alternate': '#c6a600'
          empty: '#d8d8d8'
          stroke: '#404040'
        }
      }
      palette: {
        'brand-1': '#375ea9'
        'brand-1-dark': '#08305f'
        'brand-1-light': '#e7eff7'
        'brand-2': '#d42114'
        'brand-2-dark': '#a50000'
        'brand-2-light': '#ffeeed'
        'brand-3': '#008844'
        'brand-3-dark': '#246127'
        'brand-3-light': '#f0f5e1'
        'brand-4': '#ffd900'
        'brand-4-dark': '#c6a600'
        'brand-4-light': '#fff5bf'
        black: '#000000'
        'blue-100': '#08305f'
        'blue-90': '#0e4174'
        'blue-80': '#114e8b'
        'blue-70': '#135ca3'
        'blue-60': '#375ea9'
        'blue-50': '#428fda'
        'blue-40': '#6ca7e2'
        'blue-30': '#95c0ea'
        'blue-20': '#bfd9f2'
        'blue-10': '#e7eff7'
        blue: '#375ea9'
        'green-100': '#19451c'
        'green-90': '#045228'
        'green-80': '#1f5321'
        'green-70': '#246127'
        'green-60': '#008844'
        'green-50': '#40a673'
        'green-40': '#79ac97'
        'green-30': '#9fc3ad'
        'green-20': '#c5dbcf'
        'green-10': '#f0f5e1'
        green: '#008844'
        'grey-100': '#0d0d0d'
        'grey-90': '#262626'
        'grey-80': '#404040'
        'grey-70': '#595959'
        'grey-60': '#737373'
        'grey-50': '#8c8c8c'
        'grey-40': '#a6a6a6'
        'grey-30': '#bfbfbf'
        'grey-20': '#d8d8d8'
        'grey-10': '#f2f2f2'
        grey: '#737373'
        'orange-100': '#7c2d12'
        'orange-90': '#9a3412'
        'orange-80': '#c2410c'
        'orange-70': '#e55000'
        'orange-60': '#f06c00'
        'orange-50': '#ff8718'
        'orange-40': '#fdba74'
        'orange-30': '#fed7aa'
        'orange-20': '#ffedd5'
        'orange-10': '#fef5f0'
        orange: '#f06c00'
        'purple-100': '#38005c'
        'purple-90': '#4a0983'
        'purple-80': '#5d11ab'
        'purple-70': '#6c18cb'
        'purple-60': '#8223fa'
        'purple-50': '#994bfb'
        'purple-40': '#af72fc'
        'purple-30': '#c69afd'
        'purple-20': '#dcc1fe'
        'purple-10': '#f3e9ff'
        'red-100': '#750000'
        'red-90': '#7f150d'
        'red-80': '#8d0000'
        'red-70': '#a50000'
        'red-60': '#d42114'
        'red-50': '#dd2e2e'
        'red-40': '#e45c5c'
        'red-30': '#ec8a8a'
        'red-20': '#f3b8b8'
        'red-10': '#ffeeed'
        red: '#d42114'
        white: '#ffffff'
        'yellow-100': '#8c7600'
        'yellow-90': '#a98e00'
        'yellow-80': '#bf9f18'
        'yellow-70': '#c6a600'
        'yellow-60': '#ffd900'
        'yellow-50': '#ffdd2e'
        'yellow-40': '#ffe55c'
        'yellow-30': '#ffec8a'
        'yellow-20': '#fff4b8'
        'yellow-10': '#fff5bf'
        yellow: '#ffd900'
      }
      content: {
        'argos-red': '#d42114'
        white: '#ffffff'
        'grey-light': '#f2f2f2'
        'grey-mid': '#a6a6a6'
        grey: '#737373'
        'grey-dark': '#404040'
        'grey-darker': '#262626'
        black: '#000000'
        'nectar-purple': '#8223fa'
        new: '#00b0e8'
        'sainsburys-orange': '#f06c00'
        sale: '#d42114'
        blue: '#375ea9'
        'blue-light': '#e7eff7'
        'orange-light': '#fbe1cf'
        orange: '#d53e10'
        'pink-light': '#ffe4eb'
        pink: '#d02647'
        'purple-light': '#efe4ee'
        purple: '#39134c'
        'teal-light': '#e0f0ef'
        teal: '#00665c'
        'yellow-light': '#fff5bf'
        yellow: '#ffd900'
      }
      monochrome: {
        white: '#ffffff'
        lighter: '#f2f2f2'
        light: '#d8d8d8'
        base: '#737373'
        dark: '#404040'
        darker: '#262626'
        black: '#000000'
      }
      semantic: {
        error: {
          lighter: '#ffeeed'
          light: '#dd2e2e'
          base: '#d42114'
          dark: '#a50000'
          darker: '#8d0000'
          text: '#ffffff'
        }
        info: {
          lighter: '#e7eff7'
          light: '#428fda'
          base: '#375ea9'
          dark: '#135ca3'
          darker: '#114e8b'
          text: '#ffffff'
        }
        success: {
          lighter: '#f0f5e1'
          light: '#40a673'
          base: '#008844'
          dark: '#246127'
          darker: '#1f5321'
          text: '#ffffff'
        }
        warning: {
          lighter: '#fff5bf'
          light: '#ffdd2e'
          base: '#ffd900'
          dark: '#c6a600'
          darker: '#bf9f18'
          text: '#404040'
        }
      }
    }
    font: {
      family: {
        base: "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        monospace: "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace"
        system: "system, -apple-system, '.SFNSText-Regular', 'San Francisco', 'Roboto', 'Oxygen-Sans', 'Ubuntu', 'Cantarell', 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif"
        ios: 'SF Pro'
        android: 'Roboto'
        brand: "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-7': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-6': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-5': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-4': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-3': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-2': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'display-1': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'label-2': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'label-1': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'body-2': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        'body-1': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        caption: "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
        link: "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
      }
      'line-height': {
        'display-7': 1.267
        'display-6': 1.292
        'display-5': 1.316
        'display-4': 1.333
        'display-3': 1.333
        'display-2': 1.3
        'display-1': 1.4444
        'label-2': 1.5
        'label-1': 1.5
        'body-2': 1.4444
        'body-1': 1.5
        caption: 1.571428571428571
        base: 1.5
      }
      size: {
        'display-7': '3.75rem'
        'display-6': '3rem'
        'display-5': '2.375rem'
        'display-4': '1.875rem'
        'display-3': '1.5rem'
        'display-2': '1.25rem'
        'display-1': '1.125rem'
        'label-2': '1rem'
        'label-1': '1rem'
        'body-2': '1.125rem'
        'body-1': '1rem'
        caption: '0.875rem'
        base: '1rem'
        root: '16px'
      }
      stack: {
        'display-7': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '3.75rem'
          'font-weight': 600
          'line-height': 1.267
        }
        'display-6': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '3rem'
          'font-weight': 600
          'line-height': 1.292
        }
        'display-5': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '2.375rem'
          'font-weight': 600
          'line-height': 1.316
        }
        'display-4': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1.875rem'
          'font-weight': 600
          'line-height': 1.333
        }
        'display-3': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1.5rem'
          'font-weight': 600
          'line-height': 1.333
        }
        'display-2': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1.25rem'
          'font-weight': 600
          'line-height': 1.3
        }
        'display-1': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1.125rem'
          'font-weight': 600
          'line-height': 1.4444
        }
        'label-2': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1rem'
          'font-weight': 600
          'line-height': 1.5
        }
        'label-1': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1rem'
          'font-weight': 600
          'line-height': 1.5
        }
        'body-2': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1.125rem'
          'font-weight': 700
          'line-height': 1.4444
        }
        'body-1': {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '1rem'
          'font-weight': 400
          'line-height': 1.5
        }
        caption: {
          'font-family': "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif"
          'font-size': '0.875rem'
          'font-weight': 400
          'line-height': 1.571428571428571
        }
      }
      weight: {
        light: 300
        regular: 400
        medium: 500
        'semi-bold': 600
        bold: 700
        'extra-bold': 800
        'display-7': 600
        'display-6': 600
        'display-5': 600
        'display-4': 600
        'display-3': 600
        'display-2': 600
        'display-1': 600
        'label-2': 600
        'label-1': 600
        'body-2': 700
        'body-1': 400
        caption: 400
        link: 400
      }
    }
    modifier: {
      alias: {
        cta: {
          primary: {
            disabled: {
              opacity: '0.5'
            }
          }
        }
      }
      layer: {
        '0': '0'
        '10': '100'
        '20': '200'
        '30': '300'
        '40': '400'
        '50': '500'
        '60': '600'
        '70': '700'
        '80': '800'
        '90': '900'
        '100': '1000'
        base: 'auto'
        bottom: '-1'
        top: '99999'
      }
      opacity: {
        '0': '0'
        '6': '0.6'
        '10': '0.1'
        '20': '0.2'
        '30': '0.3'
        '40': '0.4'
        '50': '0.5'
        '60': '0.6'
        '70': '0.7'
        '80': '0.8'
        '90': '0.9'
        '100': '1'
        hidden: '0'
        visible: '1'
      }
      transition: {
        default: 'ease-out'
        duration: '0.2s'
        timing: 'ease-out'
      }
    }
    size: {
      alias: {
        form: {
          border: {
            radius: '2px'
          }
        }
        input: {
          border: {
            radius: '0px 2px 2px 0px'
          }
        }
        ratings: {
          stroke: {
            width: '0.5px'
          }
        }
      }
      border: {
        width: {
          xs: '0.5px'
          sm: '1px'
          md: '2px'
          lg: '4px'
          xl: '8px'
          base: '2px'
        }
        radius: {
          xs: '0.5px'
          sm: '1px'
          md: '2px'
          lg: '4px'
          xl: '12px'
          base: '2px'
        }
      }
      breakpoint: {
        'max-width': {
          '2xs': '319.98px'
          xs: '575.98px'
          sm: '767.98px'
          md: '991.98px'
          lg: '1199.98px'
          xl: '1399.98px'
        }
        'min-width': {
          '2xs': '0px'
          xs: '320px'
          sm: '576px'
          md: '768px'
          lg: '992px'
          xl: '1200px'
          '2xl': '1400px'
        }
      }
      spacing: {
        xs: '2px'
        sm: '4px'
        md: '8px'
        lg: '16px'
        xl: '24px'
        '2xl': '32px'
        '3xl': '40px'
        '4xl': '48px'
        '5xl': '56px'
        '6xl': '64px'
        '7xl': '72px'
        '8xl': '80px'
        base: '8px'
      }
    }
    time: {
      instant: 0
      slowest: 100000
      slow: 10000
      base: 1000
      fast: 100
      fastest: 10
    }
  }
}
