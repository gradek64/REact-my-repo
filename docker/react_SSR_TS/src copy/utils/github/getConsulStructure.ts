import { Octokit } from 'octokit'

export const getConsulStructure = async (path = '') => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PACKAGES_AUTH_TOKEN,
  })
  let once = false

  try {
    if (!once) {
      once = true
      const { data } = await octokit.rest.repos.getContent({
        owner: 'sainsburys-tech',
        repo: 'argos-checkout-ui-consul',
        path: decodeURI(`consul/configs${path ? `/${path}` : ''}`),
      })

      console.log('@@@@@ data', data)

      return data
    }
  } catch (error) {
    console.error(error)
    return null
  }
}
