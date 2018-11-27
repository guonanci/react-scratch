import * as React from 'react'

import { withState,  } from '@/hoc'
import { FCCounter,  } from '@/components'

const SFCCounterWithState =
  withState(FCCounter)

export default () => (
  <SFCCounterWithState label={'SFCCounterWithState'} />

)
