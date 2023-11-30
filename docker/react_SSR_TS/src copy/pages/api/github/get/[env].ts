import { Octokit } from 'octokit'
import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { env } = req.query
  const octokit = new Octokit({
    auth: process.env.GITHUB_PACKAGES_AUTH_TOKEN,
  })

  try {
    const { data } = (await octokit.rest.repos.getContent({
      owner: 'sainsburys-tech',
      repo: 'argos-checkout-ui-consul',
      path: 'consul/mockConfig.json',
    })) as any

    const decodedData = Buffer.from(data.content, 'base64').toString()
    res.json(decodedData)
  } catch (error: any) {
    const status = error?.response?.status || 500
    const data = error?.data
    res.status(status).json(data)
  }

  res.end()
}
