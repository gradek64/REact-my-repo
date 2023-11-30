import { changedKeys } from '../changedKeys'
import { generateBranchName } from '../generateBranchName'
import { giphySearch } from '../giphySearch'

export const raisePullRequest = async ({
  merge = false,
  oldState,
  newState,
  octokit,
}: {
  merge?: boolean
  oldState: string
  newState: string
  octokit: any
}) => {
  const valuesUpdated = changedKeys(JSON.parse(oldState), JSON.parse(newState))
  const gif = await giphySearch(valuesUpdated.join(' '))

  octokit
    .createPullRequest({
      owner: 'sainsburys-tech',
      repo: 'argos-checkout-ui-consul',
      title: `🤖 Updating: ${valuesUpdated.join(', ')}`,
      body: gif,
      base: 'main',
      head: generateBranchName(valuesUpdated),
      forceFork:
        false /* optional: force creating fork even when user has write rights */,
      changes: [
        {
          files: {
            'consul/mockConfig.json': newState,
          },
          commit: `Updating: ${valuesUpdated.join(', ')}`,
        },
      ],
    })
    .then(async (pr: any) => {
      console.log('Raised PR')
      if (merge && pr) {
        await octokit.rest.pulls.merge({
          owner: 'sainsburys-tech',
          repo: 'argos-checkout-ui-consul',
          pull_number: pr.data.number,
          merge_method: 'squash',
        })
        console.log('Merged PR')
      }
    })
}
