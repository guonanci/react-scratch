import * as React from 'react'

import { FCCounterConnected } from '@/connected/fc-counter-connected'
import FCSpreadAttributes from '@/components/fc-spread-attributes.usage'
import StatefulCounter from '@/components/stateful-counter.usage'
import StatefulCounterWithInitialCount from '@/components/stateful-counter-with-default.usage'
import UserListUsage from '@/components/generic-list.usage'

const Home: React.FunctionComponent = () => {
  return (
    <section>
      <FCCounterConnected />
      <FCSpreadAttributes />
      <StatefulCounter />
      <StatefulCounterWithInitialCount />
      <UserListUsage />
    </section>
  )
}
export default Home