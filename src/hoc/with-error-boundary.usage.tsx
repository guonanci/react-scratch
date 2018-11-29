import * as React from 'react'

import { withErrorBoundary,  } from '@/hoc'
import { ErrorMsg,  } from '@/components'

const ErrorMsgWithErrorBoundary =
  withErrorBoundary(ErrorMsg)

const BrokenBtn = () => (
  <button type='button' onClick={() => { throw new Error('Catch me!') }}>
    Throw nasty error
  </button>
)

export default () => (
  <ErrorMsgWithErrorBoundary>
    <BrokenBtn />
  </ErrorMsgWithErrorBoundary>
)