import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
  Button,
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
} from '@sainsburys-tech/bolt'
import { Octokit } from 'octokit'
import PageWithHeaderAndTitle from '../layouts/PageWithHeaderAndTitle'
import styled from 'styled-components'

import { Controlled as ControlledCodeMirror } from 'react-codemirror2'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer'

import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/addon/lint/lint.css'

import { JSHINT } from 'jshint'
import { raisePullRequest } from '../utils'
import { createPullRequest } from 'octokit-plugin-create-pull-request'

declare global {
  interface Window {
    JSHINT: any
  }
}

if (typeof navigator !== 'undefined') {
  require('codemirror/mode/javascript/javascript')
  require('codemirror/mode/css/css')
  require('codemirror/addon/lint/javascript-lint')
  require('codemirror/addon/lint/lint.js')
  require('codemirror/addon/hint/javascript-hint')

  window.JSHINT = JSHINT
}

const DiffViewContainer = styled.div`
  td {
    border-bottom: none;
    padding: 2px;
  }
`

const StyledControlledCodeMirror = styled(ControlledCodeMirror)`
  .CodeMirror {
    height: 100%;
  }

  .CodeMirror-scroll {
    margin-bottom: -20px;
  }
`

const Code = ({
  GITHUB_PACKAGES_AUTH_TOKEN,
}: {
  GITHUB_PACKAGES_AUTH_TOKEN: string
}) => {
  const MyOctokit = Octokit.plugin(createPullRequest)
  const octokit = new MyOctokit({
    auth: GITHUB_PACKAGES_AUTH_TOKEN,
  })
  const [showModal, setShowModal] = useState(false)
  const [fetching, setFetching] = useState(false)
  const [currentConsul, setCurrentConsul] = useState('')
  const [code, setCode] = useState('')

  const raisePR = async (merge: boolean) => {
    setFetching(true)
    await raisePullRequest({
      merge,
      oldState: currentConsul,
      newState: code,
      octokit,
    })
    setShowModal(false)
    setFetching(false)
  }

  useEffect(() => {
    const fetch = async () => {
      const { data } = (await octokit.rest.repos.getContent({
        owner: 'sainsburys-tech',
        repo: 'argos-checkout-ui-consul',
        path: 'consul/mockConfig.json',
      })) as any

      const decodedData = Buffer.from(data.content, 'base64').toString()
      console.log('currentState', decodedData)
      setCurrentConsul(decodedData)
      setCode(decodedData)
    }
    fetch()
  }, [])

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
      <PageWithHeaderAndTitle title="Config">
        <Modal show={showModal} onClose={() => setShowModal(false)} size="lg">
          <ModalHeader>Apply these changes?</ModalHeader>
          <ModalContent>
            <DiffViewContainer>
              <ReactDiffViewer
                oldValue={currentConsul}
                newValue={code}
                compareMethod={DiffMethod.WORDS}
                splitView={true}
                showDiffOnly={true}
              />
            </DiffViewContainer>
          </ModalContent>
          <ModalFooter>
            <div style={{ display: 'flex' }}>
              <Button
                kind="primary"
                full
                onClick={() => raisePR(false)}
                style={{ margin: '0 1rem' }}
                disabled={fetching}
              >
                Raise PR
              </Button>
              <Button
                kind="secondary"
                full
                onClick={() => raisePR(true)}
                style={{ margin: '0 1rem' }}
                disabled={fetching}
              >
                Merge Directly
              </Button>
            </div>
          </ModalFooter>
        </Modal>

        <StyledControlledCodeMirror
          value={code}
          options={{
            mode: {
              name: 'javascript',
              json: true,
              statementIndent: 2,
            },
            theme: 'material',
            lineNumbers: true,
            lineWrapping: true,
            lineHeight: 10,
            lint: true,
            gutters: ['CodeMirror-lint-markers'],
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value)
          }}
        />
        <br />
        <Button kind="primary" full onClick={() => setShowModal(true)}>
          Apply
        </Button>
      </PageWithHeaderAndTitle>
    </>
  )
}

export const getServerSideProps = async () => {
  return {
    props: {
      GITHUB_PACKAGES_AUTH_TOKEN: process.env.GITHUB_PACKAGES_AUTH_TOKEN,
    },
  }
}

export default Code
