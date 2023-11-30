import { NextApiRequest, NextApiResponse } from 'next'
import { Octokit } from 'octokit'
import { createPullRequest } from 'octokit-plugin-create-pull-request'
import { changedKeys, generateBranchName, giphySearch } from '../../../../utils'

export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const { merge = false, oldState, newState, location } = req.body
  const { repo, env, file } = location

  if (!location || !oldState || !newState) {
    res.status(400).json({
      message: 'Bad request: needs env, oldState and newState',
    })
    res.end()

    return
  }

  const MyOctokit = Octokit.plugin(createPullRequest)
  const octokit = new MyOctokit({
    auth: process.env.GITHUB_PACKAGES_AUTH_TOKEN,
  })

  console.log('Raising PR')

  try {
    const valuesUpdated = changedKeys(oldState, JSON.parse(newState))

    const gif = await giphySearch(valuesUpdated.join(' '))

    const createdPR = await octokit.createPullRequest({
      owner: 'sainsburys-tech',
      repo: 'argos-checkout-ui-consul',
      title: `🤖 Updating: ${valuesUpdated.join(', ')}`,
      body: gif,
      base: 'main',
      head: generateBranchName(valuesUpdated),
      changes: [
        {
          files: {
            [`consul/configs/${repo}/${env}/${file}.json`]: newState,
          },
          commit: `Updating: ${valuesUpdated.join(', ')}`,
        },
      ],
    })

    if (merge && createdPR) {
      await octokit.rest.pulls.merge({
        owner: 'sainsburys-tech',
        repo: 'argos-checkout-ui-consul',
        pull_number: createdPR.data.number,
        merge_method: 'squash',
      })
    }
  } catch (error: any) {
    console.log('error')
    console.log(error)
    const status = error?.response?.status || 500
    const data = error?.data
    res.status(status).json(data)
  }

  res.end()
}
