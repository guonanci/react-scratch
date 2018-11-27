import * as React from 'react'

import FCCounter from '@/components/fc-counter.usage'
import FCSpreadAttributes from '@/components/fc-spread-attributes.usage'
import StatefulCounter from '@/components/stateful-counter.usage'
import StatefulCounterWithInitialCount from '@/components/stateful-counter-with-default.usage'
import UserListUsage from '@/components/generic-list.usage'

export function Home () {
  return (
    <section>
      <FCCounter />
      <FCSpreadAttributes />
      <StatefulCounter />
      <StatefulCounterWithInitialCount />
      <UserListUsage />
    </section>
  )
}
