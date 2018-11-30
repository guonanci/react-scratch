import * as React from 'react'
import { FCSpreadAttributes,  } from '@/components'

export default () => (
  <FCSpreadAttributes
    className={'classy m5 fz5'}
    style={{ backgroundColor: 'lightcyan' }}
  >
    {`I'll spread every property you give me, including styles, like margin: 5vw, font-size: 5vw`}
  </FCSpreadAttributes>
)