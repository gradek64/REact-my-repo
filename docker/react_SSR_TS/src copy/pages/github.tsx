import React, { useState } from 'react'
import { Button } from '@sainsburys-tech/bolt'
import { Octokit } from 'octokit'
import { createPullRequest } from 'octokit-plugin-create-pull-request'
import { changedKeys, generateBranchName, giphySearch } from '../utils'

const Github = ({
  GITHUB_PACKAGES_AUTH_TOKEN,
}: {
  GITHUB_PACKAGES_AUTH_TOKEN: string
}) => {
  const [fetching, setFetching] = useState(false)

  const MyOctokit = Octokit.plugin(createPullRequest)
  const octokit = new MyOctokit({
    auth: GITHUB_PACKAGES_AUTH_TOKEN,
  })

  const oldState = {
    config: {
      ARGOS: {
        creditRate: '34.9%',
        dfpUrl: 'argos.co.uk',
      },
      HABITAT: {
        creditRate: '34.9%',
        dfpUrl: 'argos.co.uk',
      },
    },
    features: {
      season: 'default',
      cape: true,
      mpp: false,
      redirectToOutOfStock: true,
      nectarEarnNonLinked: false,
      paypalFallback: false,
      editContactAddress: true,
    },
  }

  const newState = {
    config: {
      ARGOS: {
        creditRate: '34.9%',
        dfpUrl: 'argos.co.uk',
      },
      HABITAT: {
        creditRate: '34.9%',
        dfpUrl: 'argos.co.uk',
      },
    },
    features: {
      season: 'default',
      cape: false,
      mpp: false,
      redirectToOutOfStock: true,
      nectarEarnNonLinked: false,
      paypalFallback: false,
      editContactAddress: true,
    },
  }

  const valuesUpdated = changedKeys(oldState, newState)

  const raisePullRequest = async ({ merge = false }: { merge?: boolean }) => {
    setFetching(true)
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
              'consul/mockConfig.json':
                JSON.stringify(newState, null, 2) + '\n',
            },
            commit: `Updating: ${valuesUpdated.join(', ')}`,
          },
        ],
      })
      .then(async (pr) => {
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
        setFetching(false)
      })
  }

  return (
    <div>
      <h1>Github</h1>
      <p>This is the github page.</p>
      <div>
        <Button
          disabled={fetching}
          onClick={() => raisePullRequest({ merge: false })}
          style={{ margin: '20px', width: '120px' }}
        >
          Raise PR
        </Button>

        <Button
          disabled={fetching}
          onClick={() => raisePullRequest({ merge: true })}
          style={{ margin: '20px', width: '120px' }}
        >
          Merge
        </Button>
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      GITHUB_PACKAGES_AUTH_TOKEN: process.env.GITHUB_PACKAGES_AUTH_TOKEN,
    },
  }
}

export default Github
