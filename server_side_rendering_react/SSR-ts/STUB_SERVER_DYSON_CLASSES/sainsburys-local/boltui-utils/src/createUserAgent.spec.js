import createUserAgent from './createUserAgent'

test.each`
  version      | token        | expected
  ${undefined} | ${undefined} | ${'ui-service/production'}
  ${1}         | ${undefined} | ${'ui-service/production (v1)'}
  ${undefined} | ${'abc123'}  | ${'ui-service/production abc123'}
  ${1}         | ${'abc123'}  | ${'ui-service/production (v1) abc123'}
`('returns "$expected" when token is "$token" and version is "$version"', ({ version, token, expected }) => {
  expect(
    createUserAgent('ui-service', 'production', {
      version,
      token
    })
  ).toBe(expected)
})
