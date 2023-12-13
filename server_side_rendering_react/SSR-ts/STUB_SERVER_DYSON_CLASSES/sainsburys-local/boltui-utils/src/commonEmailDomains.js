const commonExternalEmailDomains = [
  'aol.com',
  'blueyonder.co.uk',
  'btinternet.com',
  'gmail.com',
  'googlemail.com',
  'hotmail.co.uk',
  'hotmail.com',
  'icloud.com',
  'live.co.uk',
  'live.com',
  'me.com',
  'msn.com',
  'ntlworld.com',
  'outlook.com',
  'sky.com',
  'talktalk.net',
  'tiscali.co.uk',
  'yahoo.co.uk',
  'yahoo.com'
]

const internalEmailDomains = ['argos.co.uk', 'homeretailgroup.com', 'sainsburys.co.uk', 'sainsburysbank.co.uk']

const commonEmailDomains = [...commonExternalEmailDomains, ...internalEmailDomains]

export { commonEmailDomains, commonExternalEmailDomains, internalEmailDomains }
