import Types from 'Types'

import { connect,  } from 'react-redux'

import FCCounterUsage from '@/components/fc-counter.usage'
import { countersActions, countersSelectors } from '@/features/counters'

const mapStateToProps = (state: Types.RootState) => ({
  count: countersSelectors.getReduxCounter(state.counters),
})

export const FCCounterConnected = connect(mapStateToProps, {
  onIncrement: countersActions.increment,
  onDecrement: countersActions.decrement,
})(FCCounterUsage)