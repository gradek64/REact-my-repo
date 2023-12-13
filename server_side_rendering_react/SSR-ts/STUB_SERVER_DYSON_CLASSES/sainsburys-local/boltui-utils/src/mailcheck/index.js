import mailcheck from './mailcheck'
import config from './config'

const addMailCheckToEmails = (emailFieldValue, customConfig = {}) => {
  if (Object.prototype.toString.call(customConfig) !== '[object Object]')
    throw new Error('Your customConfig param is not an Object')

  const { domains, topLevelDomains, secondLevelDomains } = { ...config, ...customConfig }

  return mailcheck.run({
    email: emailFieldValue,
    suggested: (suggestion) => {
      if (domains.includes(suggestion.domain)) {
        return suggestion.full
      }
      return undefined
    },
    empty: () => {
      return undefined
    },
    domains,
    secondLevelDomains,
    topLevelDomains
  })
}

export default addMailCheckToEmails
