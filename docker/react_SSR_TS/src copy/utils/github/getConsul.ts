import { Octokit } from 'octokit'

export const getConsul = async ({
  repo,
  env,
  file,
}: {
  repo: string
  env: string
  file: string
}) => {
  const octokit = new Octokit({
    auth: process.env.GITHUB_PACKAGES_AUTH_TOKEN,
  })

  try {
    const { data } = (await octokit.rest.repos.getContent({
      owner: 'sainsburys-tech',
      repo: 'argos-checkout-ui-consul',
      path: decodeURI(`consul/configs/${repo}/${env}/${file}.json`),
    })) as any

    const decodedData = Buffer.from(data.content, 'base64').toString()
    return JSON.parse(decodedData)
  } catch (error) {
    console.error(error)
    return null
  }
}
