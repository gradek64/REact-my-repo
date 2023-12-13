import { commonEmailDomains } from '../commonEmailDomains'

const config = {
  domains: commonEmailDomains,
  secondLevelDomains: ['gmail', 'googlemail', 'yahoo', 'hotmail', 'live', 'outlook', 'msn', 'me'],
  topLevelDomains: ['com', 'net', 'org', 'edu', 'gov', 'eu', 'ie', 'us', 'net', 'info', 'biz', 'uk']
}

export default config
