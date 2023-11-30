import React from 'react'
import { Controlled as ControlledCodeMirror } from 'react-codemirror2'

import styled from 'styled-components'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/addon/lint/lint.css'

import { JSHINT } from 'jshint'
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

const StyledControlledCodeMirror = styled(ControlledCodeMirror)`
  .CodeMirror {
    height: 100%;
  }

  .CodeMirror-scroll {
    margin-bottom: -20px;
  }
`

const Code = ({
  code,
  setCode,
}: {
  code: string
  setCode: (code: string) => void
}) => {
  return (
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
  )
}

export default Code
