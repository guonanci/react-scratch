import * as React from 'react'
import { FCSpreadAttributes,  } from '@/components'

export default () => (
  <FCSpreadAttributes
    className={'classy'}
    style={{ backgroundColor: 'lightcyan' }}
  >
    {`I'll spread every property you give me!`}
  </FCSpreadAttributes>
)