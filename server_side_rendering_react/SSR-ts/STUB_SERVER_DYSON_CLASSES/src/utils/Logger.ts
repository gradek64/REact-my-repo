export enum LogLevel {
  TRACE = 10,
  DEBUG = 20,
  INFO = 30,
  WARN = 40,
  ERROR = 50,
  FATAL = 60,
}

export type Log = string | number | boolean | { [key: string]: Log | undefined }

type Output = {
  level: LogLevel
  [prop: string]: Log | undefined
}

export const getLevel = () => {
  if (typeof window !== 'undefined' && window.LOG_LEVEL) {
    return window.LOG_LEVEL
  }

  return Number(process.env.LOG_LEVEL) || LogLevel.INFO
}

/**
 * Converts a log message into Kibana-friendly output.
 *
 * It's best to log out JSON objects, as Kibana will parse and index the JSON
 * so that we can run queries and filters against individual fields in the log.
 */
const log = (obj: Log, level: LogLevel): void => {
  if (typeof obj === 'object' && obj !== null) {
    if (obj?.level) console.warn('`level` is a forbidden log property')
    if (obj?.message) console.warn('`message` is a forbidden log property')
  }

  // eslint-disable-next-line prefer-object-spread
  const output: Output = typeof obj === 'object' ? Object.assign({}, obj, { level }) : { msg: obj, level }

  const type = level >= LogLevel.ERROR ? 'error' : level === LogLevel.WARN ? 'warn' : 'log'
  console[type](JSON.stringify(output))
}

const Logger = {
  /** Outputs a Kibana-friendly log if the log level verbosity is set to "TRACE". */
  trace: (obj: Log) => {
    if (getLevel() <= LogLevel.TRACE) log(obj, LogLevel.TRACE)
  },

  /** Outputs a Kibana-friendly log if the log level verbosity is set to "DEBUG". */
  debug: (obj: Log) => {
    if (getLevel() <= LogLevel.DEBUG) log(obj, LogLevel.DEBUG)
  },

  /** Outputs a Kibana-friendly log if the log level verbosity is set to "INFO". */
  info: (obj: Log) => {
    if (getLevel() <= LogLevel.INFO) log(obj, LogLevel.INFO)
  },

  /** Outputs a Kibana-friendly log if the log level verbosity is set to "WARN". */
  warn: (obj: Log) => {
    if (getLevel() <= LogLevel.WARN) log(obj, LogLevel.WARN)
  },

  /** Outputs a Kibana-friendly log if the log level verbosity is set to "ERROR". */
  error: (obj: Log) => {
    if (getLevel() <= LogLevel.ERROR) log(obj, LogLevel.ERROR)
  },

  /** Outputs a Kibana-friendly log if the log level verbosity is set to "FATAL". */
  fatal: (obj: Log) => {
    if (getLevel() <= LogLevel.FATAL) log(obj, LogLevel.FATAL)
  },
}

export default Logger
