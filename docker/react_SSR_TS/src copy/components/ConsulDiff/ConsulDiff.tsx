import React from 'react'
import ReactDiffViewer, { DiffMethod } from 'react-diff-viewer'

import styled from 'styled-components'

const DiffViewContainer = styled.div`
  td {
    border-bottom: none;
    padding: 2px;
  }
`

const ConsulDiff = ({
  oldValue,
  newValueString,
}: {
  oldValue: any
  newValueString: string
}) => {
  const oldValueString = JSON.stringify(oldValue, null, 2)
  return (
    <DiffViewContainer>
      <ReactDiffViewer
        oldValue={oldValueString}
        newValue={newValueString}
        compareMethod={DiffMethod.WORDS}
        splitView={true}
        showDiffOnly={true}
      />
    </DiffViewContainer>
  )
}

export default ConsulDiff
