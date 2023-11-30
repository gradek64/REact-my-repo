import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import PageWithHeaderAndTitle from '../layouts/PageWithHeaderAndTitle'
import { getConsulHash, getFeatures } from '../services/consul'
import { Features, FeatureValue, Filters } from '../types/features'

import FeatureToggleDashboard from '../features/FeatureToggleDashboard/FeatureToggleDashboard'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useState } from 'react'
import ApplyChangesModal from '../features/features/ApplyChangesModal'

import { Button } from '@sainsburys-tech/bolt'
import styled from 'styled-components'

interface HomeProps {
  features: Features
}

const ApplyChangesButton = styled(Button)`
  margin-top: 1rem;
`

const Home: NextPage<HomeProps> = () => {
  const [showModal, setShowModal] = useState(false)
  const hasPendingChanges = useSelector(
    (state: RootState) => Object.keys(state.pendingFeatures).length > 0
  )

  return (
    <>
      <Head>
        <link
          href="https://www.argos.co.uk/assets/bolt2/8.0.0/bolt-argos.min.css"
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
        />
      </Head>
      <PageWithHeaderAndTitle title="Feature toggle dashboard">
        <FeatureToggleDashboard />

        <ApplyChangesModal
          show={showModal}
          onClose={() => setShowModal(false)}
        />

        {hasPendingChanges && (
          <ApplyChangesButton onClick={() => setShowModal(true)}>
            Apply changes
          </ApplyChangesButton>
        )}
      </PageWithHeaderAndTitle>
    </>
  )
}

/**
 * In consul we can store data like this:
 * {
 *   "brands": ["ARGOS", "HABITAT"],
 *   "channels": ["WEB", "APP"]
 * }
 *
 * which means that the feature will be enabled if the user has is in any of these combinations:
 *
 * {
 *    "brands": "ARGOS",
 *    "channels": "WEB"
 * },
 * {
 *    "brands": "ARGOS",
 *    "channels": "APP"
 * }
 * {
 *    "brands": "HABITAT",
 *    "channels": "WEB"
 * },
 * {
 *    "brands": "HABITAT",
 *    "channels": "APP"
 * }
 *
 * This function generates these combinations
 */
function* generateCartesianProduct(
  ...inputArray: [string, string[]][]
): Generator<Record<string, string>> {
  const [head, ...tail] = inputArray
  const remainder = tail.length ? generateCartesianProduct(...tail) : [{}]
  for (let r of remainder) for (let h of head[1]) yield { ...r, [head[0]]: h }
}

const getRules = (
  features: Features
): Record<string, Record<string, string>[][]> => {
  const thing: Record<string, Record<string, string>[][]> = {}
  Object.entries(features).forEach(([featureName, featureValue]) => {
    if (Array.isArray(featureValue)) {
      // TODO: do it in here
      thing[featureName] = featureValue.flatMap((innerValue) => {
        const combinations = [
          ...generateCartesianProduct(...Object.entries(innerValue)),
        ]

        return combinations.map((combination) =>
          Object.entries(combination).map(([option, value]) => ({
            [option]: value,
          }))
        )
      })
    } else if (typeof featureValue === 'object') {
      const combinations = [
        ...generateCartesianProduct(...Object.entries(featureValue)),
      ]

      thing[featureName] = combinations.map((combination) =>
        Object.entries(combination).map(([option, value]) => ({
          [option]: value,
        }))
      )
    } else {
      // TODO: fix this
      thing[featureName] = [[{ brands: 'ARGOS' }]]
    }
    // } else if () {}

    // TODO: what if the value is a string or boolean!?

    // console.log(value)
  })
  // return Object.entries(features)

  return thing
}

export const getServerSideProps: GetServerSideProps = async () => {
  const features = await getFeatures()
  const hash = getConsulHash()

  // TODO: preset rules in here!

  return {
    props: {
      state: {
        features,
        hash,
        pendingFeatures: getRules(features),
      },
    },
  }
}

export default Home
